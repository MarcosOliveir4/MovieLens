import * as S from './styles'

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const NavBar = () => (
  <S.Nav>
    <h2>
      <S.A>
        <BiCameraMovie /> MovieLens
      </S.A>
    </h2>

    <S.Form>
      <S.Input type="text" placeholder="Busque um filme" />
      <S.Button type="submit">
        <BiSearchAlt2 />
      </S.Button>
    </S.Form>
  </S.Nav>
)
export default NavBar
