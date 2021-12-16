import styled from 'styled-components'
import IResponsive from '../../interfaces/IResponsive'

interface IContainer {
  background: any
}

export const Container = styled.div<IContainer>`
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
  justify-content: ${props => !props.isBreakpoint && 'space-around'};
`

// export const FlexRowDiv = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: center;
//   flex-wrap: wrap;
//   width: 100%;
//   margin-right: auto;
// `

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  /* margin: 10vw; */
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
`

export const DescriptionContainer = styled.div`
  background: #000;
  /* width: 300px; */
  width: 80vw;
  max-width: 400px;
  padding: 20px;
  /* margin: auto; */
  /* position: absolute;
  top: 40vh;
  left: 0;
  right: 0; */
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #fff;
  font-size: small;
  line-height: 1.6;
  margin-bottom: 80px;
`

export const SkillContainer = styled.div`
  /* background: teal; */
  /* justify-content: flex-start; */
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`

export const Subtitle = styled.div`
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #fff;
  font-size: 1rem;
  /* margin-bottom: 50px; */
  /* margin-bottom: 80px;
  margin-right: auto;
    margin-left: 10vw; */
  /* margin: 0 auto 80px 10vw; */
`

export const SkillBox = styled.div`
  background: #fff;
  padding: 30px;
  width: 80vw;
  max-width: 300px;
  margin-top: 30px;
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  color: #555;
  font-size: 1rem;
`

export const ListSkills = styled.ul``

export const Skill = styled.li`
  /* background: #fff; */
  /* padding: 30px; */
  width: 80vw;
  max-width: 300px;
  margin-top: 30px;
  font-family: 'Press Start 2P', 'Roboto', sans-serif;
  /* color: #555; */
  /* font-size: 1rem; */
  list-style-type: none;
`

export const ListItems = styled.ul``

export const ItemSkill = styled.li`
  list-style-type: none;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Skeleton = styled.img`
  width: 27px;
  margin-right: 15px;
`
