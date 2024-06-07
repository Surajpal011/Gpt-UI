import React from "react";
import './header.css';
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAi
        </h1>
        <p>
          Despite any need for travel assistance being displeasing, there are no
          thoughts of denying oneself the blessing of exercise. Indulgence paves
          the way for joy in every alternating boisterous attachment. Over the
          years, the party has allowed inquiries, inviting orders with openness
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Email Address" />
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1900 people requested acces a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
