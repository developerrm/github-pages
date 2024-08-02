import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="main-cvv-background">
      <div className="main-cvv">
      <article style={{ width: "100%" }}>
          
      {/* <iframe src="https://drive.google.com/file/d/1LGHfpEEXVB26GjzVTOc6_nF8A4o6ostd/preview" width="120" height="120"                     
                    ></iframe>
                    */}
          <h1 style={{width:'100%'}}> Guillermo Maza Andrade</h1>
         
          <p>Ingenier&iacute;a en Computaci&oacute;n e Inform&aacute;tica</p>
                          
        <hr />
        </article>
        <section className="main">
                       
                   
                 
          <article>
            <h3 style={{ color: "gray", fontSize: "18px" }}>SOBRE MI</h3>
            <p style={{textAlign: 'justify'}}>
              Me he dedicado al desarrollo de software para aplicaciones de
              escritorio. Habituado a trabajar bajo presión y a enfrentar
              desafíos en el área de la tecnología. Me caracterizo por ser una
              persona positiva, proactiva y con buena disposición para el
              trabajo en equipo.
            </p>
          </article>
          <article>
            <h3 style={{ color: "gray", fontSize: "18px" }}>EXPERIENCIA</h3>
            
            <a> Desarrollador, LISTOSOFT S.A. , Guayaquil</a>
            <p style={{
                fontSize: "13px",
                fontFamily: "Courier New, Courier, monospace",
              }}
            >              
            Agosto 2021 - Presente            
            </p>
            <p style={{textAlign: 'justify'}}>
              Listosoft S.A. es una empresa dedicada al desarrollo de software contable, cuya meta es convertir productos y servicios en herramientas confiables y eficientes
              para el crecimiento de las pymes.
            </p>
            <p><em>Responsabilidades</em></p>
            <ul>
              <li style={{textAlign: 'justify'}}>
                Análisis, planificación y desarrollo de aplicaciones de
                escritorio C# basadas en Net Framework .
              </li>
              <li style={{textAlign: 'justify'}}>
                Desarrollo de mejoras para aplicaciones web basadas en ASPX
                usando C# y JavaScript como lenguaje de programación.
              </li>
              <li style={{textAlign: 'justify'}}>
                Creación de tablas, vistas y store procedure para la consulta de
                información en base de datos relacionales, SQL Server.
              </li>
              <li style={{textAlign: 'justify'}}>
                Diseño de Reportes usando la herramienta DevExpress para la
                plataforma .NET
              </li>
              <li style={{textAlign: 'justify'}}>
                Desarrollo de endpoints en API .Net Core para consumo e
                integraciones con otros sistemas. Manejo de la herramienta Team
                Fundation como sistema de control de Código Fuente.
              </li>
            </ul>
            <p><em>Lenguajes usados</em></p>
            <p>C#, ASPNET, JS, SQL</p>
            <p><em>Herramientas</em></p>
            <p>
                Visual Studio, DevExpress, Microsoft Sql Management
            </p>
          </article>
          <article>
            <h3 style={{ color: "gray", fontSize: "18px" }}>FORMACION</h3>
            <ul>
              <li>
              Ingenier&iacute;a en Computaci&oacute;n e Inform&aacute;tica, Universidad Agraria del
                Ecuador, Guayaquil
              </li>
              <p style={{
                fontSize: "13px",
                fontFamily: "Courier New, Courier, monospace",
              }}
            >              
           Marzo 2016-2021
            </p>
 
              <li>Bachiller en Ciencias, Colegio José Joaquín de Olmedo, Guayaquil 2016</li>
              
            </ul>
          </article>
          </section>
          <aside>
            <h3 style={{ color: "gray", fontSize: "18px" }}>Contacto</h3>
            <a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                width="21px"
                height="21px"
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=0998004361"> 
              0998004361
            </a>
            <br />
            <a>
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="21px"
                height="21px"
              />
            </a>
            <a href="https://github.com/developerrm">developerrm</a>
            <br />
            <address>
              <a>
                <img
                  src="https://images.freeimages.com/fic/images/icons/2795/office_2013_hd/2000/outlook.png"
                  width="21px"
                  height="21px"
                />
              </a>
              <a href="mailto:guillermo.maza.andrade@gmail.com">Guillermo Maza</a>
            </address>
            <hr/>
            <h3 style={{ color: "gray", fontSize: "18px" }}>Certificados</h3>
            <ul>
            <strong>Platzi</strong>
                <li>
                Curso de Aplicaciones Web con Blazor WebAssembly y .NET
                </li>
                <li>
                Curso de Desarrollo Web con Blazor Server y .Net Core 3
                </li>
                <strong>Taller Experiencial </strong>
                <li>
                Valores y Desarrollo de Competencias de Trabajo en Equipo 
                </li>
            </ul>
            <hr/>
            <h3 style={{ color: "gray", fontSize: "18px" }}>Lenguajes y Tecnologías</h3>
            <ul>
              <li>C#</li>
              <li>DevExpress</li>
              <li>C++</li>
              <li>SQL</li>
            </ul>
          </aside>
         <hr/>
      </div>
    </div>
  );

  //async function populateWeatherData() {
  //    const response = await fetch('weatherforecast');
  //    const data = await response.json();
  //    setForecasts(data);
  //}
}

export default App;
