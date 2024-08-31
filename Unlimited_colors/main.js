const randomcolor = function (){
    const hex = '0123456789ABCDEF'
    let color = '#'
  
    for(let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
  };
  
  let change;
  const startchangecolor= function(){
    if(!change){
      change=setInterval(bycolor,1000)};
  
      function bycolor (){
        document.body.style.backgroundColor = randomcolor()};
      
  }
  
  const stopchangecolor = function(){
    clearInterval(change);
    change = null;
  }
  
  document.querySelector('#start').addEventListener('click',startchangecolor);
  document.querySelector('#stop').addEventListener('click',stopchangecolor);