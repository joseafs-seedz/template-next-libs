import React, { memo } from 'react'
import { Root } from './styled'

const OgSimple = () => {
  return <Root>simple component test</Root>
}

export const Simple = memo(OgSimple)
