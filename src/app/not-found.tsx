import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h2 className='text-white'>Not Found</h2>
      <p className='text-white'>Could not find requested resource</p>
      <Link className='text-white border border-grey_tone rounded-md py-1 px-2 mt-5' href="/">Return Home</Link>
    </div>
  )
}