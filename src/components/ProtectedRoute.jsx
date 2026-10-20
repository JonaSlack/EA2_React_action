import {Navigate,useLocation} from 'react-router-dom';
import {useTienda} from '../context/TiendaContext';
export default function ProtectedRoute({children}) {const {usuario}=useTienda();const ubicacion=useLocation();return usuario?children:<Navigate to="/login" replace state={{desde:ubicacion.pathname}}/>}
