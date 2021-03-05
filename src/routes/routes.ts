import {Router} from 'express';
import * as cocheCtrl from './coches.controller';
import * as clienteCtrl from './clientes.controller';
import * as facturaCtrl from './facturas.controller';
import * as proveedorCtrl from './proveedores.controller';

const router = Router();

router.get('/coches', cocheCtrl.getCoches);
router.get('/coches/:id', cocheCtrl.getCoche);
router.post('/coches', cocheCtrl.createCoche);
router.delete('/coches/:id', cocheCtrl.deleteCoche);
router.put('/coches/:id', cocheCtrl.updateCoche);


router.get('/facturas', facturaCtrl.getFacturas);
router.get('/facturas/:id', facturaCtrl.getFactura);
router.post('/facturas', facturaCtrl.createFactura);
router.delete('/facturas/:id', facturaCtrl.deleteFactura);
router.put('/facturas/:id', facturaCtrl.updateFactura);


router.get('/clientes', clienteCtrl.getClientes);
router.get('/clientes/:id', clienteCtrl.getCliente);
router.post('/clientes', clienteCtrl.createCliente);
router.delete('/clientes/:id', clienteCtrl.deleteCliente);
router.put('/clientes/:id', clienteCtrl.updateCliente);


router.get('/proveedores', proveedorCtrl.getProveedores);
router.get('/proveedores/:id', proveedorCtrl.getProveedor);
router.post('/proveedores', proveedorCtrl.createProveedor);
router.delete('/proveedores/:id', proveedorCtrl.deleteProveedor);
router.put('/proveedores/:id', proveedorCtrl.updateProveedor);

export default router;