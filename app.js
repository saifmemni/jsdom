let cardItems = [
    {
       title: 'pink pair of sneakers',
       img: './images/img1.avif',
       price: 40,
       quantity: 2,
       size: 's',
       color: "pink",
       loved: true,
    },
    {
       title: 'orange pair of sneakers',
       img: './images/img2.avif',
       price: 45,
       quantity: 3,
       size: 'Xl',
       color: "orange",
       loved: false,
    },
    {
       title: 'white pair of sneakers',
       img: './images/img3.jpg',
       price: 50,
       quantity: 4,
       size: 'L',
       color: "white",
       loved: false,
    },
  ];

  

  const cardWrapper=document.querySelector("#cardWrapper");
  function htmlEL(v){
    return ` <div class="singleCard shadow">
  <div>
    <img class="shadow" src=${v.img} alt="first" />
    <div class="quantity">
      <button class="shadow-btn decrement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-minus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </button>
      <input class="quantity-value" type="text" min="1" value=${v.quantity} />
      <button class="shadow-btn increment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </button>
    </div>
  </div>
  <div class="info">
    <h1>${v.title}</h1>
    <div>
      <div>
        <h6>price</h6>
        <span>${v.price}$</span>
      </div>
      <div>
        <h6>sub Total</h6>
        <span class="sub-total">${v.price * v.quantity} </span>
      </div>
      <div>
        <h6>size</h6>
        <span>${v.size}</span>
      </div>
      <div>
        <h6>choosen color</h6>
        <span class="color shadow-btn" style="background-color:${v.color}"></span>
      </div>
    </div>
  </div>
  <div class="col btn-hundler">
    <button class="heart shadow-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-heart"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        ></path>
      </svg>
    </button>
    <button class="delete shadow-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-trash"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 7l16 0"></path>
        <path d="M10 11l0 6"></path>
        <path d="M14 11l0 6"></path>
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
      </svg>
    </button>
  </div>
</div>
</div>`;
}

cardItems.forEach(function(v , i){
  cardWrapper.innerHTML += htmlEL(v);
});
// pour definir l element
const main=document.querySelector("main");
const increment=document.querySelectorAll(".increment");
 const sub=document.querySelectorAll(".sub-total");
 const input=document.querySelectorAll("input");

 const totalItem=document.querySelector(".total-quantity");
 const totalPrice=document.querySelector("#total h3");
 totalItem.innerHTML = 0 ;
 totalPrice.innerHTML = 0 ;
 // funtion calcule la total Items
 function calculate(){
cardItems.forEach(function(v,i){
  totalItem.innerHTML= 
          parseInt(totalItem.innerHTML)+ parseInt(input[i].value);   
          totalPrice.innerHTML = parseInt(totalPrice.innerHTML)  + parseInt(sub[i].innerHTML); 
});
     if (totalItem.innerHTML==0){
      main.innerHTML="<h1>your cart is empty</h1>"
     }
 }
 calculate();
increment.forEach(function(v, i){
v.addEventListener("click" , function(e){

  input[i].value++;
  sub[i].innerHTML = cardItems[i].price * input[i].value;
  totalItem.innerHTML = 0 ;
 totalPrice.innerHTML = 0 ;
  calculate();
});

});
const decrement=document.querySelectorAll(".decrement");

decrement.forEach(function(v, i){
  v.addEventListener("click" , function(e){
  if (input[i].value == 1) return ;
    input[i].value--;
    sub[i].innerHTML = cardItems[i].price * input[i].value;
    totalItem.innerHTML = 0 ;
    totalPrice.innerHTML = 0 ;
     calculate();
  });
  
  });
  const deleted=document.querySelectorAll(".delete");
  const singleCard=document.querySelectorAll(".singleCard")
       deleted.forEach(function(v,i){
       v.addEventListener("click", function(el){
        sub[i].innerHTML=0 ;
        input[i].value =0 ;


        singleCard[i].style.display = "none" ;
        totalItem.innerHTML = 0 ;
    totalPrice.innerHTML = 0 ;
    calculate();
       });
  });
// pour delete your cart
  const heart=document.querySelectorAll(".heart");
  heart.forEach(function(v , i){
    v.addEventListener("click", function(e){
      const hearted=e.target ;
      hearted.classList.toggle("hearted");
    });
  });
