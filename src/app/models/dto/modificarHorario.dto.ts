import { ConjuntoHorario } from "../conjuntoHorario.model";

export interface ModificarHorarioDTO {
  conjunto_horarios: ConjuntoHorario[],
  nombre: string
}
