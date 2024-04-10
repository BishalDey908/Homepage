import React from 'react'
import pic1 from "../img/andrew-valdivia-P1uZaHy9Yns-unsplash.jpg"
import pic2 from "../img/pexels-pixabay-264600.jpg"
import pic3 from "../img/pexels-rick-han-2793466.jpg"
import pic4 from "../img/pexels-pixabay-276005.jpg"
import pic5 from "../img/pexels-melike-baran-18387811.jpg"
import Intro from './Intro'
import Examples from './Examples'

const Herosection = () => {
  return (
    <div>
    <Intro/>
    <div className='flex'>
      <div className='m-10'>
        <img className='w-[1555px] rounded-2xl' src={pic1} alt=""  />
      </div>
      <div className='m-10 '>
      <h1 className='pt-40 text-6xl'>Intro</h1>
      <br />
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero laudantium blanditiis sed ratione. Tempore vitae beatae dignissimos, animi ab ullam cum et unde, pariatur omnis consectetur ipsum deserunt rem corporis exercitationem repellendus non quod provident nulla. Eligendi cum modi sint eius rem! Facilis molestias praesentium minus tenetur. Dicta adipisci, ea impedit incidunt neque temporibus odit labore non! Veniam qui nihil ut deserunt ad et! Quaerat veritatis voluptatibus, repellendus, officia magnam perferendis, quae officiis molestiae ullam voluptatem aut blanditiis atque iure porro sit vel dolores distinctio neque vero. Molestias eaque obcaecati molestiae provident pariatur delectus maxime tempora?</p>
      </div>
    </div>

    <div className='flex mt-10 flex-col'>
      <div className='m-10 flex my-4 gap-4'>
        <img className='w-[355px] rounded-2xl' src={pic3} alt=""  />
        <img className='w-[850px] h-[480px] rounded-2xl' src={pic4} alt=""  />
        <img className='w-[355px] rounded-2xl' src={pic5} alt=""  />
      </div>
      <div className='mt-[-80px] mx-10'>
      <h1 className='pt-28 text-6xl'>Intro</h1>
      <br />
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero laudantium blanditiis sed ratione. Tempore vitae beatae dignissimos, animi ab ullam cum et unde, pariatur omnis consectetur ipsum deserunt rem corporis exercitationem repellendus non quod provident nulla. Eligendi cum modi sint eius rem! Facilis molestias praesentium minus tenetur. Dicta adipisci, ea impedit incidunt neque temporibus odit labore non! Veniam qui nihil ut deserunt ad et! Quaerat veritatis voluptatibus, repellendus, officia magnam perferendis, quae officiis molestiae ullam voluptatem aut blanditiis atque iure porro sit vel dolores distinctio neque vero. Molestias eaque obcaecati molestiae provident pariatur delectus maxime tempora?</p>
      </div>
    </div>
    <Examples/>
    </div>
  )
}

export default Herosection
