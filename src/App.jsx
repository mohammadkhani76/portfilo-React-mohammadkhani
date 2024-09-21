import React, { useState } from "react";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";
import Business from "./components/Business/About";
import Product from "./components/Product/Card";
import Form from "./components/Form/Form";
import bioimage from "./assets/images/elonmusk1.png";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^0\d{10}$/; // شماره موبایل باید 11 رقم عددی باشد
    return phoneRegex.test(phone);
  };

  // تابع اعتبارسنجی ایمیل
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // الگوی رایج برای ایمیل
    return emailRegex.test(email);
  };

  const submitFormHandeler = (e) => {
    e.preventDefault();
    // بررسی پر بودن فیلدها
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert("Please fill out all the fields.");
      return;
    }
    setName("");
    setPhone("");
    setEmail("");
    setText("");
    // بررسی اعتبار شماره موبایل
    if (!validatePhone(phone.trim())) {
      alert(
        "The entered phone number is not valid. Please enter an 11-digit phone number."
      );
      return;
    }

    // بررسی اعتبار ایمیل
    if (!validateEmail(email.trim())) {
      alert(
        "The entered email is not valid. Please enter a valid email address."
      );
      return;
    }
    alert("Form submitted successfully!", { name, phone, email, text });
  };

  return (
    <div>
      <Header />
      <Bio
        bioimage={bioimage}
        title="I'm Elon Reeve Musk"
        description="is a businessman and investor"
      />

      <div className="products__container">
        <h2 className="products__title">product</h2>

        <div className="products__flex">
          <Product
            title="Tesla"
            firstdescription="Electric car company"
            description="Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California."
          />
          <Product
            title="SpaceX"
            firstdescription="Space exploration company"
            description="SpaceX designs, manufactures and launches advanced rockets and spacecraft."
          />
          <Product
            title="Neuralink"
            firstdescription="Brain-machine interface"
            description="Neuralink is a neurotechnology company developing implantable brain–machine interfaces."
          />
          <Product
            title="The Boring Company"
            firstdescription="Infrastructure and tunnel construction services"
            description="The Boring Company constructs safe, fast-to-dig, and low-cost transportation, utility, and freight tunnels."
          />
        </div>
      </div>

      <Business
        title="About Me"
        description="Elon Reeve Musk FRS ( born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and chief engineer at SpaceX; early stage investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world. Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company's electric vehicles, battery products and solar energy products."
      />
      <Form
        title="Contact Us"
        name={name}
        phone={phone}
        email={email}
        text={text}
        submitFormHandeler={submitFormHandeler}
        nameChangeHandler={nameChangeHandler}
        phoneChangeHandler={phoneChangeHandler}
        emailChangeHandler={emailChangeHandler}
        textChangeHandler={textChangeHandler}
      />
    </div>
  );
}

export default App;
