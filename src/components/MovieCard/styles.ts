import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 340px;
  height: 620px;

  margin-bottom: 2.5rem;

  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.softBlack};
`

export const WrapperImg = styled.div`
  position: relative;
  height: 500px;
  border-radius: 4px;
  overflow: hidden;
`

export const Title = styled.h2``

export const VoteAverage = styled.p`
  gap: 0.5rem;
  display: flex;

  svg {
    color: ${({ theme }) => theme.colors.yellow};
  }
`

export const DetailsButton = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  padding: 1rem 0.5rem;
  font-weight: bold;

  transition: all 0.5s;
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }

  cursor: pointer;
`
