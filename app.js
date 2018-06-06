function isValidCard(num){
  if(num.length===0||num.charCodeAt()==32||isNaN(num)){
    return isValidCard(prompt('Caracter inválido! \nPor favor, digite o número do seu cartão')); 
  }else{
    var cardArray = num.split('');
    var arrayReverse = cardArray.reverse();
    for(var i=1;i<arrayReverse.length; i+=2){
      var validing = parseInt(arrayReverse[i])*2;
      if(validing>9){
        validing -=9;
      }
      arrayReverse[i]=validing;
    }
    var sum = 0;
    for(var numbers of arrayReverse){
      sum +=parseInt(numbers); 
    }
    if(sum%10===0){
      return alert('Cartão válido!');
    } else{
      return alert('Cartão inválido!');
    }
  }
} isValidCard(prompt('Por favor, digite o número do seu cartão'));