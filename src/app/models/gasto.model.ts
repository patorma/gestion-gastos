enum Tipos {'GASTO_COMUN','OTROS'}
export interface Gasto {
    id: string;
    nombre: string;
    descripcion: string;
    cantidad: number;
    valor: number;
    nombreLocal: string;
    ciudad: string;
    fecha: string;
    tipo: Tipos;
}