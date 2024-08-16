
import React from 'react'
import ShimmerButton from '../../../../@/components/magicui/shimmer-button'



const Try = () => {
  return (
    <div>
 <div className="z-10 flex min-h-[16rem] items-center justify-center bg-red-200 ">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
    </div>
    </div>
  )
}

export default Try


