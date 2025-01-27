'use client'
import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem 0 1rem;

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`
