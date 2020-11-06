import React from "react"
import ClassCard from "./ClassCard.js"
import CardDeck from "react-bootstrap/CardDeck"
// import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Cards = props => {
  return (
    <div>
      <CardDeck>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCard
            img={props.data.personalTrainingClass}
            title="Personal Training"
            text="In this, one on one session, you will get the opportunity to work on your individual needs, using the Apparatus to help you achieve your goals. We will be working on the Reformer, Cadillac, chairs, Pedi-pole, and more.
Private classes are recommended if you are just starting this method, or if you suffer from injury, or you have a medical condition that requires special needs. if you are an athlete that looking for balanced training to go hand in hand in your sports life. I invite you to a personal training at the studio or at your home for your own comfort. "
          />
        </Col>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCard
            img={props.data.reformerClass}
            title="Reformer Class"
            text="The reformer is designed to use spring-resistance methodology to maximize core strength and improve muscular imbalances. Many exercises on the reformer incorporate mat pilates repertoire and involve pulling, pressing, or holding a mobile carriage steady, while resisting tension from the anchored steel springs. 
This an incredibly versatile apparatus and has the unique ability to adjust spring tension for each exercise and level of ability, hence it's great for rehabilitation purpose too. 
I invite you to choose solo, duo or group class on the reformer."
          />{" "}
        </Col>
      </CardDeck>
      <CardDeck className="">
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCard
            img={props.data.wallUnit}
            title="Tower & Mat Class"
            text="Small groups of up to max. 3 - 4 participants 
The 'wall unit' or also called 'tower' is a compressed version of the so-called 'Cadillac' of the trapeze table.
Tower classes are an amazing way to practice the mat and to work with the springs, they enable exercises that would not be possible without the support, but also gives you the opportunity to try new challenges. I invite you to choose solo, duo or group class on tower & mat."
          />{" "}
        </Col>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCard
            img={props.data.prenatalClass}
            title="Prenatal & Postnatal"
            text="In prenatal classes, we strengthen the bottom of the pelvis so that the uterus stays high throughout the pregnancy and maintain the mobility and flexibility of the pelvis in general. We also strengthen the lower abdomen and lower back and the strength of the legs to carry the pregnancy and maintain mobility and uprightness. Emphasis is placed on identifying pelvic floor muscles, breathing, strengthening the lower abdomen, buttocks, and inner thighs."
          />
        </Col>
      </CardDeck>
    </div>
  )
}

export default Cards
