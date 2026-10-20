import {NavLink,Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useTienda} from '../context/TiendaContext';
export default function NavbarSuperior(){
 const {usuario,unidades,cerrarSesion}=useTienda();const [abierto,setAbierto]=useState(false);const navegar=useNavigate();
 const enlaces=[['/','Inicio'],['/catalogo','Catálogo'],['/ofertas','Ofertas'],['/carrito','Carrito'],['/contacto','Contacto'],['/asistente','🤖 Asistente IA']];
 return <header className="site-header"><div className="contenedor navbar">
 <Link to="/" className="logo" onClick={()=>setAbierto(false)}>🎮 Level<span className="acento">Up</span> Store</Link>
 <button className="menu-toggle" aria-label="Abrir menú de navegación" aria-expanded={abierto} onClick={()=>setAbierto(!abierto)}>☰</button>
 <nav className={'nav-links '+(abierto?'abierto':'')} aria-label="Menú principal">{enlaces.map(([ruta,nombre])=><NavLink key={ruta} to={ruta} onClick={()=>setAbierto(false)} className={({isActive})=>isActive?'activo':''}>{nombre}</NavLink>)}
 {usuario?<button className="nav-boton" onClick={()=>{cerrarSesion();setAbierto(false);navegar('/login');}}>Salir ({usuario})</button>:<><NavLink to="/registro" onClick={()=>setAbierto(false)}>Crear cuenta</NavLink><NavLink to="/login" onClick={()=>setAbierto(false)}>Iniciar sesión</NavLink></>}</nav>
 <Link to="/carrito" className="carrito-link" aria-label={`Ver carrito de compras: ${unidades} unidades`}>🛒 <span className="carrito-badge">{unidades}</span></Link>
 </div></header>;
}
