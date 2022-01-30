import { ChangeEvent, useState, useContext, memo } from "react";
import styled from "styled-components";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { ConfigFlgContext } from "./providers/ConfigFlgProvider";

export const IOTextArea = memo(() => {
  const [beforeText, setBeforeText] = useState<string>("");
  const [afterText, setAfterText] = useState<string>("");
  const { configFlg } = useContext(ConfigFlgContext);
  const MySwal = withReactContent(Swal);

  const onChangeBeforeText = (e: ChangeEvent<HTMLInputElement>) => {
    setBeforeText(e.target.value);
  };

  const onClickCopyBtn = () => {
    navigator.clipboard.writeText(afterText).then(
      () => {
        MySwal.fire({
          title: <strong>コピーしました。</strong>,
        });
      },
      (err) => {
        MySwal.fire({
          title: <strong>コピーできませんでした。</strong>,
        });
      }
    );
  };

  const onClickConvBtn = () => {
    switch (configFlg) {
      case "0":
        setAfterText(encodeURI(beforeText));
        break;
      case "1":
        setAfterText(decodeURI(beforeText));
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={5}>
          <Form.Group>
            <Form.Label>
              <TiTleStyle>変換前</TiTleStyle>
            </Form.Label>
            <Form.Control
              as="textarea"
              value={beforeText}
              onChange={onChangeBeforeText}
            />
          </Form.Group>
          <div className="mt-3" style={{ textAlign: "right" }}>
            <Button variant="primary" onClick={onClickConvBtn}>
              変換
            </Button>
          </div>
        </Col>
        <Col sm={2}>
          <Paragraph />
        </Col>
        <Col sm={5}>
          <Form.Group>
            <Form.Label>
              <TiTleStyle>変換後</TiTleStyle>
            </Form.Label>
            <Form.Control as="textarea" value={afterText} readOnly />
          </Form.Group>
          <div className="mt-3" style={{ textAlign: "right" }}>
            <Button variant="primary" onClick={onClickCopyBtn}>
              コピー
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
});

const TiTleStyle = styled.div`
  font-weight: bold;
  font-size: large;
`;

const Paragraph = styled.div`
  margin-top: 10px;
`;
