import { createContext, useContext, useEffect, useState } from 'react';
import { agregarProducto, aumentarProducto, disminuirProducto, eliminarProducto, calcularSubtotal, calcularUnidades } from '../utils/carrito';
import {obtenerCarrito,guardarCarrito} from '../utils/almacenamiento';

const TiendaContext=createContext(null);
export function TiendaProvider({children}) {
  const [carrito,setCarrito]=useState(obtenerCarrito);
  const [usuario,setUsuario]=useState(()=>sessionStorage.getItem('usuario')||'');
  const [aviso,setAviso]=useState('');
  useEffect(()=>{ guardarCarrito(carrito); },[carrito]);
  function agregarAlCarrito(producto) {setCarrito(actual=>agregarProducto(actual,producto)); setAviso(`${producto.titulo} agregado al carrito`);}
  function aumentarCantidad(id){setCarrito(actual=>aumentarProducto(actual,id));}
  function disminuirCantidad(id){setCarrito(actual=>disminuirProducto(actual,id));}
  function eliminarDelCarrito(id){setCarrito(actual=>eliminarProducto(actual,id));}
  function vaciarCarrito(){setCarrito([]);}
  function iniciarSesion(nombre){sessionStorage.setItem('usuario',nombre);setUsuario(nombre);}
  function cerrarSesion(){sessionStorage.removeItem('usuario');setUsuario('');}
  return <TiendaContext.Provider value={{carrito, usuario, aviso, setAviso, agregarAlCarrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito, vaciarCarrito, iniciarSesion, cerrarSesion, total:calcularSubtotal(carrito), unidades:calcularUnidades(carrito)}}>{children}</TiendaContext.Provider>;
}
export function useTienda() {const valor=useContext(TiendaContext);if (!valor) throw new Error('useTienda requiere TiendaProvider');return valor;}
