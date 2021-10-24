import { useMemo } from "react";

const CalcularEdad = ({ fecha }) => {
  const Edad = useMemo(() => {
    const dateString = fecha;
    const now = new Date();

    const yearNow = now.getFullYear();

    const dob = new Date(dateString);

    const yearDob = dob.getFullYear();

    let yearAge = yearNow - yearDob;

    if (yearAge) {
      return yearAge > 1 ? `${yearAge} años` : `${yearAge} año`;
    } else {
      return "";
    }
  }, [fecha]);

  return <div className="text-center"> {Edad} </div>;
};

export default CalcularEdad;
