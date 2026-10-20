import {Link} from 'react-router-dom';
export default function PaginaHero({titulo,descripcion}){return <section className="page-hero"><div className="contenedor"><p className="migas"><Link to="/">Inicio</Link> / {titulo}</p><h1>{titulo}</h1>{descripcion&&<p>{descripcion}</p>}</div></section>}
