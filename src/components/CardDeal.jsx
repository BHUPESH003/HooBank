import React from 'react'
import {card}  from '../assets'
import Button from './Button'
import styles from "../style";
import { layout } from "../style";

const CardDeal = () =>  (
  <section id="product" className={layout.section}>
 
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>
      Find a better card deal <br className="sm:block hidden" /> in few easy steps
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nobis
      perspiciatis tempora aspernatur, exercitationem harum unde ipsum. Qui,
      eaque. Delectus ipsa in est.
    </p>
    <Button styles="mt-10" title="Find deal"></Button>
   
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient" />
      <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full pink__gradient" />
    </div>
    </section>
  )


export default CardDeal