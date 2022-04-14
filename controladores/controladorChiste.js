const Chiste = require( './../modelos/modeloChiste');

const insertarChiste = (request, response) => {
    const {id, setup, punchline } = request.body;
    if( !id || !setup || !punchline){
        response.statusMessage="Para crear nuevo Chiste es necesario enviar 'id', 'setup','punchline'.";
        return response.status( 406).end();
    }
    else{
        const nuevoChiste ={
            id,setup,punchline
        };
        Chiste.create( nuevoChiste)
            .then( datoNuevo => { 
                return response.status (201).json(datoNuevo);
            })
            .catch( err => {
                response.statusMessage = "Hubo un error al ejecutar el insert." + err;
                return response.status( 400).end()
            });
    }
}

const obtenerChistes = (request, response) => {
    Chiste.find()
        .then( listaChistes => {
            return response.status(200 ).json(listaChistes);
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el find." + err;
            return response.status( 400).end()
        });
    
} 

const obtenerUnChiste = (request, response) => {
    const {id} =request.params;

    //const chisteEncontrado = Chiste.find( (chistes) => todos.id === Number( id));

    Chiste.findOne( {id})
        .then( chisteEncontrado => {
            return response.status(200 ).json(chisteEncontrado);
        })
        .catch( err => {
            response.statusMessage = "Chiste no en contrado con id" + id;
            return response.status( 400).end()
        });
    
} 


const deleteChiste = (request, response) =>{
    const {id} =request.params;
    Chiste.deleteOne( { id } )
        .then( () => {
            return response.status(204).end(); 
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el delete." + err;
            return response.status( 400).end()
        });

    
}

const actualizarChiste = (request, response) => {
    const {id, setup, punchline} = request.body;
    const chisteActualizado = {
        id, setup, punchline
    };

    Chiste.findOneAndUpdate( {id}, { $set : chisteActualizado}, {new : true} )
        .then( (datoChiste) => {
            return response.status( 202).json(datoChiste)
        })
        .catch( err => {
            response.statusMessage = "Hubo un error al ejecutar el update" + err;
            return response.status( 400).end()
        });
        
}

const ControladorChiste = {
    insertarChiste,
    obtenerChistes,
    obtenerUnChiste,
    deleteChiste,
    actualizarChiste
}

module.exports = ControladorChiste;