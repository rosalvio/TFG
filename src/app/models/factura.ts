export interface Factura {
    cliente: string,
    factura: string,
    fecha: Date,
    base: number,
    iva: number,
    total: number,
    createdAt?: string,
    updatedAt?: string,
    _id?: string
}