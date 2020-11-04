import React from "react"
import ClassCard from "./Class-card.js"
import CardDeck from "react-bootstrap/CardDeck"

const Cards = props => {
  return (
    <div>
      <CardDeck>
        <ClassCard
          img={props.data.reformer}
          title="Personal Training"
          text="In this, one on one session, you will get the opportunity to work on your individual needs, using the Apparatus to help you achieve your goals. We will be working on the Reformer, Cadillac, chairs, Pedi-pole, and more.
Private classes are recommended if you are just starting this method, or if you suffer from injury, or you have a medical condition that requires special needs. if you are an athlete that looking for balanced training to go hand in hand in your sports life."
        />
        <ClassCard
          img={props.data.cadillac}
          title="Reformer"
          text="The Reformer is becoming the most popular piece of Pilates equipment around the world. Invented by Joseph Pilates, was originally named for “universally reforming the body” 
the Pilates Reformer is designed to use spring-resistance methodology to maximize core strength and improve muscular imbalances. 
Many exercises on the Reformer incorporate Mat Pilates repertoire, is low impact, and involve pulling, pressing, or holding a moving carriage steady while you resist tension from anchored steel springs. 
One of the best advantages of working on a Reformer is that it’s an incredibly versatile apparatus (more than 500 Exercises) and has the unique ability to have spring tensions adjusted for each exercise and level of ability. This means that in each class, it’s possible to modify, progress, and tailor exercises to everyone - whether it’s for providing more support to the absolute beginner, or more challenge to the most experienced Pilates lovers.
Reformer Pilates is great for rehab purposes too as it allows the client to exercise in a horizontal plane of motion and not be vertically loaded and weight bearing through their legs."
        />
      </CardDeck>
      <ClassCard
        img={props.data.chair}
        title="Tower & mat class"
        text="small groups of up to max. 3 - 4 participants 
The 'wall unit' or also called 'tower' is a compressed version of the so-called 'Cadillac' of the trapeze table.
Tower classes are an amazing way to practice the mat and to work with the springs, they enable exercises that would not be possible without the support, but also gives you the opportunity to try new challenges."
      />
    </div>
  )
}

export default Cards
