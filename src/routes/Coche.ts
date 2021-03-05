import { Schema, model } from "mongoose";

const cocheSchema = new Schema(
    {
        matricula: {
            type: String,
            required: true,
            trim: true
        },
        marca: {
            type: String,
            required: true,
            trim: true
        },
        modelo: {
            type: String,
            required: true,
            trim: true
        },
        kms: {
            type: Number,
            required: true,
            trim: true
        },
        cliente: {
            type: String,
            required: true,
            trim: true
        },
        ultimaITV: {
            type: Date,
            required: false,
            trim: true
        },
        fechaMatriculacion: {
            type: Date,
            required: false,
            trim: true
        },
    }, {
        timestamps: true, versionKey: false
    }
);

export default model('Coche', cocheSchema, 'coches');