import { ConjuntoHorario } from "../conjuntoHorario.model";

export interface CrearHorarioDTO {
  conjunto_horarios: ConjuntoHorario[],
  nombre: string
}
