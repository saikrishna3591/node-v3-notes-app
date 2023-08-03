const fs = require('fs');
// const chalk = require('chalk');
// // import chalk from 'chalk';
const { title } = require('process')

const getNotes = (title) => {
    return 'Your notes...'
}
const reeadNotes = (title) => {
    // return 'Your notes...'
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(note.title)
        console.log(note.body)
    }
    else{
        console.log("No note found.....")
    }
}
const addNotes = (title,body) =>{
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((notes) => notes.title === title)
    const duplicateNote = notes.find((notes) => notes.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New notes added')
    }
    else{
        console.log('Already exists')
    }
}

debugger

const removeNotes =(title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.title!==title
    })
    if(notes.length>notesToKeep.length){
        // const greenMSg = chalk.green.inverse.bold('Note removed')
        console.log('Note removed')
        saveNotes(notesToKeep)
    }
    else{
        // const redMsg = chalk.red.inverse.bold('No note found')
        console.log('No note found')
    }
}
const listNotes = () =>{
    console.log('Your Notes....')
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });

}
const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}
module.exports ={
    getNotes:getNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    loadNotes:loadNotes,
    reeadNotes:reeadNotes,
    saveNotes:saveNotes,
    addNotes:addNotes
}