let btn = document.getElementById("ingresar"); 
let description = document.getElementById("description");
let buy = document.getElementById("Buy");
let sell = document.getElementById("Sell");
let IVABasic = document.getElementById("Básico");
let IVAMin = document.getElementById("min");
let IVAExc = document.getElementById("Excento");
let subtotal = document.getElementById("Subtotal");
let  tbody = document.getElementById("tbody");
let ventas = document.getElementById("ventas");
let Total = document.getElementById("Total");
//document.getElementById("");
let archivos =[];

function IngresarValores () {
    let IVAValor = null
    let option = null
    if (buy.checked){
        option = "Compra"
    } else {
        option= "Venta"}
    if (IVABasic.checked) IVAValor = 0.23;
    if(IVAMin.checked) IVAValor = 0.10;
    if(IVAExc.checked) IVAExc = 0;
    let IVA = ((subtotal.value)*IVAValor);
    let total = parseInt(IVA) + parseInt(subtotal.value);
    let htmlContentToAppend= "";
    htmlContentToAppend=`<tr class="option">
    <th>${description.value}</th>
        <th>${option}</th>
        <th>${subtotal.value}</th>
        <th>${IVA}</th>
        <th class="valor">${total}</th>
    </tr>`
        
tbody.innerHTML += htmlContentToAppend;
let archivo = {
    "option": option,
    "valor": total
}
archivos.push(archivo)
}

function Calculos (){
    let total = null
    let total2 = null
    for (elemento of archivos){
        if(elemento.option ==="Compra"){
            total += elemento.valor;
            Total.innerHTML = total
        } else{
            total2 += elemento.valor;
            ventas.innerHTML = total2
        }
    }
}

btn.addEventListener("click", ()=>{
    IngresarValores ();
    Calculos ();
})