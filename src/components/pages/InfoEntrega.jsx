import { useNavigate } from 'react-router-dom';
import { Header } from '../Header';
import { MapsGoogleCheckOut } from './MapsGoogleCheckout';
import { useState } from 'react';
import Swal from 'sweetalert2';

export const InfoEntrega = () => {
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    ciudad: '',
    departamento: '',
    codigoPostal: '',
    correoElectronico: '',
    numeroTelefono: '',
    tipoDocumento: '',
    numeroDocumento: '',
    titularTarjeta: '',
    numeroTarjeta: '',
    fecha: '',
    cvv: '',
  });
  const [error, setError] = useState({});
  const [validError, setValidError] = useState(false);

  const {
    nombre,
    apellido,
    direccion,
    ciudad,
    departamento,
    codigoPostal,
    correoElectronico,
    numeroTelefono,
    tipoDocumento,
    numeroDocumento,
    titularTarjeta,
    numeroTarjeta,
    fecha,
    cvv,
  } = valueInput;

  const handleInputChange = (e) => {
    setValueInput({
      ...valueInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickFinalProcess = (e) => {
    e.preventDefault();
    const inputs = [
      'nombre',
      'apellido',
      'direccion',
      'ciudad',
      'departamento',
      'codigoPostal',
      'correoElectronico',
      'numeroTelefono',
      'tipoDocumento',
      'numeroDocumento',
      'titularTarjeta',
      'numeroTarjeta',
      'fecha',
      'cvv',
    ];
    let newError = {};
    inputs.forEach((input) => {
      if (valueInput[input] === '') {
        return (newError[input] = 'Este campo es obligatorio');
      }
    });
    setError(newError);
    setValidError(true);
    setTimeout(() => {
      setValidError(false);
    }, 3000);

    if (Object.keys(newError).length > 0) return;

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu compra ha sido realizada con exito!!',
      showConfirmButton: false,
      timer: 5000,
    });

	setTimeout(() => {
		navigate('/');
	  }, 5000);
    
  };

  const [medioPagoTarjeta, setMedioPagoTarjeta] = useState(false);
  const [medioPagoPSE, setMedioPagoPSE] = useState(false);

  return (
    <>
      <Header />
      <section className="container_infoentrega">
        <div className="info_comprador">
          <h1>INFORMACIÓN DE ENTREGA</h1>
          <form>
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '45%' }}
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
              type="text"
              placeholder="Nombre *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '45%' }}
              name="apellido"
              value={apellido}
              onChange={handleInputChange}
              type="text"
              placeholder="Apellido *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '90%' }}
              name="direccion"
              value={direccion}
              onChange={handleInputChange}
              type="text"
              placeholder="Direccion *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '30%' }}
              name="ciudad"
              value={ciudad}
              onChange={handleInputChange}
              type="text"
              placeholder="Ciudad *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '30%' }}
              name="departamento"
              value={departamento}
              onChange={handleInputChange}
              type="text"
              placeholder="Departamento *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '30%' }}
              name="codigoPostal"
              value={codigoPostal}
              onChange={handleInputChange}
              type="text"
              placeholder="Codigo postal *"
            />
            <h1 style={{ marginTop: '3rem' }}>INFORMACIÓN DE CONTACTO</h1>
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '45%' }}
              name="correoElectronico"
              value={correoElectronico}
              onChange={handleInputChange}
              type="text"
              placeholder="Correo electrónico *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '45%' }}
              name="numeroTelefono"
              value={numeroTelefono}
              onChange={handleInputChange}
              type="text"
              placeholder="Número de teléfono *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '45%' }}
              name="tipoDocumento"
              value={tipoDocumento}
              onChange={handleInputChange}
              type="text"
              placeholder="Tipo Documento *"
            />
            <input
              className={validError ? 'erroractive' : ''}
              style={{ flex: '45%' }}
              name="numeroDocumento"
              value={numeroDocumento}
              onChange={handleInputChange}
              type="text"
              placeholder="No. Documento *"
            />
            <h1 style={{ marginTop: '3rem' }}>INFORMACIÓN DE PAGO</h1>
            <h1
              onClick={() => setMedioPagoTarjeta(!medioPagoTarjeta)}
              style={{
                fontSize: '1.5rem',
                marginTop: '1rem',
                border: '1px solid #000',
                padding: '.5rem 5.2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'center',
              }}
            >
              TARJETA CREDITO / DEBITO
            </h1>
            {medioPagoTarjeta && (
              <form>
                <input
                  className={validError ? 'erroractive' : ''}
                  style={{ flex: '90%' }}
                  name="titularTarjeta"
                  value={titularTarjeta}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Titular de la tarjeta *"
                />
                <input
                  className={validError ? 'erroractive' : ''}
                  style={{ flex: '33%' }}
                  name="numeroTarjeta"
                  value={numeroTarjeta}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Número tarjeta *"
                />
                <input
                  className={validError ? 'erroractive' : ''}
                  style={{ flex: '33%' }}
                  name="fecha"
                  value={fecha}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Fecha *"
                />
                <input
                  className={validError ? 'erroractive' : ''}
                  style={{ flex: '20%' }}
                  name="cvv"
                  value={cvv}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="CVV"
                />
              </form>
            )}
            <h1
              onClick={() => setMedioPagoPSE(!medioPagoPSE)}
              medioPagoPSE
              style={{
                fontSize: '1.5rem',
                marginTop: '1rem',
                border: '1px solid #000',
                padding: '.5rem 5.2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'center',
              }}
            >
              PSE
            </h1>
            {medioPagoPSE && (
              <form className="form_pse" style={{ display: 'flex' }}>
                <select style={{ flex: '30%', border: '1px solid #677483;' }}>
                  <option value="0">Seleccione su banco</option>
                  <option value="1">Banco Agrario</option>
                  <option value="2">Banco AV Villas</option>
                  <option value="3">Banco Caja Social</option>
                  <option value="4">Banco de Bogotá</option>
                  <option value="5">Banco de Occidente</option>
                  <option value="6">Banco Falabella</option>
                  <option value="7">Banco GNB Sudameris</option>
                  <option value="8">Banco Pichincha</option>
                  <option value="9">Banco Popular</option>
                  <option value="10">Banco Procredit</option>
                  <option value="11">Banco WWB</option>
                  <option value="12">Bancolombia</option>
                  <option value="13">Nequi</option>
                </select>
                <select style={{ flex: '30%', border: '1px solid #677483;' }}>
                  <option value="0">Tipo de persona</option>
                  <option value="1">Persona natural</option>
                  <option value="2">Persona jurídica</option>
                </select>
                <select style={{ flex: '30%', border: '1px solid #677483;' }}>
                  <option value="0">Tipo de documento</option>
                  <option value="1">Cédula de ciudadanía</option>
                  <option value="2">Cédula de extranjería</option>
                  <option value="3">NIT</option>
                  <option value="4">Pasaporte</option>
                </select>
              </form>
            )}
          </form>
          <button onClick={handleClickFinalProcess}>REALIZAR PAGO</button>
          {validError && (
            <div className="error">Todos los campos son obligatorios</div>
          )}
        </div>
        <div className="inicio_sesion">
          <h1>INICIA SESIÓN</h1>
          <p>
            ¿Ya tienes una cuenta? <span>Ingresa</span>
          </p>
          <form>
            <input type="text" placeholder="Correo electrónico *" />
            <input type="password" placeholder="Contraseña *" />
            <p>¿Olvidaste tu contraseña?</p>
            <button>INICIAR SESION</button>
          </form>
          <MapsGoogleCheckOut />
        </div>
      </section>
    </>
  );
};
