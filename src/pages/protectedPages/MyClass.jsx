import useMyClasses from "../../hooks/useMyClasses";

const MyClass = () => {
    const [myClassData] = useMyClasses();
    console.log(myClassData);
    return (
        <div>
            MY CLASS
        </div>
    );
};

export default MyClass;