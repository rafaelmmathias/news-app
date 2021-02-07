
import React from 'react'
import { configure, addDecorator } from "@storybook/react"
import ThemeDecorator from './themeDecorator';

addDecorator(ThemeDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}