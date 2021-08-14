import { FiX } from 'react-icons/fi'

export default function Alert({ message, closeAlert, setCloseAlert }) {
  return (
    <div
      className={`${
        closeAlert ? 'hidden' : null
      } z-50 absolute top-0 left-0 right-0 flex items-center justify-center w-full p-4 mx-auto text-lg text-center text-white bg-blue-700 border-2 border-blue-900 `}
    >
      <p className='mr-2'>{message}</p>
      <FiX className='w-6 h-6 cursor-pointer' onClick={setCloseAlert} />
    </div>
  )
}
