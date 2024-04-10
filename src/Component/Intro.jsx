import pic1 from "../img/12.jpg"

const Intro = () => {
  return (
    <div className="relative pt-12">
        <img className="w-full h-2/4 blur-sm" src={pic1} />

        <h1 className="absolute text-5xl pb-56 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700">
            Sling Academy</h1>
            <p className="absolute text-3xl text-white bottom-4 mx-10 mb-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit voluptatum repudiandae nesciunt cum dicta similique deleniti dolore quidem saepe recusandae, eum laboriosam neque maiores fugit quaerat mollitia distinctio? Facilis quod dignissimos repellendus dolor id officiis, nesciunt assumenda ad voluptate! Harum sunt reiciendis eius aperiam eligendi officiis totam aspernatur consectetur deserunt, necessitatibus, maiores eos id laborum expedita! Perspiciatis harum minima molestias eum laboriosam nesciunt officiis deserunt doloremque, error quia et sequi fugit culpa animi totam aliquam commodi, quo fugiat ex earum dolor porro. Doloremque, ad ipsam laudantium dolorum adipisci blanditiis eaque quia consectetur doloribus soluta dignissimos.</p>
    </div>
  )
}

export default Intro
