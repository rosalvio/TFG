import {RequestHandler} from 'express';
import Proveedor from './Proveedor'

export const getProveedores: RequestHandler = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        return res.json(proveedores);
    } catch (error) {
        res.json(error);
    }
}

export const getProveedor: RequestHandler = async (req, res) => {
    const proveedor = await Proveedor.findById(req.params.id);
    if(!proveedor) {return res.status(204).json();}
    return res.json(proveedor);

}

export const createProveedor: RequestHandler = async (req, res) => {
    const proveedor = await Proveedor.findOne({proveedor : req.body.proveedor, factura: req.body.factura});
    if(proveedor) { return res.status(303).json({message: "La factura ya existe."}); }
    const newProveedor = new Proveedor(req.body);
    const saved = await newProveedor.save();
    return res.json(saved);
}

export const deleteProveedor: RequestHandler = async (req, res) => {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if(!proveedor) {return res.status(204).json();}
    return res.json(proveedor);
}

export const updateProveedor: RequestHandler = async (req, res) => {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, {new: true,});
    if(!proveedor) {return res.status(204).json();}
    return res.json(proveedor);
}