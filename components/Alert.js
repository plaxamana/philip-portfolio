import { FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function Alert({ message, closeAlert, setCloseAlert }) {
  return (
    <div
      className={`${
        closeAlert ? 'hidden' : null
      } z-50 sticky bottom-0 flex items-center justify-center w-full p-4 mx-auto text-lg text-center text-white bg-blue-700 `}
    >
      <div className='mr-2'>
        {message}
        <Link href='#contact'>
          <a className='underline'>Contact me below.</a>
        </Link>
      </div>
      <FiX className='w-6 h-6 cursor-pointer' onClick={setCloseAlert} />
    </div>
  )
}
