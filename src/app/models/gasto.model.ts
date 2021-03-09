enum Tipos {'GASTO_COMUN','OTROS'}
export interface Gasto {
    id: string;
    nombre: string;
    descripcion: string;
    valor: number;
    nombreLocal: string;
    ciudad: string;
    fecha_gasto: string;
    tipo: Tipos;
}