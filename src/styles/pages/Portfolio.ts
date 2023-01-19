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

  .MuiAccordion-root {
    background: #000000;
    color: #fff;
    width: 70vw;
  }

  .MuiButtonBase-root {
    /* padding: 0; */

    min-height: 30px;

    svg {
      color: #fff;
    }
  }

  .MuiAccordionDetails-root {
    /* padding: 8px 16px 0px 16px; */
  }
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemDescription = styled.div`
  font-size: 12px;
  color: #999;
  padding: 0px 16px 16px;
`

export const ItemSkills = styled.ul`
  list-style: none;
  padding-bottom: 16px;
`

export const Skill = styled.li`
  float: left;
  padding: 10px;
  font-size: 10px;
  color: #eec744;

  :hover {
    color: #555;
    transition: color 0.3s ease;
    cursor: default;
  }
`

export const Grid = styled.div<IResponsive>`
  display: grid;
  grid-template-columns: ${props =>
    props.isBreakpoint ? '1fr' : '0.5fr 1fr 1fr'};
  font-size: 10px;
  padding: 10px;
  background: #333;
`

export const GridColumn = styled.div``

export const GridTitle = styled.div`
  padding-bottom: 10px;
`

export const GridBody = styled.div<IResponsive>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${props => (props.isBreakpoint ? 'center' : 'flex-start')};
  /* height: 100%; */
  /* padding-left: 20px; */
  /* min-height: 30vh; */
`

export const LinkContainer = styled.div<IResponsive>`
  padding-left: ${props => !props.isBreakpoint && '2vw'};
  display: flex;
  flex-direction: ${props => (props.isBreakpoint ? 'row' : 'column')};
  justify-content: ${props =>
    props.isBreakpoint ? 'flex-end' : 'space-evenly'};
  height: ${props => (props.isBreakpoint ? '40px' : '29vh')};
  width: ${props => props.isBreakpoint && '100%'};

  a,
  a:visited,
  a:active {
    color: inherit;
    padding-right: ${props => props.isBreakpoint && '10px'};
  }
  a:hover {
    color: #eec744;
    transition: color 1s ease;
  }
`

export const MobileScreenContainer = styled.div<IResponsive>`
  height: 25vh;
  /* width: 17vh; */
  background: #999;
  border-radius: 8px;
  overflow: hidden;
  background: center;
  margin-bottom: ${props => props.isBreakpoint && '15px'};
`

export const DesktopScreenContainer = styled.div`
  /* height: 25vh; */
  /* width: 100%; */
  background: #999;
  overflow: hidden;
  background: center;
`

export const MobileScreen = styled.img`
  height: 25vh;
`

export const DesktopScreen = styled.img`
  height: 25vh;
`
