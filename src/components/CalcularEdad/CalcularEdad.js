import { useMemo } from "react";

const CalcularEdad = ({ fecha }) => {
  const Edad = useMemo(() => {
    debugger;
    const dateString = fecha;
    const now = new Date();

    const yearNow = now.getFullYear();

    const dob = new Date(dateString);

    const yearDob = dob.getFullYear();

    let yearAge = yearNow - yearDob;

    return yearAge > 1 ? `${yearAge} years` : `${yearAge} year`;
  }, [fecha]);

  return <div> {Edad} </div>;
};

export default CalcularEdad;
