export interface Proveedor {
    proveedor: string,
    factura: string,
    fecha: Date,
    vencimiento: Date,
    base: number,
    iva: number,
    total: number,
    createdAt?: string,
    updatedAt?: string,
    _id?: string
}