import React from "react";
import Navbar from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useClassById from "../../hooks/useClassById";
import Loading from "../../components/Loading";

// todo: add publishable key 
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_PK);

const Payment = () => {

  const [classData, isLoading] = useClassById()
  
  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section className="min-h-screen">
        <SectionTitle title="Secure Checkout" subtitle={"Complete your enrollment and start learning today!"}/>
        
        <div>
          <Elements stripe={stripePromise} >
            <CheckoutForm  classData={classData}/>
          </Elements>
        </div>
      </section>
    </div>
  );
};

export default Payment;
