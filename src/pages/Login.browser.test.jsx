import {describe,it,expect,beforeEach} from 'vitest';import {render,screen} from '@testing-library/react';import userEvent from '@testing-library/user-event';import {MemoryRouter,Routes,Route} from 'react-router-dom';import {TiendaProvider} from '../context/TiendaContext';import Login from './Login';
function montar(){return render(<MemoryRouter initialEntries={['/login']}><TiendaProvider><Routes><Route path="/login" element={<Login/>}/><Route path="/" element={<h1>Página principal</h1>}/></Routes></TiendaProvider></MemoryRouter>)}
beforeEach(()=>{sessionStorage.clear();localStorage.clear();});
describe('Chromium: inicio de sesión',()=>{
 it('PF-01: formulario visible',()=>{montar();expect(screen.getByLabelText('Usuario')).toBeInTheDocument();expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();});
 it('PF-02: escritura en inputs',async()=>{montar();const u=userEvent.setup();await u.type(screen.getByLabelText('Usuario'),'mario');expect(screen.getByLabelText('Usuario')).toHaveValue('mario');});
 it('PF-03: login válido navega a Inicio',async()=>{montar();const u=userEvent.setup();await u.type(screen.getByLabelText('Usuario'),'mario');await u.type(screen.getByLabelText('Contraseña'),'1234');await u.click(screen.getByRole('button',{name:'Ingresar'}));expect(sessionStorage.getItem('usuario')).toBe('mario');expect(await screen.findByRole('heading',{name:'Página principal'})).toBeInTheDocument();});
 it('PF-04: login inválido bloqueado',async()=>{montar();const u=userEvent.setup();await u.type(screen.getByLabelText('Usuario'),'otro');await u.type(screen.getByLabelText('Contraseña'),'mala');await u.click(screen.getByRole('button',{name:'Ingresar'}));expect(sessionStorage.getItem('usuario')).toBeNull();});
});
