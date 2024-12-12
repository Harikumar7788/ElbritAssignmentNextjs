import React from "react";
import "./style.css";
import News from "../News";

function Ingredients() {
  const ingredientsData = [
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/images/div.elbzotech-banner-info-wrap@3x.png",
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/images/a.adv-thumb-link.png",
    },
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/images/bn2-3.jpg.png",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/images/div.elbzotech-banner-info-wrap.png",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/images/bn2-5.jpg.png",
    },
  ];

  return (
    <div>
      <section className="ingredients">
        <div className="header-card">
          <span className="section-tag">INGREDIENTS</span>
          <h2 className="section-title">Better Ingredients</h2>
          <p className="section-description">
            Only the best when you choose products offered on our platform - high-quality
            ingredients for high-quality products!
          </p>
        </div>

        <div className="ingredient-cards">
          {ingredientsData.map((ingredient, index) => (
            <div
              className="ingredient-card"
              key={index}
              style={{
                backgroundImage: `url(${ingredient.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="ingredient-card-content">
                <div>
                  <h3 className="ingredient-title">{ingredient.title}</h3>
                  <p className="ingredient-description">{ingredient.description}</p>
                  <a href="#" className="see-more">
                    SEE MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <News />
    </div>
  );
}

export default Ingredients;
