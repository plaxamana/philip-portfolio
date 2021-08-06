/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/ContactMe.module.css'

export default function ContactMe() {
  return (
    <div className={`relative ${styles.contact}`}>
      <div className='container mx-auto'>
        <div className='pt-32 pb-16 xl:pb-48'>
          <div className='pt-24 pb-8 text-center'>
            <p className='mb-2 text-3xl font-black'>
              Say hello! Shoot me a line below.
            </p>
            <p>Or shoot me an email at philip.j.laxamana@gmail.com</p>
          </div>
          <form
            className='z-10 grid w-full max-w-3xl grid-cols-2 p-4 mx-auto md:w-3/4 gap-y-3 gap-x-4'
            action='https://usebasin.com/f/6b77537c1263'
            method='POST'
          >
            <InputGroup
              _for='firstName'
              type='text'
              label='First name'
              placeholder='Greatest'
              className='col-span-2 md:col-span-1'
            />
            <InputGroup
              _for='lastName'
              type='text'
              label='Last name'
              placeholder='Ever'
              className='col-span-2 md:col-span-1'
            />
            <InputGroup
              _for='email'
              type='email'
              label='Email'
              className='col-span-2'
              placeholder='hacker12@gmail.com'
            />
            <InputGroup
              _for='Message'
              label='Message'
              textArea={true}
              className='col-span-2'
              placeholder='Hey you really have a cool site!'
            />
            <button
              type='submit'
              className='col-span-2 py-2 font-medium text-white duration-300 transform bg-orange-800 hover:scale-105'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const InputGroup = ({ _for, type, label, className, textArea, placeholder }) => {
  return textArea ? (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={_for} className='font-medium'>
        {label}
      </label>
      <textarea
        id={_for}
        name={_for}
        rows={8}
        className={`px-4 py-2 text-lg outline-none focus:border-b-4 focus:border-blue-700`}
        placeholder={placeholder}
      />
    </div>
  ) : (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={_for} className='font-medium'>
        {label}
      </label>
      <input
        type={type}
        id={_for}
        name={_for}
        className={`px-4 py-2 text-lg outline-none focus:border-b-4 focus:border-blue-700`}
        placeholder={placeholder}
      />
    </div>
  )
}
