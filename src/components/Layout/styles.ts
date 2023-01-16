import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MainStyled = styled(motion.main)`
  height: 0;
`

interface IBadSunContainer {
  left: string
  top: string
}

export const BadSunContainer = styled.div<IBadSunContainer>`
  height: 60px;
  width: 60px;
  position: absolute;
  left: ${props => props.left && 'calc(' + props.left + 'px - 30px)'};
  top: ${props => props.top && 'calc(' + props.top + 'px - 30px)'};
  transition: left 0.8s ease-out, top 0.8s ease-out;
`

export const BadSun = styled.img``
