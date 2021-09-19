// slick slider
$(document).ready(function(){
    $('.address-slider').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
          breakpoint: 992,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 2
          }
          },
          {
            breakpoint: 500,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            },
          
          ]
      });
  });
    
  $(document).ready(function(){
    $('.recommend-slider').slick({
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
          {
          breakpoint: 992,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2
          }
          },
          {
            breakpoint: 500,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            },
          ]
          });
  });

  const btnCalendar = document.querySelector('.date-search');
  const btnCustomer = document.querySelector('.customer-search');
  const calendar = document.querySelector('.calendar');
  const customer = document.querySelector('.customer');
  const toggleMenu = document.querySelector('.toggle-menu');
  const menu = document.querySelector('.menu');
  const mobileMenu = 'js-menu-mobile';
  var hide = "js-hide";
  const inputText = document.querySelector('.input-text');
  var searchInput = document.querySelector('.search-input');

  btnCalendar.addEventListener('click',()=>{
    calendar.classList.add(hide);
  }),
  btnCustomer.addEventListener('click',()=>{
    customer.classList.add(hide);
  }),
  toggleMenu.addEventListener('click',function(){
    menu.classList.add(mobileMenu);
  }),
  inputText.addEventListener('focus',function(){
    searchInput.style.border = "2px solid #ccc";
  })
  window.addEventListener("click",function(e)
  {
    if(!calendar.contains(e.target) && !e.target.matches(".date-search"))
    {
      calendar.classList.remove(hide);
    }
    if(!customer.contains(e.target) && !e.target.matches(".customer-search"))
    {
      customer.classList.remove(hide);
    }
    if(!menu.contains(e.target) && !e.target.matches(".toggle-menu"))
    {
      menu.classList.remove(mobileMenu);
    }
    if(!inputText.contains(e.target) && !e.target.matches('.input-text'))
    {
      searchInput.style.border = "2px solid transparent";
    }
  }
  )

  