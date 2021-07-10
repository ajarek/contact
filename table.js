export function creatTable(text,email,tel,date,TABLE ){
    
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
    <td id="del"><button>delete<i class="bi bi-file-excel-fill" onclic="delete()"></i></button></td>
</tr>`
TABLE.append(table)
}