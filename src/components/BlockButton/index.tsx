import React, { useState } from 'react'

import { Container, Icon, BaseButton, Moeda, Brilho, Numero } from './styles'

interface IBlockButtonContainer {
  // isClicked: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onMouseOver?: any
}

interface IBlockButton extends IBlockButtonContainer {
  icon: string
  isMenu?: boolean
}

const BlockButton: React.FC<IBlockButton> = ({
  onClick,
  icon,
  onMouseOver,
  isMenu
}) => {
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
      onMouseOver={onMouseOver}
    >
      <Moeda isClicked={isClicked} />
      <Brilho isClicked={isClicked} />
      <Numero isClicked={isClicked} />
      <BaseButton isMenu={isMenu}>
        {!isMenu && <Icon src={icon} alt="icon" />}
      </BaseButton>
    </Container>
  )
}

export default BlockButton
