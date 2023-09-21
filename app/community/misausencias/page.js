"use client";
import "./misausencias.css";
import "../../public/colores.css";
import {
  RegistroAusencia,
  Catalogo_Categoria,
  User,
} from "../../public/community";
import { setJWT } from "../../public/commons";
import { useState } from "react";
import axios from "axios";
import {
  Container,
  Tab,
  Tabs,
  Table,
  Button,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import Calendario from "@/Components/Calendario/Calendario";

export default function AusenciasControl() {
  const [show, setShow] = useState(false);
  const [tiposAusencia, setTiposAusencia] = useState([]);
  const [ausencias, setAusencias] = useState([]);
  const [ausenciaPopup, setAusenciaPopup] = useState({});

  let url = "http://18.190.84.148:9091/login";
  const userName = "admin";

  const currentYear = new Date().getFullYear();

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    setShow(true);
    const data = await RegistroAusencia.buscar({
      qwery: `ID = ${id}`,
    });
    setAusenciaPopup(data.Value[0]);
  };

  const [showVacaciones, setShowVacaciones] = useState(false);

  const handleCloseVacaciones = () => setShowVacaciones(false);
  const handleShowVacaciones = async () => {
    setShowVacaciones(true);
  };

  const [showOtrasAusencias, setShowOtrasAusencias] = useState(false);

  const handleCloseOtrasAusencias = () => setShowOtrasAusencias(false);
  const handleShowOtrasAusencias = async () => {
    setShowOtrasAusencias(true);
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      user: "admin",
      pwd: "1234",
      //"Access-Control-Allow-Origin": "*",
    },
  };

  const buscar = async () => {
    const peticion = async () => {
      let { data } = await axios.post(url, {}, axiosConfig);
      setJWT(data.Value);
      console.log(data);
    };

    peticion();

    const ausenciasUsuario = await RegistroAusencia.buscar({
      qwery: "solicitador_id = 1",
    });
    const tiposAusenciasCatalogo = await Catalogo_Categoria.buscar({
      qwery: "",
    });

    setTiposAusencia(tiposAusenciasCatalogo.Value);
    setAusencias(ausenciasUsuario.Value);
  };

  const dateFormat = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedDate = `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`;

    return formattedDate;
  };

  const ausenciaTypeConvert = (id) => {
    switch (id) {
      case 1:
        return "Vacaciones";

      case 2:
        return "Festivos";

      case 3:
        return "Otras Ausencias";

      case 4:
        return "Ausencias no Justificadas";

      default:
        return "No data";
    }
  };

  const getLoginUser = async () => {
    const data = await User.buscar({ qwery: "username = 'admin'" });
    const user = data.Value[0];

    sessionStorage.setItem("loginUser", JSON.stringify(user));
  };

  return (
    <Container className="mt-4">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle de Ausencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="d-flex gap-2">
              <h5 className="">Aprobador:</h5>
              <p>
                {ausenciaPopup &&
                  ausenciaPopup.AprobadoPor &&
                  ausenciaPopup.AprobadoPor.Nombre}{" "}
                {ausenciaPopup &&
                  ausenciaPopup.AprobadoPor &&
                  ausenciaPopup.AprobadoPor.Paterno}
              </p>
            </Col>
          </Row>
          <h5 className="text-center">Tiempo del Permiso</h5>
          <Row>
            <Col className="d-flex gap-4 justify-content-center">
              <p>
                {ausenciaPopup && ausenciaPopup.DiasSolicitados} Días
                requeridos,{" "}
              </p>
              <p>
                {ausenciaPopup && ausenciaPopup.GoceSueldo
                  ? "Con goce de sueldo"
                  : "Sin goce de sueldo"}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex gap-2 justify-content-center">
              <p className="bold">Fechas Inicio</p>
              <p>
                {ausenciaPopup &&
                  dateFormat(ausenciaPopup.FechaSolicitadaInicio)}
              </p>
            </Col>
            <Col className="d-flex gap-2 justify-content-center">
              <p className="bold">Fechas Fin</p>
              <p>
                {ausenciaPopup &&
                  dateFormat(ausenciaPopup.FechaSolicitadaInicio)}
              </p>
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
              <p>{ausenciaPopup && ausenciaPopup.Motivo}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="text-center">Observaciones</h5>
              <p>{ausenciaPopup && ausenciaPopup.Observaciones}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showVacaciones} onHide={handleCloseVacaciones}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitud de Vacaciones</Modal.Title>
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
          <Button variant="secondary" onClick={handleCloseVacaciones}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseVacaciones}>
            Solicitar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal de Otras Ausencias */}
      <Modal show={showOtrasAusencias} onHide={handleCloseOtrasAusencias}>
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
          <Button variant="secondary" onClick={handleCloseOtrasAusencias}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleCloseOtrasAusencias}>
            Solicitar
          </Button>
        </Modal.Footer>
      </Modal>
      <Tabs defaultActiveKey="Resumen" id="ausencias-tab" className="mb-3">
        <Tab eventKey="Resumen" title="Resumen">
          <h3>Resumen de mis ausencias</h3>
          <Table className="text-center" bordered hover size="sm">
            <thead>
              <tr>
                <th>No.</th>
                <th>Tipo de Ausencia</th>
                <th>Fecha Solicitud</th>
                <th>Fecha Aprobada</th>
                <th>Fechas Solicitadas</th>
                <th>Días Solicitados</th>
                <th>Aprobado por</th>
                <th>Adjunto</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {ausencias &&
                ausencias.map((a, i) => {
                  return (
                    <tr key={a.ID}>
                      <td>{i + 1}</td>
                      <td>{ausenciaTypeConvert(a.TipoDeAusenciaID)}</td>
                      <td>{dateFormat(a.FechaDeSolicitud)}</td>
                      <td>{dateFormat(a.FechaAprobada)}</td>
                      <td>
                        {dateFormat(a.FechaSolicitadaInicio)}
                        {" al "}
                        {dateFormat(a.FechaSolicitadaFin)}
                      </td>
                      <td>{a.DiasSolicitados}</td>
                      <td>
                        {a.AprobadoPor.Nombre} {a.AprobadoPor.Paterno}
                      </td>
                      <td>
                        <Button className="btn-descarga">
                          <i className="fas fa-chevron-down"></i>
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleShow(a.ID)}
                          className="btn-descarga"
                        >
                          <i className="fas fa-file"></i>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <Button onClick={buscar}>Buscar</Button>
        </Tab>
        <Tab eventKey="Vacaciones" title="Vacaciones">
          <Row>
            <Col className="d-flex justify-content-start">
              <h3>Mis Vacaciones</h3>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <h5 className="my-3">Vacaciones</h5>
              <div className="d-flex gap-2">
                <h5 className="mb-2">12</h5>
                <p className="mb-2"> Días totales</p>
              </div>
              <div className="d-flex gap-2">
                <h5 className="mb-2">4</h5>
                <p className="mb-2"> Disponibles</p>
              </div>
              <div className="d-flex gap-2">
                <h5 className="mb-2">8</h5>
                <p className="mb-2"> Aprobados</p>
              </div>
              <div className="dot-line"></div>
              <div className="mt-3">
                <div className="d-flex mb-2">
                  <div className="color-box color13"></div>
                  <p className="mb-0">Día actual</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color16"></div>
                  <p className="mb-0">Festivo</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color18"></div>
                  <p className="mb-0">Otras ausencias</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color20"></div>
                  <p className="mb-0">Pendiente de validar</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color8"></div>
                  <p className="mb-0">
                    Festivos <span>{currentYear}</span>
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color2"></div>
                  <p className="mb-0">Festivo</p>
                </div>
              </div>
              <Button onClick={handleShowVacaciones} className="mt-3">
                Solicitar
              </Button>
            </Col>
            <Col md={9} className="mb-5">
              <Calendario />
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="OtrasAusencias" title="Otras Ausencias">
          <Row>
            <Col className="d-flex justify-content-start">
              <h3> Mis Otras Ausencias</h3>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <h5 className="my-3">Otras Ausencias</h5>
              <div className="dot-line"></div>
              <div className="mt-3">
                <div className="d-flex mb-2">
                  <div className="color-box color13"></div>
                  <p className="mb-0">Día actual</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color16"></div>
                  <p className="mb-0">Festivo</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color18"></div>
                  <p className="mb-0">Otras ausencias</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color20"></div>
                  <p className="mb-0">Pendiente de validar</p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color8"></div>
                  <p className="mb-0">
                    Festivos <span>{currentYear}</span>
                  </p>
                </div>
                <div className="d-flex mb-2">
                  <div className="color-box color2"></div>
                  <p className="mb-0">Festivo</p>
                </div>
              </div>
              <Button onClick={handleShowOtrasAusencias} className="mt-3">
                Solicitar
              </Button>
            </Col>
            <Col md={9} className="mb-5">
              <Calendario />
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}
