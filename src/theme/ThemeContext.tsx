"use client"

import React,{createContext, useState} from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyle'
import { IChildrenProps } from '@/types/props' 
import { light, dark } from './theme';

export const ThemeContext: React.Context<Object> = createContext<Object>({} as Object)



const Theme: React.FC<IChildrenProps> = ({children}) => {

  const [isDark, setDark] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{isDark, setDark}}>
      <ThemeProvider theme={isDark? dark : light }>
        <GlobalStyle theme={isDark ? dark : light}/>
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Theme