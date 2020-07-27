import React from 'react'

import { Col, Container, Row } from 'styled-bootstrap-grid'

import { WrapperHeader, StyledImage } from './style'

const Header = () => {
  return (
    <WrapperHeader>
      <Container fluid={true}>
        <Row>
          <Col lg={3} xs={12}>
            <StyledImage src="https://www.handytec.mobi/images/logos/handytec_logo_index.svg" />
          </Col>
        </Row>
      </Container>
    </WrapperHeader>
  )
}

export default Header
