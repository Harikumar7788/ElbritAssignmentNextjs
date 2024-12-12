import React from "react";
import "./style.css";
import Footer from "../Footer";

function News() {
  const newsData = [
    {
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2022 Is Back",
      image: "/images/newsimage1.jpeg",
    },
    {
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2023 Is Back",
      image: "/images/newsimage2.jpeg",
    },
    {
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2022 Is Back",
      image: "/images/newsimage2.jpeg",
    },
    {
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2023 Is Back",
      image: "/images/newsimage1.jpeg",
    },
    {
      date: "17 MAR",
      title: "Hac hendrerit mus nos semper suspendisse",
      image: "/images/newsimage1.jpeg",
    },
    {
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2023 Is Back",
      image: "/images/newsimage2.jpeg",
    },
    {
      date: "17 MAR",
      title: "Hac hendrerit mus nos semper suspendisse",
      image: "/images/newsimage2.jpeg",
    },
    {
      date: "17 MAR",
      title: "Hac hendrerit mus nos semper suspendisse",
      image: "/images/newsimage1.jpeg",
    },
  ];

  return (
    <div>
      <section className="news">
        <h3 className="news-section-tag">OUR BLOG</h3>
        <h2 className="news-heading">Latest News</h2>
        <div className="news-cards">
          {newsData.map((news, index) => (
            <div
              className={`news-card ${index % 2 === 0 ? "large-card" : "small-card"}`}
              key={index}
            >
              <div className="news-date">{news.date}</div>
              <img src={news.image} alt={news.title} className="news-image" />
              <h1 className="title">{news.title}</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
