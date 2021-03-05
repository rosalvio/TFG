import {RequestHandler} from 'express';
import Factura from './Factura'

export const getFacturas: RequestHandler = async (req, res) => {
    try {
        const facturas = await Factura.find();
        return res.json(facturas);
    } catch (error) {
        res.json(error);
    }
}

export const getFactura: RequestHandler = async (req, res) => {
    const factura = await Factura.findById(req.params.id);
    if(!factura) {return res.status(204).json();}
    return res.json(factura);

}

export const createFactura: RequestHandler = async (req, res) => {
    const factura = await Factura.findOne({factura : req.body.factura});
    if(factura) { return res.status(303).json({message: "La factura ya existe."}); }
    const newFactura = new Factura(req.body);
    const saved = await newFactura.save();
    return res.json(saved);
}

export const deleteFactura: RequestHandler = async (req, res) => {
    const factura = await Factura.findByIdAndDelete(req.params.id);
    if(!factura) {return res.status(204).json();}
    return res.json(factura);
}

export const updateFactura: RequestHandler = async (req, res) => {
    const factura = await Factura.findByIdAndUpdate(req.params.id, req.body, {new: true,});
    if(!factura) {return res.status(204).json();}
    return res.json(factura);
}