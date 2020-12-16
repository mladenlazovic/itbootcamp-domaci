// Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.

function vreme(sati){
    if(sati > 4 && sati < 12){
        console.log('Dobro jutro');
    }
    else if(sati > 11 && sati < 18){
        console.log('Dobar dan');
    }
    else{
        console.log('Dobro vece');
    }
}

vreme(9)