import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/amrit.jpg"
          alt="image showing Amrit"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Amrit</h1>
      <p>I blog about web and cloud application development.</p>
    </section>
  );
}
