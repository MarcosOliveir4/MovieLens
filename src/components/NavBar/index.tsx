'use client'

import * as S from './styles'

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/home?q=${search}`)
    setSearch('')
  }

  return (
    <S.Nav data-testid="navbar">
      <S.H2>
        <S.P
          onClick={() => router.push('/home')}
          data-testid="navbar-link-home"
        >
          <BiCameraMovie /> {'MovieLens'}
        </S.P>
      </S.H2>

      <S.Form onSubmit={handleSearch} data-testid="navbar-form">
        <S.Input
          data-testid="navbar-form-input"
          type="text"
          placeholder="Busque um filme"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <S.Button type="submit" data-testid="navbar-form-button">
          <BiSearchAlt2 />
        </S.Button>
      </S.Form>
    </S.Nav>
  )
}

export default NavBar
