const db = require('../config/db')

const novoUsuario = {
    nome:'Pedro',
    email:'pedro@email.com',
    senha:'123456',
}
 
/*
db.insert(novoUsuario).from('usuarios').then(usuario => console.log(usuario))
.catch(err=> { console.log(err.sqlMessage)})
.finally(db.destroy())
*/
async function exercicio() {
    //count
        const { qtde } = await db('usuarios').first();
        console.log(qtde)    
        // inserir ( se a tabela estiver vazia )
        if( qtde === 0 ) {
            await db('usuarios').insert(novoUsuario)
        }
    
        let { id } = await db('usuarios').select('id').limit(1).first();
        
        await db('usuarios').where({id}).update({nome:'Pedro Garcia'})
    
        return db('usuarios').where({id})
    }
    
    exercicio()
        .then(usuario => console.log(usuario))
        .catch(err=> { console.log(err.sqlMessage)})
        .finally(db.destroy())