const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const { getUsuarioLogado } = require("../comum/usuario")

module.exports = {
    async login(_, { dados }, { db }){ 
        const usuario = await db('usuarios')
            .where({ email: dados.email })
            .first()
        
        if(!usuario ){
            throw new Error('Usuário inválido!')
        }

        const compare = bcrypt.compareSync(dados.senha, usuario.senha);
        
        if (!compare ) {
            throw new Error('Senha inválido!');
        }

        return getUsuarioLogado(usuario);
    },
    usuarios(_, args, ctx) {
        ctx && ctx.validarAdmin()
        return db('usuarios')
    },
    usuario(_, { filtro }, ctx) {
        ctx && ctx.validarUsuarioFiltor(filtro)

        if(!filtro) return null
        const { id, email } = filtro
        if(id) {
            return db('usuarios')
                .where({ id })
                .first()
        } else if(email) {
            return db('usuarios')
                .where({ email })
                .first()
        } else {
            return null
        }
    },
}