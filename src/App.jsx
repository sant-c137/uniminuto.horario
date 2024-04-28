import './App.css';

const App = () => {
  const horarioClases = [
    {
      hora: '06 am - 07 am',
      lunes: '-',
      martes: '-',
      miercoles: 'Álgebra Lineal',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '07 am - 08 am',
      lunes: 'Proyecto de Vida',
      martes: '-',
      miercoles: 'Álgebra Lineal',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '08 am - 09 am',
      lunes: 'Proyecto de Vida',
      martes: 'Programación Básica',

      miercoles: 'CÁTEDRA MINUTO DE DIOS',

      jueves: 'Gestión Básica de la Información',
      viernes: 'Comunicación Escrita y Procesos Lectores I',
      sabado: '-',
    },
    {
      hora: '09 am - 10 am',
      lunes: 'Cálculo Diferencial',
      martes: 'Programación Básica',

      miercoles: 'CÁTEDRA MINUTO DE DIOS',

      jueves: 'Gestión Básica de la Información',
      viernes: 'Comunicación Escrita y Procesos Lectores I',
      sabado: '-',
    },
    {
      hora: '10 am - 11 am',
      lunes: 'Cálculo Diferencial',
      martes: '-',
      miercoles: 'Física Mecánica',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '11 am - 12 pm',
      lunes: 'Inglés I',
      martes: '-',
      miercoles: 'Física Mecánica',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '12 pm - 01 pm',
      lunes: 'Inglés I',
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: 'Programación Básica',
      sabado: '-',
    },

    {
      hora: '01 pm - 02 pm',
      lunes: '-',
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '02 pm - 03 pm',
      lunes: '-',
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '03 pm - 04 pm',
      lunes: '-',
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '04 pm - 05 pm',
      lunes: '-',
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
    {
      hora: '05 pm - 06 pm',
      lunes: '-',
      martes: '-',
      miercoles: '-',
      jueves: '-',
      viernes: '-',
      sabado: '-',
    },
  ];

  return (
    <>
      <header>
        <img src="download.png" alt="" />
      </header>
      <br />

      <p>
        <span>
          Cordial saludo <strong>Jenny Katherine</strong>, a continuación podrá
          ver el horario relacionado con el presente periodo .
        </span>
      </p>
      
      <div className="Container">
        <h1>Horario de Clases</h1>
        <table>
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
              <th>Sábado</th>
            </tr>
          </thead>
          <tbody>
            {horarioClases.map((fila, index) => (
              <tr key={index}>
                <td>{fila.hora}</td>
                <td
                  className={fila.lunes === '-' ? 'blue' : 'red'}
                  dangerouslySetInnerHTML={{ __html: fila.lunes }}
                ></td>
                <td
                  className={fila.martes === '-' ? 'blue' : 'red'}
                  dangerouslySetInnerHTML={{ __html: fila.martes }}
                ></td>
                <td
                  className={fila.miercoles === '-' ? 'blue' : 'red'}
                  dangerouslySetInnerHTML={{ __html: fila.miercoles }}
                ></td>
                <td
                  className={fila.jueves === '-' ? 'blue' : 'red'}
                  dangerouslySetInnerHTML={{ __html: fila.jueves }}
                ></td>
                <td
                  className={fila.viernes === '-' ? 'blue' : 'red'}
                  dangerouslySetInnerHTML={{ __html: fila.viernes }}
                ></td>
                <td
                  className={fila.sabado === '-' ? 'blue' : 'red'}
                  dangerouslySetInnerHTML={{ __html: fila.sabado }}
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
