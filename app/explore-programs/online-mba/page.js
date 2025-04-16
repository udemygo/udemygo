import CompareCourseComponent from '@/components/explore/CompareCourseComponent'
import OnlineMbaComponent from '@/components/OnlineMbaComponent'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-bl from-[#dddef8] rounded-3xl'>
    <CompareCourseComponent />
    <OnlineMbaComponent />
    </div>
  )
}

export default page