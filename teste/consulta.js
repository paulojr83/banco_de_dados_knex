const db = require('../config/db')
/*
db('perfis')
.then(res=> {
    console.log(res)})
.catch(err=> {
    console.log(err.sqlMessage)})
.finally(()=>{
    db.destroy()})


db('perfis')
.then(res => res.map(p => p.nome ))
.then(nomes=> console.log(nomes))    
.catch(err=> {
    console.log(err.sqlMessage)})
.finally(()=>{
    db.destroy()})
    

db('perfis').select('nome')
.then(res=> console.log(res))    
.catch(err=> {
    console.log(err.sqlMessage)})
.finally(()=>{
    db.destroy()})

db.select('nome')
.from('perfis').limit(1)
.then(res=> console.log(res))    
.catch(err=> {
console.log(err.sqlMessage)})
.finally(()=>{
db.destroy()})


db.select('nome')
.from('usuarios')
.where({id:1})
//.whereIn('id', [1,2])
.then(res=> console.log(res))    
.catch(err=> { console.log(err.sqlMessage)})
.finally(()=>{ db.destroy()})

 

db('perfis').insert( 
    {nome:'master', rotulo: 'Master'} )
.then(res=> console.log(res))
.catch(err=> console.log(err))
.finally(db.destroy())
    */


async function teste(){
   const {qtde} = await db('perfis').count("* as qtde").first()
   console.log(qtde)
   
}

teste()
.then(res=> console.log(res))    
.catch(err=> {
console.log(err.sqlMessage)})
.finally(()=>{
db.destroy()})

