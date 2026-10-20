import Producto from './Producto';
export default function ListaProductos({productos}){return <div className="grilla-juegos">{productos.map((producto)=><Producto key={producto.id} producto={producto}/>)}</div>}
