import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import Providers from '../../Providers'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <Providers>{children}</Providers>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
