import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
import {dinero,plataformaTexto} from '../utils/format';
import {useTienda} from '../context/TiendaContext';
export default function Producto({producto}) {
 const {agregarAlCarrito}=useTienda();
 return <Card className="tarjeta-juego" as="article">
  <div className="portada">{producto.imagen ? <img src={producto.imagen} alt={`Portada de ${producto.titulo}`} loading="lazy" onError={(e)=>{e.currentTarget.style.display='none';}}/> : null}<span className="portada-fondo" aria-hidden="true">{producto.emoji}</span><div className="etiquetas"><span className="badge badge-ps5">{plataformaTexto(producto.plataforma)}</span>{producto.precioAnterior&&<span className="badge badge-oferta">Oferta</span>}</div></div>
  <Card.Body className="cuerpo"><Card.Title as="h3">{producto.titulo}</Card.Title><p className="genero">{producto.genero}</p><div className="precio"><strong>{dinero(producto.precio)}</strong>{producto.precioAnterior&&<del>{dinero(producto.precioAnterior)}</del>}</div><div className="acciones"><Link className="btn btn-secundario" to={`/producto/${producto.id}`}>Ver detalle</Link><Button variant="primary" className="btn-primario" onClick={()=>agregarAlCarrito(producto)}>Agregar al carrito</Button></div></Card.Body>
 </Card>;
}
