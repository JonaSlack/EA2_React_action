// Pruebas con Node nativo: se pueden ejecutar SIN instalar npm (npm run test requiere dependencias).
import test from 'node:test';import assert from 'node:assert/strict';
import {agregarProducto,disminuirProducto,calcularSubtotal,eliminarProducto,calcularUnidades,calcularEnvio} from '../utils/carrito.js';
const juego={id:'abc',precio:5990,titulo:'Prueba'};
test('agrega el primer producto',()=>{assert.equal(agregarProducto([],juego)[0].cantidad,1)});
test('agrupa dos productos iguales',()=>{let c=agregarProducto([],juego);c=agregarProducto(c,juego);assert.equal(c.length,1);assert.equal(c[0].cantidad,2);});
test('quita producto si disminuye a cero',()=>assert.deepEqual(disminuirProducto([{...juego,cantidad:1}],juego.id),[]));
test('calcula totales',()=>{const c=[{...juego,cantidad:3}];assert.equal(calcularSubtotal(c),17970);assert.equal(calcularUnidades(c),3);});
test('elimina únicamente el ID indicado',()=>{const c=[{...juego,cantidad:1},{id:'b',precio:1,cantidad:1}];assert.equal(eliminarProducto(c,'abc')[0].id,'b')});
test('el despacho gratuito depende de las reglas',()=>{assert.equal(calcularEnvio([{...juego,cantidad:1}]),3990);assert.equal(calcularEnvio([{...juego,cantidad:1}],'tienda'),0);});
