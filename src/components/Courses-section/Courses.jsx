import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Deveopment Services",
    
    students: 12.5,
    
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Android Development Services",
   
    students: 12.5,
    imgUrl: courseImg2,
  
  },

  {
    id: "03",
    title: "Flutter Development Services",
  
    students: 12.5,
    
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Free Software Services </h2>
                <p>
                Software can be expensive, but free programs have been a mainstay of the
                 desktop experience for decades, and today's offerings are powerful. You can find a great
                  variety of free audio and video editors, office suites, file utilities, organizers, photo converters,
                 and more. To keep things free, software developers can adopt an ad-based model, create donation-ware,
                  or use a shareware/freemium model that charges for extra features.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
