import styled, { keyframes } from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'
import skeleton_dead from '../../assets/svg/skeleton_dead.svg'
import skeleton from '../../assets/svg/skeleton.svg'
import skeleton_dying from '../../assets/svg/skeleton_dying.svg'

const skeletonAnimation = keyframes`
  0% {
    -moz-background: url(${skeleton}) no-repeat center;
    -webkit-background: url(${skeleton}) no-repeat center;
    background: url(${skeleton}) no-repeat center;
   }
   5% {
    -moz-background: url(${skeleton_dying}) no-repeat center;
    -webkit-background: url(${skeleton_dying}) no-repeat center;
    background: url(${skeleton_dying}) no-repeat center;
   }
   10% {
    -moz-background: url(${skeleton_dead}) no-repeat center;
    -webkit-background: url(${skeleton_dead}) no-repeat center;
    background: url(${skeleton_dead}) no-repeat center;
   }
  100% {
    -moz-background: url(${skeleton_dead}) no-repeat center;
    -webkit-background: url(${skeleton_dead}) no-repeat center;
    background: url(${skeleton_dead}) no-repeat center;
  }
`

interface IContainer {
  background: any
}

// interface IHover {
//   backgroundHover: any
// }

export const Container = styled.div<IContainer>`
  -moz-background: #0064b8 url('${props => props.background}') no-repeat center;
  -webkit-background: #0064b8 url('${props => props.background}') no-repeat
    center;
  background: #0064b8 url('${props => props.background}') no-repeat center;
  background-size: cover;
  min-height: 90vh;
  width: 100%;
  /* position: absolute; */
  /* top: 0; */
  z-index: -1;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;
`

export const ResponsiveDiv = styled.div<IResponsive>`
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.isBreakpoint ? 'column' : 'row')};
  width: 100%;
  align-items: ${props => props.isBreakpoint && 'center'};
  justify-content: ${props => !props.isBreakpoint && 'flex-start'};
`

export const PresentationContainer = styled.div<IResponsive>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  /* margin: 10vw; */
  margin-left: ${props => !props.isBreakpoint && '5vw'};
`

export const AvatarContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-bottom: 20px;
`

export const Avatar = styled.img`
  height: 130px;
  width: 130px;
  border: solid #fff 4px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 5px;
  align-items: center;

  svg {
    color: #000;
    font-size: 30px;
  }
`

export const DescriptionContainer = styled.div`
  background: #000;
  width: 80vw;
  max-width: 400px;
  padding: 20px;
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #fff;
  font-size: small;
  line-height: 1.6;
  margin-bottom: 80px;
`

export const SkillContainer = styled.div<IResponsive>`
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.isBreakpoint ? '150px' : '50px')};
  margin-left: ${props => !props.isBreakpoint && '10vw'};
`

export const Subtitle = styled.div`
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #fff;
  font-size: 1rem;
  background: #000;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 30px;
    margin: 0px 10px;
  }
`

export const StarIcon = styled.img``

export const ListSkills = styled.ul``

export const Skill = styled.li`
  width: auto;
  /* max-width: 300px; */
  margin-top: 8px;
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  list-style-type: none;

  .MuiAccordion-root {
    background: #000000;
    color: #fff;
  }

  .MuiButtonBase-root {
    /* padding: 0; */

    min-height: 30px;

    svg {
      color: #fff;
    }
  }

  .Mui-expanded {
    /* padding-top: 10px; */
  }
`

export const ListSubcategories = styled.ul``

export const Subcategory = styled.li`
  list-style-type: none;
  padding: 5px;
  color: #999;

  .MuiButtonBase-root {
    font-size: 12px;
  }

  .MuiAccordion-root {
    background: #000;
    color: #999;
  }

  .MuiButtonBase-root {
    padding: 0;

    svg {
      color: #999;
      width: 24px;
    }
  }

  .Mui-expanded {
    margin: 0;
  }
`

export const ListItems = styled.ul``

export const ItemSkill = styled.li`
  list-style-type: none;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover,
  &:active,
  &:focus {
    > span div {
      -moz-animation: ${skeletonAnimation} 2s;
      -webkit-animation: ${skeletonAnimation} 2s;
      animation: ${skeletonAnimation} 2s;
    }
  }
`

export const Skeleton = styled.div<IContainer>`
  width: 27px;
  height: 35px;
  margin-right: 15px;
  -moz-background: url('${props => props.background}') no-repeat center;
  -webkit-background: url('${props => props.background}') no-repeat center;
  background: url('${props => props.background}') no-repeat center;
`
