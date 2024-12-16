'use client'
import styled from 'styled-components'

export const Nav = styled.nav``

export const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.warning};
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.darkWarning};
  }
`

export const Form = styled.form``
export const Input = styled.input``
export const Button = styled.button``
