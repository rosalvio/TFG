import {RequestHandler} from 'express';
import Cliente from './Cliente'

export const getClientes: RequestHandler = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        return res.json(clientes);
    } catch (error) {
        res.json(error);
    }
}

export const getCliente: RequestHandler = async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    if(!cliente) {return res.status(204).json();}
    return res.json(cliente);

}

export const createCliente: RequestHandler = async (req, res) => {
    const cliente = await Cliente.findOne({nombre : req.body.nombre});
    if(cliente) { return res.status(303).json({message: "Cliente ya registrado."}); }
    const newCliente = new Cliente(req.body);
    const saved = await newCliente.save();
    return res.json(saved);
}

export const deleteCliente: RequestHandler = async (req, res) => {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if(!cliente) {return res.status(204).json();}
    return res.json(cliente);
}

export const updateCliente: RequestHandler = async (req, res) => {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true,});
    if(!cliente) {return res.status(204).json();}
    return res.json(cliente);
}