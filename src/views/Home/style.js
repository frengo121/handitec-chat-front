import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

export const WrapperChat = styled.div`
  background: white;
  min-height: 30vh;
  padding: 20px;
`
export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const StyledRow = styled(Row)`
  flex: 1;
  align-content: center;
`

export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledInput = styled.input`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 250px;
`

export const Wrapper = styled.div``
