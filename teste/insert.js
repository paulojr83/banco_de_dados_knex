const db = require('../config/db')

/*
const novoPerfil = {
    nome: 'visitante',
    rotulo: 'Visitante'
}

db('perfis').insert(novoPerfil)
.then(res=>{
    console.log(res)})
.catch(err=> {
    console.log(err.sqlMessage)})
.finally(()=>{
    db.destroy()})

*/

const perfilSU = {
    nome: 'root'+ Math.random(),
    rotulo: 'Super Usuário'
}

db.insert(perfilSU).table('perfis')
.then(res=> res[0])
.then(id => `O código gerado foi ${id}`)
.then(string => {
    console.log(string)})
.catch(err=> {
    console.log(err.sqlMessage)})
.finally(()=>{
    db.destroy()})


db.where({id:1}).table('usuarios').delete()
.then(res=> console.log(res)) 
.catch(err=> {
    console.log(err.sqlMessage)})
.finally(()=>{
    db.destroy()})

function destroy(){
    db.destroy(); 
}
