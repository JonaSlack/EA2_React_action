import {describe,it,expect,beforeEach} from 'vitest';import {render,screen} from '@testing-library/react';import userEvent from '@testing-library/user-event';import {MemoryRouter,Routes,Route} from 'react-router-dom';import {TiendaProvider} from '../context/TiendaContext';import CarritoPage from './CarritoPage';
const producto={id:'minecraft',titulo:'Minecraft',precio:19990,cantidad:2};
function montar(articulos){localStorage.setItem('levelup_carrito_react',JSON.stringify(articulos));return render(<MemoryRouter initialEntries={['/carrito']}><TiendaProvider><Routes><Route path="/carrito" element={<CarritoPage/>}/><Route path="/catalogo" element={<h1>Catálogo</h1>}/></Routes></TiendaProvider></MemoryRouter>)}
beforeEach(()=>{localStorage.clear();sessionStorage.clear()});
describe('Chromium: carrito de compras',()=>{
 it('PF-10: muestra los juegos',()=>{montar([producto]);expect(screen.getByText('Minecraft')).toBeInTheDocument();});
 it('PF-11: botón + aumenta cantidad',async()=>{montar([producto]);await userEvent.setup().click(screen.getByRole('button',{name:'Aumentar Minecraft'}));expect(screen.getByLabelText('Cantidad de Minecraft')).toHaveTextContent('3');});
 it('PF-12: botón - reduce cantidad',async()=>{montar([producto]);await userEvent.setup().click(screen.getByRole('button',{name:'Disminuir Minecraft'}));expect(screen.getByLabelText('Cantidad de Minecraft')).toHaveTextContent('1');});
 it('PF-13: botón Eliminar quita producto',async()=>{montar([producto]);await userEvent.setup().click(screen.getByRole('button',{name:'Eliminar Minecraft'}));expect(screen.getByRole('heading',{name:'Tu carrito está vacío'})).toBeInTheDocument();});
 it('PF-14: total considera precio × cantidad',()=>{montar([producto]);expect(screen.getAllByText(/39\.980/).length).toBeGreaterThan(0);});
 it('PF-15: carrito vacío',()=>{montar([]);expect(screen.getByRole('heading',{name:'Tu carrito está vacío'})).toBeInTheDocument();});
});
