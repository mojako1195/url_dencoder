import { ChangeEvent, useState, memo, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { ConfigFlgContext } from "./providers/ConfigFlgProvider";

export const RadioButtonComponent = memo(() => {
  const { configFlg, setConfigFlg } = useContext(ConfigFlgContext);

  const onChangeConfigFlg = (e: ChangeEvent<HTMLInputElement>) => {
    setConfigFlg(e.target.value);
  };

  return (
    <>
      <Paragraph />
      <Container>
        <Row>
          <Col sm={12}>
            <Form.Check
              type="radio"
              id="encodeBtn"
              name="configBtn"
              label="エンコード（あ → %E3%81%82）"
              value="0"
              checked={configFlg == "0"}
              onChange={onChangeConfigFlg}
            />
          </Col>
        </Row>
        <Paragraph />
        <Row>
          <Col sm={12}>
            <Form.Check
              type="radio"
              id="decodeBtn"
              name="configBtn"
              label="デコード（%E3%81%82 → あ）"
              value="1"
              checked={configFlg == "1"}
              onChange={onChangeConfigFlg}
            />
          </Col>
        </Row>
      </Container>
      <Paragraph />
    </>
  );
});

const Paragraph = styled.div`
  margin-top: 10px;
`;
