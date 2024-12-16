'use client'

import GlobalStyle from '@/styles/global'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@/styles/theme'
import NavBar from '@/components/NavBar'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
