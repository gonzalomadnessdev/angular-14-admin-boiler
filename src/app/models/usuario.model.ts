export interface Usuario {
  id?: number;
  usuario: string;
  nombre: string;
  apellido: string;
  habilitado: 0 | 1;
  fecha_alta?:string;
  fecha_baja?:string;
  roles_id?: number;
  documento?:number;
  email?:string;
}
