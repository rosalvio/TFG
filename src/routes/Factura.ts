import { model, Schema } from 'mongoose';

const facturaSchema = new Schema(
    {
        cliente: {
            required: true,
            trim: true,
            type: String
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
)

export default model('Factura', facturaSchema, 'facturas');