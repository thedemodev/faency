import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Input as InputPrimitive, InputProps as InputPrimitiveProps } from '@modulz/primitives'

type Variant = 'normal' | 'ghost'
type Size = 0 | 1

export type InputProps = InputPrimitiveProps & {
  variant?: Variant
  size?: Size & any
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const themeContext = useContext(ThemeContext)

  return (
    <InputPrimitive
      {...props}
      ref={forwardedRef}
      styleConfig={{
        base: {
          input: {
            normal: {
              appearance: 'none',
              cursor: 'default',
              color: themeContext.colors.black,
              fontFamily: themeContext.fonts.normal,
              outline: 'none',
              paddingTop: themeContext.space[0],
              paddingBottom: themeContext.space[0],
              borderRadius: themeContext.radii[4],
              verticalAlign: 'middle',
              width: '100%',
              boxSizing: 'border-box',
              WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
              transition: 'border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1)',
            },
            readOnly: {
              borderColor: themeContext.colors.gray,
              color: themeContext.colors.black,
            },
            disabled: {
              borderColor: themeContext.colors.gray,
              color: 'gray',
              cursor: 'not-allowed',
            },
            focus: {
              backgroundColor: themeContext.colors.white,
              border: '2px solid',
              borderColor: themeContext.colors.black,
              cursor: 'text',
            },
          },
          placeholder: {
            normal: {
              color: themeContext.colors.grays[5],
            },
          },
        },
        variants: {
          variant: {
            normal: {
              input: {
                normal: {
                  backgroundColor: themeContext.colors.white,
                  border: '1px solid',
                  borderColor: themeContext.colors.gray,
                },
              },
            },
            ghost: {
              input: {
                normal: {
                  cursor: 'text',
                },
              },
            },
          },
          size: {
            0: {
              input: {
                normal: {
                  fontSize: themeContext.fontSizes[1],
                  letterSpacing: '-0.01em',
                  height: themeContext.sizes[5],
                  lineHeight: themeContext.sizes[2],
                  paddingLeft: '12px',
                  paddingRight: '12px',
                },
              },
            },
            1: {
              input: {
                normal: {
                  fontSize: themeContext.fontSizes[2],
                  letterSpacing: '-0.01em',
                  height: themeContext.sizes[6],
                  lineHeight: themeContext.sizes[4],
                  paddingLeft: themeContext.space[2],
                  paddingRight: themeContext.space[2],
                },
              },
            },
          },
        },
      }}
    />
  )
})

Input.displayName = 'Input'

Input.defaultProps = { type: 'text', variant: 'normal', size: 0 }
