import {describe,it,expect,vi} from 'vitest';import {render,screen} from '@testing-library/react';import userEvent from '@testing-library/user-event';import {MemoryRouter} from 'react-router-dom';import {TiendaProvider} from '../context/TiendaContext';import Producto from './Producto';
const juego={id:'minecraft',titulo:'Minecraft',genero:'Sandbox / Supervivencia',precio:19990,plataforma:'pc',imagen:'',emoji:'⛏️'};
function montar(){return render(<MemoryRouter><TiendaProvider><Producto producto={juego}/></TiendaProvider></MemoryRouter>)}
describe('Producto: Props, eventos y React Bootstrap',()=>{
 it('PF-29: muestra datos del producto recibidos como prop',()=>{montar();expect(screen.getByRole('heading',{name:'Minecraft'})).toBeInTheDocument();expect(screen.getByText(/19\.990/)).toBeInTheDocument();});
 it('PF-30: botón agrega una unidad al estado y localStorage',async()=>{const user=userEvent.setup();montar();await user.click(screen.getByRole('button',{name:/agregar al carrito/i}));expect(JSON.parse(localStorage.getItem('levelup_carrito_react'))[0]).toMatchObject({id:'minecraft',cantidad:1});});
});
