import { Schema, model } from "mongoose";

const proveedorSchema = new Schema(
    {
        proveedor: {
            type: String,
            required: true,
            trim: true
        },
        factura: {
            type: String,
            required: true,
            trim: true
        },
        fecha: {
            type: Date,
            required: true,
            trim: true
        },
        vencimiento: {
            type: Date,
            required: false,
            trim: true
        },
        base: {
            type: Number,
            required: true,
            trim: true
        },
        iva: {
            type: Number,
            required: true,
            trim: true
        },
        total: {
            type: Number,
            required: true,
            trim: true
        }

    }, {
        timestamps: true, versionKey: false
    }
);

export default model('Proveedor', proveedorSchema, 'proveedores');