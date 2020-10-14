window.addEventListener('load', init, false)
function init(){
    const moon = document.getElementById('selectTime');
    const check1 = document.getElementById('cap1');
    const check2 = document.getElementById('cap2');
    const check3 = document.getElementById('cap3');
    const check4 = document.getElementById('cap4');

    moon.addEventListener('click', function(e){

        if(document.getElementById('fondo').style.background == "black"){
            document.getElementById('fondo').style.background = "white";
            document.getElementById('sumCaloria').style.color = "black"
        }
        else{
            document.getElementById('fondo').style.background = "black";
            document.getElementById('sumCaloria').style.color = "white";
        }
    }, false);

    check1.addEventListener('click', function(e){
        const totalCalorias = validateChecked(check1, check2, check3, check4);
        document.getElementById('calorias').innerHTML = totalCalorias;
    },false);

    check2.addEventListener('click', function(e){
        const totalCalorias = validateChecked(check1, check2, check3, check4);
        document.getElementById('calorias').innerHTML = totalCalorias;
    },false);

    check3.addEventListener('click', function(e){
        const totalCalorias = validateChecked(check1, check2, check3, check4);
        document.getElementById('calorias').innerHTML = totalCalorias;
    },false);

    check4.addEventListener('click', function(e){
        const totalCalorias = validateChecked(check1, check2, check3, check4);
        document.getElementById('calorias').innerHTML = totalCalorias;
    },false);
}