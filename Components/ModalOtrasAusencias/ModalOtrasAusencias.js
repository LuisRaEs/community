import React from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

const ModalOtrasAusencias = ({ showPopup, handleClosePopup }) => {
  return (
    <Modal
      show={showPopup.otrasAusencias}
      onHide={() => handleClosePopup("otrasAusencias")}
    >
      <Modal.Header closeButton>
        <Modal.Title>Solicitud de Otras Ausencias</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="d-flex gap-2">
            <h5 className="">Aprobador:</h5>
            <p>Ricardo Ruiz</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex gap-2 ">
            <p className="bold">
              Dias a los que tengo derecho en este periodo:
            </p>
            <p>5 Días</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex gap-2 justify-content-center">
            <p className="bold">Fechas Inicio</p>
            <p>09-06-2023</p>
          </Col>
          <Col className="d-flex gap-2 justify-content-center">
            <p className="bold">Fechas Fin</p>
            <p>15-06-2023</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex gap-2 justify-content-center">
            <p className="bold">Hora Inicio</p>
            <p>N/A</p>
          </Col>
          <Col className="d-flex gap-2 justify-content-center">
            <p className="bold">Hora fin</p>
            <p>N/A</p>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col>
            <h5 className="text-center">Motivo</h5>
            <p>Viaje Familiar</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="text-center">Observaciones</h5>
            <p>Sin Observaciones</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => handleClosePopup("otrasAusencias")}
        >
          Cerrar
        </Button>
        <Button
          variant="primary"
          onClick={() => handleClosePopup("otrasAusencias")}
        >
          Solicitar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalOtrasAusencias;
