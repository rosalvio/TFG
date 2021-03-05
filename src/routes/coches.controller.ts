import {RequestHandler} from 'express';
import Coche from './Coche'

export const getCoches: RequestHandler = async (req, res) => {
    try {
        const coches = await Coche.find();
        return res.json(coches);
    } catch (error) {
        res.json(error);
    }
}

export const getCoche: RequestHandler = async (req, res) => {
    const coche = await Coche.findById(req.params.id);
    if(!coche) {return res.status(204).json();}
    return res.json(coche);

}

export const createCoche: RequestHandler = async (req, res) => {
    const coche = await Coche.findOne({matricula : req.body.matricula});
    if(coche) { return res.status(303).json({message: "La matricula ya existe."}); }
    const newCoche = new Coche(req.body);
    const saved = await newCoche.save();
    return res.json(saved);
}

export const deleteCoche: RequestHandler = async (req, res) => {
    const coche = await Coche.findByIdAndDelete(req.params.id);
    if(!coche) {return res.status(204).json();}
    return res.json(coche);
}

export const updateCoche: RequestHandler = async (req, res) => {
    const coche = await Coche.findByIdAndUpdate(req.params.id, req.body, {new: true,});
    if(!coche) {return res.status(204).json();}
    return res.json(coche);
}