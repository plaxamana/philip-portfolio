/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/ContactMe.module.css'
import { useState } from 'react'
import InputGroup from '@/components/InputGroup'
import { useRouter } from 'next/router'

export default function ContactMe() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const router = useRouter()
  
  function handleSubmit(e) {
    e.preventDefault()
    if (!firstName.length || !email.length || !message.length) {
      alert(`
        Please fill in the missing fields: 
        ${firstName.length <= 0 ? 'First Name' : ''}
        ${email.length <= 0 ? 'Email' : ''}
        ${message.length <= 0 ? 'Message' : ''}
      `)
      return
    }

    fetch('https://usebasin.com/f/6b77537c1263', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'First Name': firstName,
        'Last Name': lastName,
        'Email': email,
        'Message': message,
      }),
    }).then((res) => {
      if (res.ok) router.push('/thank-you')
    })
    .catch(err => {
      console.log('Form submit error: ' + err)
      alert('Something went wrong in sending your message')
    })
    
  }

  return (
    <div className={`relative ${styles.contact}`} id='contact'>
      <div className='container mx-auto'>
        <div className='pt-32 pb-16 xl:pb-48'>
          <div className='pt-24 pb-8 text-center'>
            <p className='mb-2 text-3xl font-black'>
              Say hello! Shoot me a line below.
            </p>
          </div>
          <form
            className='z-10 grid w-full max-w-3xl grid-cols-2 p-4 mx-auto md:w-3/4 gap-y-3 gap-x-4'
            onSubmit={handleSubmit}
          >
            <InputGroup
              _for='firstName'
              type='text'
              label='First name'
              placeholder='Greatest'
              className='col-span-2 md:col-span-1'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required={true}
            />
            <InputGroup
              _for='lastName'
              type='text'
              label='Last name'
              placeholder='Ever'
              className='col-span-2 md:col-span-1'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <InputGroup
              _for='email'
              type='email'
              label='Email'
              className='col-span-2'
              placeholder='hacker12@gmail.com'
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InputGroup
              _for='Message'
              label='Message'
              textArea={true}
              className='col-span-2'
              placeholder='Hey you really have a cool site!'
              required={true}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
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


