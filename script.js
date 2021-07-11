import { creatTable } from "./table.js"
const INPUTS=document.querySelectorAll('.input input')
const BUTTON=document.querySelector('.sub button')
const SEARCH=document.querySelector('.search input')
const TABLE = document.querySelector('.table ')
let arr=[]

let TEXT=''
let EMAIL=''
let TEL=''
let DATE=''

function save(e){
    e.preventDefault() 
    document.querySelector('.displaySearch').innerHTML=''
    INPUTS.forEach(inp=>{
        if(inp.value==''){document.querySelector('.displayAlert').innerHTML=`<div class="alert"><i class="bi bi-exclamation-triangle-fill"></i>  fill in data!</div>`;save.remove()}

        document.querySelector('.displayAlert').innerHTML=''

        if(inp.id=='text'){ TEXT=inp.value}
        if(inp.id=='email'){ EMAIL=inp.value}
        if(inp.id=='tel'){ TEL=inp.value}
        if(inp.id=='date'){ DATE=inp.value}
        inp.value=''
        
    })
    creatTable(TEXT,EMAIL,TEL,DATE,TABLE)

    const persona ={
        name:TEXT,
        email:EMAIL,
        tel:TEL,
        date:DATE
    }
    arr.push(persona);
    deleteRecord() 

 }

function deleteRecord(){
    const DEL=document.querySelectorAll('#del button') 
    DEL.forEach((dl,index)=>{
        dl.addEventListener('click',(e)=>{
            (e.path[4]).remove() 
           arr.splice(index,1)
        })
    })
}
function deleteSearch(){
    const DEL=document.querySelectorAll('#del button') 
    DEL.forEach((dl,index)=>{
        dl.addEventListener('click',(e)=>{
            (e.path[4]).remove()           
        })
    })
}

function search(e){  
    
   e.preventDefault() 
    arr.forEach(el=>{
        if(SEARCH.value===el.name||SEARCH.value===el.email||SEARCH.value===el.tel||SEARCH.value===el.date){
        creatTable(el.name,el.email,el.tel,el.date,document.querySelector('.displaySearch'))
        SEARCH.value=''
        }
        else return    
    })
     deleteSearch()   
}

SEARCH.addEventListener('input',search)
BUTTON.addEventListener('click',save)

