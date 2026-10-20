import {describe,it,expect} from 'vitest';
import {render,screen} from '@testing-library/react';
import {MemoryRouter,Route,Routes} from 'react-router-dom';
import {TiendaProvider} from '../context/TiendaContext';
import ProtectedRoute from './ProtectedRoute';
function montar(){return render(<MemoryRouter initialEntries={['/checkout']}><TiendaProvider><Routes><Route path="/checkout" element={<ProtectedRoute><h1>Checkout protegido</h1></ProtectedRoute>}/><Route path="/login" element={<h1>Debes ingresar</h1>}/></Routes></TiendaProvider></MemoryRouter>);}
describe('ProtectedRoute: sesión educativa',()=>{
  it('PF-32: bloquea una ruta sin sesión',()=>{montar();expect(screen.getByRole('heading',{name:'Debes ingresar'})).toBeInTheDocument();});
  it('PF-33: deja pasar con sesión',()=>{sessionStorage.setItem('usuario','mario');montar();expect(screen.getByRole('heading',{name:'Checkout protegido'})).toBeInTheDocument();});
});
