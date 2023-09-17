
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
$('.button1').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity1').val();
        let price = $('.price1').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        $('.total').html(`Total-Amount: ${totalAmount}Rs`);
    }
})
$('.button2').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity2').val();
        let price = $('.price2').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button3').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity3').val();
        let price = $('.price3').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button4').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity4').val();
        let price = $('.price4').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button5').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity5').val();
        let price = $('.price5').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button6').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity6').val();
        let price = $('.price6').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button7').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity7').val();
        let price = $('.price7').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button8').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity8').val();
        let price = $('.price8').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
$('.button9').click(function(){
    if(array.length >= 8){
        $('.message').css('display','block');
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
    else{
        let quant = $('.quantity9').val();
        let price = $('.price9').val();
        let totalAmount = quant * parseInt(price);
        array.push(totalAmount);
        let sum = 0;
        array.forEach((element) => {
            sum = sum + element;
        })
        $('.total').html(`Total-Amount: ${sum}Rs`);
    }
})
