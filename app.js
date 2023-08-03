// const getNotes = require('./notes.js')
// const fs = require('fs')
// // const chalk = require('chalk')

// console.log('Hello World')

// const notes = getNotes()
// console.log(notes)
// const a =fs.writeFileSync('notes.txt','I am Sai.')
// const b = fs.appendFileSync('notes.txt',' I live in India.')
// // console.log(a)
// // console.log(b)
// import chalk from 'chalk';
// const chalk = require('chalk')
// const green = chalk.green.bold('Success!')
// console.log(green)

const notes = require('./notes.js')
const fs = require('fs')
const validator = require('validator')
const yargs = require('yargs')

console.log(validator.isEmail('sai@example.com'))
const note = notes.getNotes()
console.log(note)

yargs.command({
    command:'add',
    description:'Adding a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log('Added a note.')
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    description:'removes a note',
    builder:{
        title:{
            describe:'Note body',
            demandOption:true,
            type:'string'            
        }
    },
    handler(argv){
        console.log('removing a note.')
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:'list',
    description:'list a note',
    handler(){
        // console.log('lists of note.')
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    description:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('reading a note.')
        notes.reeadNotes(argv.title)
    }
})
console.log(yargs.argv)