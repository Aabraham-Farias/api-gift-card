// Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
//const { rolesSchema } = require('./Roles');

const pymeSchema = new Schema({
    nombreNegocio:{
        type:String,
        required:true
    },
    giro:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    giftCardEmitidas:[{type:mongoose.Schema.Types.ObjectId,ref:'gifcard'}],
    tiempoPlazoUso:{
        type:Date,
        required:true
    },
    monto:{
        type:Number,
        default:0
    },
    correo:{
        type:String,
        required:true
    },
    direccion:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'direccion'
    },
    telefono:{
        type:String,
        required:true
    },
    responsable:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'responsable'
    }
});

pymeSchema.pre('save', function(next) {
    const pyme = this;

    // only hash the password if it has been modified (or is new)
    if (!pyme.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR,(err, salt)=>{
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt,(err, hash)=>{
            if (err) return next(err);

            // override the cleartext password with the hashed one
            pyme.password = hash;
            next();
        });
    });
});

const pymeModel = mongoose.model('pyme',pymeSchema);

module.exports = pymeModel;