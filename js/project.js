
$(document).ready(function(){
    $('.craousel-div').slick({
        autoplay:true ,
        autoplaySpeed:2000,
    });
    $('.choco-div').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    });
    
});



let array = [];
let button1 = document.querySelector('.button1');
button1.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element.Price;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name1').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity1').value;
        let price = document.querySelector('.price1').value;
        let totalAmount = quant * parseInt(price);
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        let sum = 0;
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button2 = document.querySelector('.button2');
button2.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name2').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity2').value;
        let price = document.querySelector('.price2').value;
        let totalAmount = quant * parseInt(price);
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        let sum = 0;
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button3 = document.querySelector('.button3');
button3.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name3').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity3').value;
        let price = document.querySelector('.price3').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button4 = document.querySelector('.button4');
button4.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name4').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity4').value;
        let price = document.querySelector('.price4').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button5 = document.querySelector('.button5');
button5.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name5').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity5').value;
        let price = document.querySelector('.price5').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button6 = document.querySelector('.button6');
button6.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name6').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity6').value;
        let price = document.querySelector('.price6').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button7 = document.querySelector('.button7');
button7.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name7').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity7').value;
        let price = document.querySelector('.price7').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button8 = document.querySelector('.button8');
button8.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name8').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity8').value;
        let price = document.querySelector('.price8').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})

let button9 = document.querySelector('.button9');
button9.addEventListener('click',function(){
    if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector('.name9').innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector('.quantity9').value;
        let price = document.querySelector('.price9').value;
        let totalAmount = quant * parseInt(price);
        let sum = 0;
        let elementPresent = false;
        let obj = {
            'Chocolate_Name': splitName[1],
            'Price':totalAmount,
            'Quantity':quant
        }
        if(array.length == 0){
            array.push(obj);
            document.querySelector('.total').innerHTML = `Total-Amount = ${array[0].Price}Rs`;
        }
        else{
            array.forEach((element) => {
                if(element.Chocolate_Name == splitName[1]){
                    document.querySelector('.message2').style.display = 'block';
                    elementPresent = true;
                }
            })
            if(elementPresent == false){
                array.push(obj);
                array.forEach((element) =>{
                    sum = sum + element.Price
                })
                document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
            }
        }
    }
})
