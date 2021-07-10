import { creatTable } from "./table.js"
const INPUTS=document.querySelectorAll('.input input')
const BUTTON=document.querySelector('.sub button')
const SEARCH=document.querySelector('.search input')
const TABLE = document.querySelector('.table ')


let TEXT=''
let EMAIL=''
let TEL=''
let DATE=''
function save(){
    
    INPUTS.forEach(inp=>{
        if(inp.id=='text'){ TEXT=inp.value}
        if(inp.id=='email'){ EMAIL=inp.value}
        if(inp.id=='tel'){ TEL=inp.value}
        if(inp.id=='date'){ DATE=inp.value}
        inp.value=''
    })
    creatTable(TEXT,EMAIL,TEL,DATE,TABLE)
    deleteRecord()
    
 }

 BUTTON.addEventListener('click',save)
 
function deleteRecord(){
    const DEL=document.querySelectorAll('#del button') 
    DEL.forEach(dl=>{
        dl.addEventListener('click',(e)=>{
            (e.path[4]).remove()
            
        })
    })

}
function search(e){
    const SER=document.querySelectorAll('.table td')
   e.preventDefault() 
    SER.forEach(el=>{
        console.log(el);
        console.log(el.innerText);
        if(SEARCH.value===el.innerText){
        creatTable(TEXT,EMAIL,TEL,DATE,document.querySelector('.displaySearch'))
        }
        else return
        
    })
     deleteRecord()
}
SEARCH.addEventListener('input',search)


