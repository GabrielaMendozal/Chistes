const express = require( 'express' );
const ChisteRouter = express.Router();

const ControladorChiste = require( './../controladores/controladorChiste');



ChisteRouter.post( '/nuevo', ControladorChiste.insertarChiste );
ChisteRouter.get( '/getAll', ControladorChiste.obtenerChistes);
ChisteRouter.get( '/get/:id', ControladorChiste.obtenerUnChiste);
ChisteRouter.delete( '/eliminar/:id', ControladorChiste.deleteChiste);
ChisteRouter.put('/actualizar', ControladorChiste.actualizarChiste);

module.exports = ChisteRouter;