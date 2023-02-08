import styled, { css } from 'styled-components'
// import { spaceCalc } from '~/utils/theme/space';
import { PropsGrid } from '.'

/* ${({ mgn = [] }) => spaceCalc(mgn, 'margin')};
${({ pdg = [] }) => spaceCalc(pdg, 'padding')}; */
export const Root = styled.div<PropsGrid>`
  ${({ zind }) =>
    zind &&
    `
    position: relative;
    z-index: ${zind};`};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`};
  ${({ align }) => align && `text-align: ${align};`};
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex: 1;
    `};
`
