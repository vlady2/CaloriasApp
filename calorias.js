function validateChecked(check1, check2, check3, check4){
    let array = [0,0,0,0];
    let result;
    for(let i = 0; i < 4; i++){
         switch (i){
            case 0:
                if(check1.checked == true)
                array[i] = check1.value;
                break;
            case 1:
                if(check2.checked == true)
                array[i] = check2.value;    
                break;
            case 2:
                if(check3.checked == true)
                array[i] = check3.value;
                break;
            case 3:
                if(check4.checked == true)
                array[i] = check4.value;
                break;
         }
    }
    result = sumCalorias(array);
    return result;
}

function sumCalorias(array){
    let cont = 0;
    for (let index = 0; index < array.length; index++) {
        cont = cont + parseInt(array[index]);
    }
    return cont;
}