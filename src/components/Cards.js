import React from "react"
import ClassCardTop from "./ClassCardTop.js"
import ClassCardBottom from "./ClassCardBottom.js"
import CardDeck from "react-bootstrap/CardDeck"

import Col from "react-bootstrap/Col"

const Cards = props => {
  return (
    <div>
      <CardDeck>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCardTop
            img={props.data.personalTrainingClass}
            title="Personal Training"
            text="In a one on one session, you will get the opportunity to work on your individual needs, 
            using the Apparatus to help you achieve your goals. We will be working on the Reformer, Cadillac, 
            chairs, Pedi-pole, and more. Private classes are recommended if you are new to Pilates or suffer 
            from an injury or have a medical condition requiring special needs. 
            It is also recommended for athletes who are looking for balanced training to go hand in hand in their sports life. 
            I invite you to personal training at the studio or at your home for your comfort."
          />
        </Col>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCardTop
            img={props.data.reformerClass}
            title="Reformer Class"
            text="The reformer is designed to use spring-resistance methodology to maximize core strength and 
            improve muscular imbalances. Many exercises on the reformer incorporate mat pilates repertoire and 
            involve pulling, pressing, or holding a mobile carriage steady, while resisting tension from the anchored 
            steel springs. The reformer is an incredibly versatile apparatus and has the unique ability to adjust spring 
            tension for each exercise and level of power. Hence it's great for rehabilitation purposes too. 
            I invite you to choose a solo, duo, or group class on the reformer."
          />
        </Col>
      </CardDeck>
      <CardDeck>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCardBottom
            img={props.data.wallUnit}
            title="Tower & Mat Class"
            text="The 'wall unit' or also called 'tower' is a compressed version of the so-called 'Cadillac.' 
            Tower classes are an amazing way to practice the mat and to work with the springs. 
            They enable exercises that would not be possible without support but also provides the opportunity to try new challenges. 
            In this class, we will also work on functional and standing movements. It will fill you with postural awareness, feeling taller and lighter! 
            Whether you are a beginner or advanced level, you will find the lesson tailored to your abilities. 
            Classes can be private or in small groups of up to 4 participants training.
            I invite you to choose a solo, duo, or group class on tower & mat."
          />
        </Col>
        <Col className="p-1" xs={12} md={12} lg={6}>
          <ClassCardBottom
            img={props.data.prenatalClass}
            title="Prenatal & Postnatal"
            text="During pregnancy, there are changes in the woman's body that require attention. 
            In most cases, the ligaments and muscles in the abdomen lengthen and therefore weaken, and the spine's natural arches increase. 
            Also, the pelvis muscles - the pelvic floor, thigh, buttocks, and lower abdomen are weakening. 
            In prenatal classes, we will emphasize identifying pelvic floor muscles, breathing, strengthening the lower abdomen, buttocks, and inner thighs. 
            In postnatal classes, we start to heal and build strong foundations in your 'new' post-baby body, 
            which will prevent issues like lower back pain and shoulder and neck tension."
          />
        </Col>
      </CardDeck>
    </div>
  )
}

export default Cards
