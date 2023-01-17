import styled from 'styled-components'
import fruit from '../../assets/svg/fruit.svg'
import background from '../../assets/svg/fundo_portfolio.svg'
import IResponsive from '../../interfaces/IResponsive'

export const Container = styled.div<IResponsive>`
  background: #156500 url(${background}) repeat-x;
  background-size: ${props => props.isBreakpoint && 'cover'};
  width: 100%;
  z-index: -1;
  /* position: relative; */
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  padding-top: 20vh;
`

export const Scenario = styled.img`
  max-width: 500px;
  /* position: absolute; */
  /* bottom: 10vh; */
  /* left: 15vw; */
  /* z-index: -1; */
`

export const PortfolioContainer = styled.div`
  display: flex;
  flex: 1;
  width: 80vw;
  /* max-width: 500px; */
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
`

export const ListPortfolio = styled.ul``

export const ItemPortfolio = styled.li`
  list-style-type: none;
  /* height: 800px; */
  /* z-index: 9; */
  display: flex;
  align-items: center;
  margin-top: 30px;

  &:before {
    content: url('${fruit}');
    padding-right: 8px;
    /* width: 23px; */
  }
`
