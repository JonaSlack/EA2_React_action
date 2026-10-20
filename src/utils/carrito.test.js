import {describe,it,expect} from 'vitest';
import {agregarProducto,aumentarProducto,disminuirProducto,eliminarProducto,calcularUnidades,calcularSubtotal,calcularEnvio} from './carrito';
const juego={id:'gow-ragnarok',titulo:'God of War Ragnarök',precio:44990};
const minecraft={id:'minecraft',titulo:'Minecraft',precio:19990,formato:'digital'};
describe('Carrito - funciones y reglas de negocio',()=>{
 it('PF-16: agrega un videojuego con cantidad 1',()=>{expect(agregarProducto([],juego)).toMatchObject([{id:'gow-ragnarok',cantidad:1}]);});
 it('PF-17: agregar el mismo juego aumenta su cantidad, sin duplicar filas',()=>{const carrito=agregarProducto(agregarProducto([],juego),juego);expect(carrito).toHaveLength(1);expect(carrito[0].cantidad).toBe(2);});
 it('PF-18: aumentar y disminuir actualiza cantidad',()=>{const carrito=[{...juego,cantidad:2}];expect(aumentarProducto(carrito,juego.id)[0].cantidad).toBe(3);expect(disminuirProducto(carrito,juego.id)[0].cantidad).toBe(1);});
 it('PF-19: al disminuir a cero el producto desaparece',()=>{expect(disminuirProducto([{...juego,cantidad:1}],juego.id)).toHaveLength(0);});
 it('PF-20: eliminar no quita otros productos',()=>{expect(eliminarProducto([{...juego,cantidad:1},{...minecraft,cantidad:1}],juego.id)[0].id).toBe('minecraft');});
 it('PF-21: calcula unidades y subtotales con reduce',()=>{const carrito=[{...juego,cantidad:2},{...minecraft,cantidad:1}];expect(calcularUnidades(carrito)).toBe(3);expect(calcularSubtotal(carrito)).toBe(109970);});
 it('PF-22: el envío es gratuito desde $30.000',()=>{expect(calcularEnvio([{...juego,cantidad:1}])).toBe(0);});
 it('PF-23: envío de compra menor a $30.000 y retiro',()=>{const carrito=[{...minecraft,formato:'fisico',cantidad:1}];expect(calcularEnvio(carrito)).toBe(3990);expect(calcularEnvio(carrito,'tienda')).toBe(0);});
 it('PF-24: carrito vacío sin costo de despacho',()=>{expect(calcularSubtotal([])).toBe(0);expect(calcularEnvio([])).toBe(0);});
});
