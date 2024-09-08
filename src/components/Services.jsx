import React, { useState } from "react";
import "../styles/services.css";
import Heading from "../common/Heading";
import { Services_Data } from "../data";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="services" id="services">
      <div className="services-heading">
        <Heading heading="My Services" />
      </div>
      <div className="service-container">
        {Services_Data.map((service) => {
          let description;
          if (!readMore) {
            description = service.s_desc.slice(0, 60) + "...";
          } else {
            description = service.s_desc;
          }
          return (
            <div key={service.id} className="service-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p className="description">{description}</p>
              <div className="services-readmore">
                <p onClick={() => setReadMore(() => !readMore)}>
                  {readMore ? "Less" : "Read More"}
                  <FaArrowRight className="arrow" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
