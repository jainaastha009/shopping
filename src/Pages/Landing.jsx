import React from 'react'
import Hero from '../Components/Hero'
import FeaturedProduct from '../Components/FeaturedProduct'
import { customFetch } from '../Utils'

export const loader = (queryClient)=>async ()=>{
  const response= await customFetch('/products')
  const product=response.data.data;
  return {product}
  
}


const Landing = () => {
  const images = [
    'https://venettodesign.com/cdn/shop/files/We_bring_beauty_750_x_1100_px_1800_x_800_px_3.jpg?v=1688249577&width=1800',
    'https://images6.alphacoders.com/102/1020690.jpg',
    'https://www.pixelstalk.net/wp-content/uploads/images1/Living-room-comfort-curtains-family-fashion-furniture-garden-happiness-home-interior-landscape.jpg',
    
  ];
  return (
    <>
      <div className='overflow-hidden'>
      {/* <h1 className='text-2xl font-normal text-center'><span className='text-[#f06262] font-semibold hover:text-[#a66be6] hover:cursor-pointer '>Welcome</span> In COMFY</h1> */}

<div>
{/* 
  <div className="flex-grow p-2 font-serif card bg-base-300 rounded-box lg:mr-2">
    <div className="max-w-full overflow-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quia quaerat animi repudiandae, perferendis unde, corporis deserunt provident tempore eligendi vero assumenda blanditiis veniam, nostrum et officiis id nam. Impedit, numquam. Id voluptates voluptatum maxime, dignissimos nesciunt distinctio eos explicabo exercitationem praesentium fugiat fugit voluptate earum illo. Cumque dolores non ab nemo dolorem libero autem optio. Unde, illum! Deserunt sapiente, mollitia, inventore et odio molestiae omnis vitae harum, recusandae numquam animi soluta tenetur magni officiis. Dolor ex natus sequi voluptatum sit ab voluptate nesciunt ut doloremque tenetur recusandae libero incidunt odio rem eos totam perspiciatis minus sapiente rerum, aliquam repellendus modi accusantium? A maiores eum optio sed repellat distinctio doloribus veritatis aliquid quaerat impedit veniam iusto quasi nisi, aperiam deleniti quidem eius? Pariatur, officiis? Itaque exercitationem aperiam eligendi corrupti blanditiis, possimus repudiandae sunt explicabo ratione laborum, nemo iste, mollitia iusto nisi. Ad reiciendis tempore beatae consectetur quisquam accusantium eos pariatur suscipit, doloribus, nobis, est voluptatem! Aliquam tempora nobis earum obcaecati ratione fugiat similique repellendus odit voluptatem laborum facere repudiandae eum amet molestias quae quas, praesentium quo sunt impedit a molestiae reprehenderit vero! Necessitatibus, at, temporibus inventore maiores soluta ad eligendi sit hic dolorem, incidunt quibusdam enim quos id beatae fugiat velit omnis rerum totam nostrum distinctio error voluptate. Quam mollitia blanditiis ex in, dolores nihil cum sunt ad quos sint quia non tenetur, quasi a dolorem rerum aspernatur architecto commodi optio. Dolore, odio explicabo. Deserunt, quod veritatis ab illum facilis placeat, laudantium numquam nemo nulla id, molestiae adipisci autem iure.
    </div>
  </div> */}
  <div className="w-full ">
    <Hero images={images}/>
  </div>
</div>

    </div>
    <FeaturedProduct/>
    </>
  
  )
}

export default Landing
