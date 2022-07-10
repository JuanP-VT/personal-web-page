import React from "react";
import iEngineer from "../img/IEngineer.jpg";
import iDeveloper from "../img/IDeveloper.webp";
import selfDriven from "../img/self-driven.png";
import resilient from "../img/resilient.png";
import relational from "../img/relational.jpg";
import writing from "../img/writing.png";
function EsAbout() {
  return (
    <section id="About">
      <div className="sectionTitle">
        <p>
          <span className="alter">Acerca De</span> Mi
        </p>
      </div>
      <div className="container">
        <div className="c1">
          <div className="title">Experiencia Como Ingeniero Industrial</div>
          <div className="imgContainer">
            <img src={iEngineer} alt="IndustrialEngineer" className="img" />
          </div>

          <div className="textContainer">
            <p>
              En el verano de 2014, un joven tenía que elegir un camino para su
              carrera profesional, siempre me sentí un geek de la tecnología,
              así que, naturalmente, estaba inclinado hacia{" "}
              <span>Ingeniería de software</span> o una carrera relacionada, sin
              embargo también tenía un gran deseo de llegar a ser como mi
              hermano mayor, No sabía mucho sobre el mundo o incluso mucho sobre
              mí mismo en esa edad así que, parcialmente ciego seguí el consejo
              de mi hermano a conviértete en{" "}
              <span className="highlight">Ingeniero Industrial</span>.
            </p>
            <br />
            <p>
              Aunque en algunos puntos sentí que muchos temas no eran muy
              interesante mi <span>disciplina</span> me mantuvo fuerte y me
              impulsó a través de mi educación. A fines de 2018 obtuve mi{" "}
              <span>Licenciatura</span>, volé a Tijuana(una de los mayores
              ciudades industriales del país) y trabajó allí durante casi dos
              años.
            </p>
            <br />
            <p>
              A pesar de estar bien me sentía muy insatisfecho con mi vida
              profesional y el entorno general de la industria manufacturera, la
              próximos meses mi vida se volvería muy gris, la elección que un
              retoño sin experiencia tomó muchos años atrás, se sentía como
              cadenas que me mantendría atado a esa situación.
            </p>
            <br />
            <p>
              Pero soy resiliente y sabía que tenía que hacer algo al
              respecto...
            </p>
          </div>
        </div>
        <div className="c2">
          <div className="title">Convirtiendome en Web Developer</div>
          <div className="imgContainer">
            {" "}
            <img
              src={iDeveloper}
              alt="Developer computer and coffee"
              className="img"
            />
          </div>
          <div className="textContainer">
            <p>
              Durante ese tiempo uno de mis amigos más cercanos vivió una
              situación muy similar, trabajaba como ingeniero de mantenimiento
              de planta y se sentía muy insatisfecho, más tarde cambió de campo
              y se convirtió en tester de software.
            </p>
            <br />
            <p>
              Su nueva situación y ambiente de trabajo lo pusieron de buen humor
              por lo que trató de convencerme de dejar el campo de la
              manufactura y me convertirse en un <span>desarrollador</span>, en
              ese momento no estaba listo para abandonar casi 7 años de
              educación y experiencia.
            </p>
            <p>
              <br />
              Pero la idea se quedó conmigo, soy
              <span>
                aficionado a la <em>tecnología</em>
              </span>
              , siempre tuve interes ​​en los videojuegos, las computadoras y
              incluso tuve algo de <span>experiencia codeando</span>
              con C (educación escolar) y Lua (usé código en El mod
              computercraft de Minecraft y me encantaba), después de unos meses
              de investigación, charlas y análisis me quedó claro, esa idea se
              convirtió en un rayo de luz que encendió la ambición de mi vida
              profesional.
            </p>
            <br />
            <p>
              Estaba decidido, <span>me convertiría en desarrollador.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="c3">
          <div className="title">Rasgos Personales</div>
          <div id="AllTraits">
            {" "}
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={selfDriven} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Auto-Motivado</span>: Me enseñé desarrollo web por mi
                cuenta gracias al increíble esfuerzo de todos los
                <span>comunidad de desarrolladores</span> creando excelente
                contenido de enseñanza pero al final del día fui yo quien siguió
                empujando para hacer este sueño una realidad,
                <br /> Me he entrenado para ser muy
                <span>disciplinado</span>, esto me ha ayudado mucho en mi vida,
                cuando me propongo una meta todo mi esfuerzo e intención va
                hacia ella.
              </div>
            </div>
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={resilient} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Resiliente</span>: esto es algo que he desarrollado para
                mi vida personal y mejoró mucho mi vida profesional. Básicamente
                ser resiliente significa poder soportar condiciones difíciles o
                incomodas mientras te mantienes <span>consciente</span>, la
                frustración, el estrés y el conflicto son situaciones que
                encontramos todos los días y tener la{" "}
                <span>fuerza emocional</span> para afrontar, realmente me hizo
                madurar mucho.
              </div>
            </div>
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={relational} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Relacional</span>: Cómo tratar a las personas es otro
                asombroso tema, he pasado tiempo aprendiendo sobre la
                interacción humana y tratando de mejorar mis habilidades
                sociales (yo era muy introvertido).
                <br /> Esto ha demostrado ser una de las mejores habilidades que
                pude desarrollar, entender que las personas con las que trabajo
                son seres humanos complejos con emociones me hizo ser más{" "}
                <span>empático</span>, tomo ofensas/críticas{" "}
                <span>menos personales</span> y en general me hizo alguien más
                agradable con quien estar.
              </div>
            </div>
            <div className="traitContainer">
              <div className="imgContainer">
                <img src={writing} alt="SelfDriven Character" />
              </div>
              <div className="textContainer">
                <span>Habilidades de comunicación y escritura</span>: como
                ingeniero industrial una de mis principales actividades era
                escribir informes de estado y mucha <span>documentación</span>{" "}
                de proceso/calidad. Ser muy conciso y breve al informar a un
                gerente o explicar con gran <span>detalle</span> a un
                operador/técnico.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EsAbout;
