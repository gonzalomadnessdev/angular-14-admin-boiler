import { Submenu } from "./submenu.model";

export interface Menu {
  titulo: string,
  ruta?: string,
  icono: string,
  activo?: boolean,
  submenu?: Submenu[]
}
