import { Permiso } from "./permiso.model";

export interface Rol{
  id?: number;
  rol:string;
  nombre:string;
  nivel:number;
  descripcion: string,
  permisos: Permiso[]
}
