import { Rol } from "./rol.model";

export interface UsuarioActual {
  id? : number,
  nombre: string;
  apellido: string;
  email: string;
  permisos: any;
  roles: any[];
}
