import React from "react";
import "./portfolio.css";
import PROJECT1 from "../../assets/project1.png";
import PROJECT2 from "../../assets/project2.png";
import PROJECT3 from "../../assets/project3.png";
import PROJECT4 from "../../assets/project4.png";

const data = [
  {
    id: 1,
    image: PROJECT1,
    title: "OMNIFOOD",
    dribbble: "https://dribbble.com/shots/18319780-OMNIFOOD-Website-Design?utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=OMNIFOOD%20Website%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=OMNIFOOD%20Website%20Design&utm_medium=Social_Share",
    demo: "https://singular-bonbon-c13d1a.netlify.app",
  },
  {
    id: 2,
    image: PROJECT2,
    title: "NEXT GENERATION TECHNOLOGY",
    dribbble: "https://dribbble.com/shots/18319859-NEXT-GENERATION-TECHNOLOGY?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=NEXT%20GENERATION%20TECHNOLOGY&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=NEXT%20GENERATION%20TECHNOLOGY&utm_medium=Social_Share",
    demo: "https://eclectic-blini-5eb582.netlify.app",
  },
  {
    id: 3,
    image: PROJECT3,
    title: "VALORANT Store ",
    dribbble: "https://dribbble.com/shots/18439007-Valorant-Store?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=Valorant%20Store&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=Valorant%20Store&utm_medium=Social_Share",
    demo: "https://valorantstore.netlify.app",
  },
  {
    id: 4,
    image: PROJECT4,
    title: "RISE Media ",
    dribbble: "https://dribbble.com/shots/22108687-Rise-media?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=Rise%20media&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Seriousless&utm_content=Rise%20media&utm_medium=Social_Share",
    demo: "https://rise-team.com",
  },
];

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, dribbble, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={dribbble} className="btn" target="_blank">
                dribbble
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default portfolio;
