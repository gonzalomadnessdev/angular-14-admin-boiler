export interface CrearUsuarioDTO {
  email: string,
  nombre: string,
  apellido: string,
  password: string,
  roles: string[] | null
}
