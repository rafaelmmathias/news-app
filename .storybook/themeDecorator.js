// themeDecorator.js
import React from "react"
import AppThemeProvider from "../src/theme"

const ThemeDecorator = storyFn => (
  <AppThemeProvider>{storyFn()}</AppThemeProvider>
)

export default ThemeDecorator