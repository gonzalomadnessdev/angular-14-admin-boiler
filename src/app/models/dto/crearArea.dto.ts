import { GeoJsonCollection } from "../GeoJson";

export interface CrearAreaDTO {
  descripcion: string,
  tarifa_id: number,
  horario_id: number,
  geojson: GeoJsonCollection | any,
}
