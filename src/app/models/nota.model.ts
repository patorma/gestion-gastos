enum Estados {'PENDIENTE','REALIZADO','DESCARTADO'}

export interface Nota {
    id:string,
    titulo: string,
    descripcion: string,
    estado: Estados,
    fecha_creacion: string
}