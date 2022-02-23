
function soma(array){
    let soma = 0;
        for (let i of array){
            soma += i;
        }
    return soma
}

function somarArray(){
    let numero = document.getElementById('numero');
    //let select = document.getElementById('seltab');
    if (numero.value.length == 0){
        window.alert('Digite um numero')
    }
    else{
        let arrayTemp = numero.value;
        arrayTemp = arrayTemp.replaceAll(" ","");
        arrayTemp = arrayTemp.replaceAll(";",",");
        arrayTemp = arrayTemp.replaceAll(".",",");
        let arrayString = arrayTemp.split(",");
        let arrayInt = [];
        for (let i of arrayString){
            arrayInt.push(Number(i));
            //window.alert(i);
        };

        //for (let i of arrayInt){
        //    window.alert(i)
        //}

        //select.innerHTML = '';
    
        //for(let i of arrayString){
        //    let item = document.createElement('option')
        //    //item.value = `${n} x ${i} = ${n*i}`
        //    item.text = i;
            //window.alert(item.value)
        //    select.appendChild(item);
        //}
        window.alert("A soma é : "+soma(arrayInt));
    }


}
