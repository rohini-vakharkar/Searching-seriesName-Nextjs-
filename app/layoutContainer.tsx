'use client'
import React, { Children } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

type Props = {
    children: React.ReactNode
}

export default function LayoutContainer({children}: Props) {
  return (
     <QueryClientProvider client={queryClient}>
     {children}
    </QueryClientProvider>
  )
}