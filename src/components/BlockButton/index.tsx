import React, { useState } from 'react'

import { Container, Icon } from './styles'

interface IBlockButtonContainer {
  // isClicked: boolean
  onClick: React.MouseEventHandler<HTMLDivElement>
}

interface IBlockButton extends IBlockButtonContainer {
  icon: string
}

const BlockButton: React.FC<IBlockButton> = ({ onClick, icon }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClickButton = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 1000)
  }

  return (
    <Container
      isClicked={isClicked}
      onClick={e => {
        handleClickButton()
        onClick(e)
      }}
    >
      <div />
      <div />
      <div />
      <Icon src={icon} alt="icon" />
    </Container>
  )
}

export default BlockButton
