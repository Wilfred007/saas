import React from 'react'
import { ReactNode } from "react"
import {cn} from '@/components/lib/utils'

const MaxWidthWapper = ({
  className,
  children
} : {
  className?: string
  children: ReactNode 
}) => {
  return (
    <div className={cn ('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWapper
