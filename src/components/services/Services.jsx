import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__contariner">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desgin</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Iterative design process</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Modular, flexible project plans</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>User stories.


</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Wireframes.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Content strategy..</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
          <li>
              <BsCheck className="service__list-icon" />
              <p>Drupal Web Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Drupal Website Design.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Laravel Web Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>HTML5 Web Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Drupal Responsive Design</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Drupal Theming</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Drupal Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Contentful Web Development</p>
            </li>
          </ul>
        </article>
        {/* End Of web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Multimedia presentations</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Powerpoint presentations</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>e-Book content</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Video content</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Content strategy development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Branding</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation  */}
      </div>
    </section>
  );
}

export default Services;
