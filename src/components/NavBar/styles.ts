'use client'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.softBlack};
`

export const H2 = styled.h2``

export const P = styled.p`
  gap: 0.5rem;
  display: flex;
  cursor: pointer;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.yellow};
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.darkYellow};
  }
`

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`
export const Input = styled.input`
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  border: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.black};
  padding: 0.3rem;
  font-size: 1.3rem;

  display: flex;
  align-items: center;
  cursor: pointer;

  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
    background-color: transparent;
  }
`
