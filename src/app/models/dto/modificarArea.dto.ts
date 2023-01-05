import { GeoJsonCollection } from "../GeoJson";

export interface ModificarAreaDTO {
  id: number,
  descripcion: string,
  tarifa_id: number,
  horario_id: number,
  geojson: GeoJsonCollection | any,
}
