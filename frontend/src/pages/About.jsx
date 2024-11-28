import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLettersBox from '../components/NewsLettersBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}text2={'US'}/>

      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is your trusted online destination for all your shopping needs. We offer a diverse selection of high-quality products at competitive prices, making it easy for you to find exactly what you’re looking for. With secure payments, fast shipping, and dedicated customer support, we ensure a hassle-free experience every time. At Forever, we’re committed to delivering top-notch service and products you can rely on. Shop with us today and experience the future of online shopping!</p>
        <p>Forever is your go-to online store for a seamless shopping experience. With a wide variety of products, fast checkout, and reliable delivery, we’re here to make shopping effortless. Shop with confidence at Forever, where quality and service last.</p>
       <b className='text-gray-800'>Our Mission</b>
       <p>At Forever, our mission is to provide a seamless and enjoyable shopping experience by offering a wide range of high-quality products at competitive prices. We are dedicated to delivering exceptional customer service, fast and reliable delivery, and secure transactions, ensuring complete satisfaction for every shopper. Our goal is to build lasting relationships with our customers, making Forever their trusted destination for all their shopping needs.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, we prioritize quality in every product we offer. Our team carefully selects items from trusted brands and suppliers, ensuring that each product meets high standards of durability and performance.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, we make shopping simple and convenient for you. Our user-friendly website allows you to easily browse, compare, and purchase products from the comfort of your home. With fast checkout, secure payment options, and reliable delivery, we ensure a smooth shopping experience every time. Enjoy the convenience of shopping anytime, anywhere, with Forever.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, exceptional customer service is our top priority. Our dedicated support team is available to assist you with any questions or concerns, ensuring a seamless shopping experience. Whether you need help with product information, order tracking, or returns, we're here to provide quick and friendly support every step of the way.</p>
        </div>
        
      </div>
      <NewsLettersBox/>
    </div>
  )
}

export default About
