import React from 'react'
import { MailIcon } from '../../assets/images/Icons'

export const Location = () => {
  return (
    <div id='contact' className='lg:w-[1250px] px-[25px] m-auto mb-[96px]'>
        <p className='text-[#D81324] font-bold text-center'>// Свяжитесь с Нами //</p>
        <h2 className='text-[#0B2154] font-bold lg:text-[40px] text-[28px] text-center leading-8 lg:leading-10'>Свяжитесь с Нами по Любым Вопросам</h2>
        <ul className='flex flex-col lg:flex-row items-center justify-center gap-[24px] lg:my-[24px] my-[30px]'>
          <li className='flex flex-col gap-[8px] lg:w-[624px] w-full bg-[#F2F2F2] p-[24px]'>
            <strong className='text-[20px] text-[#0B2154]'>// Бронирование //</strong>
            <div className='flex items-center gap-[8px]'>
              <MailIcon />
              <a className='text-[#596277]' href="tel:+99897 717 11 18">+99897 717 11 18</a>
            </div>
          </li>
          <li className='flex flex-col gap-[8px] lg:w-[624px] w-full bg-[#F2F2F2] p-[24px]'>
            <strong className='text-[20px] text-[#0B2154]'>// Общие Вопросы //</strong>
            <div className='flex items-center gap-[8px]'>
              <MailIcon />
              <a className='text-[#596277]' href="tel:+99897 717 11 18">+99897 717 11 18</a>
            </div>
          </li>
        </ul>
        <iframe className='lg:w-[1250px] lg:h-[356px] w-full' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11996.465678980827!2d69.218487!3d41.262801!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE1JzQ3LjUiTiA2OcKwMTMnMDkuOCJF!5e0!3m2!1sru!2sus!4v1743579968618!5m2!1sru!2sus" width="1250" height="356"></iframe>
    </div>
  )
}
