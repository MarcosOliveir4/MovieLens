'use client'
import styled from 'styled-components'

export const MovieSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
  margin: 1.5rem auto;
`

export const MovieInfo = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-radius: 4px;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.softBlack};

  section:last-child {
    grid-column: span 3;
  }
`

export const MovieInfoSection = styled.section`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;

  h3 {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.yellow};
  }
`
