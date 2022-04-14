const mongoose = require( 'mongoose');

const SchemaChiste = new mongoose.Schema({
    id : Number,
    setup : {
        type : String,
        required : [true, "setup is required"],
        minlength : [10, "setup must be at least 6 characteres long"]
    },
    punchline : {
        type : String,
        required : [true, "punchline is required"],
        minlength : [3, "setup must be at least 6 characteres long"]
    }
}, 
{timestamps : true}
);


const Chiste = mongoose.model( 'chistes', SchemaChiste );

module.exports = Chiste;

