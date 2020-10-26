import React from "react"
import ClassCard from "./class-card.js"
import reformer from "../assets/img/ref-1.jpg"
import cadillac from "../assets/img/cad-1.jpg"
import chair from "../assets/img/chair-1.jpg"

function Cards(props) {
  return (
    <div>
      <ClassCard
        img={reformer}
        title="The Reformer"
        text="The Pilates reformer is an amazing piece of apparatus unlike no
            other, which helps you to find length and space in the body while
            under spring tension. Far from just a workout for your core, this
            piece of apparatus helps create internal pressure to elongate the
            spine, joints and muscles which then leads to greater flexibility,
            strength, stamina and a more balanced posture."
      />
      <ClassCard
        img={cadillac}
        title="The Cadillac"
        text="The Pilates Cadillac is a piece of equipment that most closely represents that of a bed with a frame. It takes our classic Mat and adds the springs for support and challenge. The trapeze table was developed in the mid 50's or early 60's. Joseph Pilates, the creator of the Pilates method, made all of his creations in the basement of his building. When he brought it up into the studio, one client saw the table and said 'Hey Joe, is that your new Cadillac?' and the name stuck. Joe possibly got the idea of this table after working with Eve Gentry, one of his clients, in the hospital after her mastectomy."
      />
      <ClassCard
        img={chair}
        title="The Chair"
        text="The Pilates chair, also called the wunda chair or low chair, is far from being a newcomer on the block. It has always been a part of any fully equipped Pilates studio and was created by Joseph Pilates himself. Lately, the chairs have been getting a new look, moving into the mainstream and losing their status as one of the 'mysterious' Pilates machines."
      />
    </div>
  )
}

export default Cards
