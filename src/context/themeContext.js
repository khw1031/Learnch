import React, { createContext, useState, useMemo, useEffect } from "react"
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "../styles/scheme"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )

    rawSetColorMode(initialColorValue)
  }, [])

  const contextValue = useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement

      localStorage.setItem(COLOR_MODE_KEY, newValue)

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`

        root.style.setProperty(cssVarName, colorByTheme[newValue])
      })

      rawSetColorMode(newValue)
    }

    return {
      colorMode,
      setColorMode,
    }
  }, [colorMode, rawSetColorMode])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
