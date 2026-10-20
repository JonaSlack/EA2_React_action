// Funciones puras: fáciles de explicar y probar con Vitest.
export function agregarProducto(carrito, producto) {
  if (!producto) return carrito;
  const existe = carrito.find((item) => item.id === producto.id);
  if (existe) return carrito.map((item) => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
  return [...carrito, {...producto, cantidad: 1}];
}
export function aumentarProducto(carrito,id) {
  return carrito.map((item)=> item.id === id ? {...item,cantidad:item.cantidad+1} : item);
}
export function disminuirProducto(carrito,id) {
  return carrito.map((item)=> item.id === id ? {...item,cantidad:item.cantidad-1} : item).filter((item)=>item.cantidad>0);
}
export function eliminarProducto(carrito,id) { return carrito.filter((item)=>item.id!==id); }
export function calcularUnidades(carrito) {return carrito.reduce((total,item)=>total+item.cantidad,0);}
export function calcularSubtotal(carrito) {return carrito.reduce((total,item)=>total+item.precio*item.cantidad,0);}
export function calcularEnvio(carrito,envio='domicilio') {
  const subtotal=calcularSubtotal(carrito);
  if (!subtotal || envio==='tienda' || subtotal>=30000) return 0;
  // El despacho es gratuito si toda la compra se entrega en formato digital.
  if (carrito.every((item)=>item.formato==='digital')) return 0;
  return 3990;
}
