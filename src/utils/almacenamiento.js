export const CLAVE_CARRITO = 'levelup_carrito_react';
export function obtenerCarrito() {
  try { const dato=JSON.parse(localStorage.getItem(CLAVE_CARRITO)||'[]'); return Array.isArray(dato)?dato.filter((x)=>x && x.id && x.cantidad>0):[]; }
  catch { return []; }
}
export function guardarCarrito(carrito) {localStorage.setItem(CLAVE_CARRITO,JSON.stringify(carrito));}
export function limpiarCarrito() {localStorage.removeItem(CLAVE_CARRITO);}
