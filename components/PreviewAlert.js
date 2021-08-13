import Link from 'next/link'

export default function PreviewAlert() {
  return (
    <div className='relative z-50 w-full py-8 mb-32 text-lg bg-blue-300'>
      You are in preview mode.{' '}
      <Link href='/api/exit-preview'>
        <a className='font-bold hover:underline'>Exit Preview Mode</a>
      </Link>
    </div>
  )
}
