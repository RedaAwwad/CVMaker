const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
  console.log(counter);
   const animate = () => {
      const value = +counter.getAttribute('count');
      const data = +counter.innerText;

      console.log(value, data);
     
      const time = value / speed;
     if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      }else{
        counter.innerText = value;
      }
   }
   
   animate();
});