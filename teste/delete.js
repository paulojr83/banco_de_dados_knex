const db = require('../config/db')
// excluir por id

db('perfis')
.then(res=>{ console.log(res) })
.catch(err=> console.log(err))
.finally(db.destroy())