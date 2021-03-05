import {model, Schema} from 'mongoose';

const clienteSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        telefono: {
            type: Number,
            required: false,
            trim: true
        }
        // No se almacenan los coches, se relacionan con el cliente por la propiedad en Coche
    }, {
        timestamps: true, versionKey: false
    }
)

export default model('Cliente', clienteSchema, 'clientes');