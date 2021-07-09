const INPUTS=document.querySelectorAll('.input input')
const BUTTON=document.querySelector('.sub button')
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
    creatTable(TEXT,EMAIL,TEL,DATE)

 }

 BUTTON.addEventListener('click',save)
 

function creatTable(text,email,tel,date){
    const table =document.createElement('table')
    table.innerHTML=`<tr>
    <th>Name:</th>
    <td>${text}</td>
</tr>
<tr>
    <th>Email:</th>
    <td><a href="mailto:${email}">${email}</a></td>
</tr>
<tr>
    <th>Phone:</th>
    <td><a href="tel:${tel}">${tel}</a></td>
</tr>
<tr>
    <th>Birthday:</th>
    <td> ${date}</td>
</tr>
<tr>
    <th>Action:</th>
    <td><i class="bi bi-x-circle-fill" onclic="delete()"></i></td>
</tr>`
TABLE.append(table)
}