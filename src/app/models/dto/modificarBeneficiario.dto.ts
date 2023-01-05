export interface ModificarBeneficiarioDTO {
  id: number;
  patente: string;
  franquicia_id: number;
  documento: number;
  vigencia: 0 | 1;
  zona_id: number;
}
