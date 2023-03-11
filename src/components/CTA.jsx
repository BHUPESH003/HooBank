import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our service now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt
          iusto ea, commodi hic magni accusamus!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button title="Explore Now" styles="mt-5"/>
      </div>
    </section>
  );
};

export default CTA;
