import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = ({ classData }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [payLoading, setPayLoading] = useState(false);

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: classData?.price })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [classData, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setPayLoading(true);
      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        // console.log("payment error", error);
        setError(error.message);
      } else {
        // console.log("payment method", paymentMethod);
        setError("");
      }

      // Payment

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        });

      if (confirmError) {
        setError(confirmError.message);
      } else {
        // payment done

        // console.log("paymentIntent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          const res = await axiosSecure.post("/my-enroll", {
            classId: classData._id,
            user: user.email,
            trxId: paymentIntent.id,
            submittedAssignmentId: [],
          });

          console.log(res.data);

          Swal.fire({
            title: `Payment for ${classData.title}`,
            text: `Payment Successfully Done`,
            icon: "success",
          });

          navigate("/dashboard/my-enroll-class");
        }
      }
    } catch (error) {
      // console.log(error);
    } finally {
      setPayLoading(false);
    }
  };

  return (
    <div className="max-w-xl mt-16 mx-auto border p-6">
      <div className="mb-8">
        <p className="text-xl font-semibold">{classData.title}</p>
        <p><span className="font-semibold">Course fee:</span> ${classData.price}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || payLoading}
          className="btn btn-outline mt-6"
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
        {payLoading && (
          <p className="mt-4">
            <span className="loading loading-spinner loading-sm" /> Please wait
            a sec
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
