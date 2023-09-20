
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
let cart_button = document.querySelectorAll(".cart_button")
cart_button.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        if(array.length >= 8){
            document.querySelector('.message').style.display = 'block';
            let sum = 0;
            array.forEach((element) => {
                sum = sum + element.Price;
            })
        document.querySelector('.total').innerHTML = `Total-Amount = ${sum}Rs`;
    }
    else{
        let name = document.querySelector(`.name${idx+1}`).innerHTML;
        let splitName = name.split(':');
        let quant = document.querySelector(`.quantity${idx+1}`).value;
        let price = document.querySelector(`.price${idx+1}`).value;
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
})
