const NAVICON = document.querySelector("#nav-icon");
const SIDEBAR = document.querySelector("#sideBar");
const ABOUT = document.querySelector("#About");
const CARDS = document.querySelectorAll(".card");
const CONTAINER = document.querySelector(".container");
function navBarAnimation() {
  if (
    !SIDEBAR.classList.contains("openSideBar")
    &&
    !SIDEBAR.classList.contains("closeSideBar")
  ) {
    SIDEBAR.classList.add("openSideBar");
  } else if (SIDEBAR.classList.contains("openSideBar")) {
    SIDEBAR.classList.remove("openSideBar");
    SIDEBAR.classList.add("closeSideBar");
  } else if (SIDEBAR.classList.contains("closeSideBar")) {
    SIDEBAR.classList.remove("closeSideBar");
    SIDEBAR.classList.add("openSideBar");
  }
}
NAVICON.addEventListener("click", () => {
  navBarAnimation();
  if(mainSidebarLink.classList.contains('hide')){
    // mainSidebarLink.classList.remove('gradual-fadeIn');
    mainSidebarLink.classList.remove('hide');
    productsSidebarLink.classList.add('hide');
    servicesSidebarLink.classList.add('hide');
    motorInsuranceSidebarLink.classList.add('hide');
    microInsuranceSidebarLink.classList.add('hide')

  }
});

CONTAINER.addEventListener("click", () => {
  if (SIDEBAR.classList.contains("openSideBar")) navBarAnimation();
});



const mainSidebarLink = document.querySelector('#main-sidebar-link');

const productsLink = document.querySelector('#products-link');
const productsSidebarLink = document.querySelector('#products-sidebar-link');
const productsSidebarBack = document.querySelector('#products-sidebar-back');

const servicesLink = document.querySelector('#services-link');
const servicesSidebarLink = document.querySelector('#services-sidebar-link');
const servicesSidebarBack = document.querySelector('#services-sidebar-back');

const motorInsuranceLink = document.querySelector('#motor-insurance-link');
const motorInsuranceSidebarLink = document.querySelector('#motor-insurance-sidebar-link');
const motorInsuranceSidebarBack = document.querySelector('#motor-insurance-sidebar-back');

const microInsuranceLink = document.querySelector('#micro-insurance-link');
const microInsuranceSidebarLink = document.querySelector('#micro-insurance-sidebar-link');
const microInsuranceSidebarBack = document.querySelector('#micro-insurance-sidebar-back');


productsLink.addEventListener('click', () => {
  // mainSidebarLink.classList.add('gradual-fadeIn');
  mainSidebarLink.classList.add('hide');
  productsSidebarLink.classList.remove('hide');

})

productsSidebarBack.addEventListener('click', () => {
  productsSidebarLink.classList.add('hide');
  // mainSidebarLink.classList.remove('gradual-fadeIn');
  mainSidebarLink.classList.remove('hide');
})

servicesLink.addEventListener('click', () => {
  // mainSidebarLink.classList.add('gradual-fadeIn');
  mainSidebarLink.classList.add('hide');
  servicesSidebarLink.classList.remove('hide');
})

servicesSidebarBack.addEventListener('click', () => {
  servicesSidebarLink.classList.add('hide');
  // mainSidebarLink.classList.remove('gradual-fadeIn');
  mainSidebarLink.classList.remove('hide');
})

motorInsuranceLink.addEventListener('click', () => {
  // servicesSidebarLink.classList.add('gradual-fadeIn');
  servicesSidebarLink.classList.add('hide');
  motorInsuranceSidebarLink.classList.remove('hide');
})

motorInsuranceSidebarBack.addEventListener('click', () => {
  motorInsuranceSidebarLink.classList.add('hide');
  // servicesSidebarLink.classList.remove('gradual-fadeIn');
  servicesSidebarLink.classList.remove('hide');
})

microInsuranceLink.addEventListener('click', () => {
  // servicesSidebarLink.classList.add('gradual-fadeIn');
  servicesSidebarLink.classList.add('hide');
  microInsuranceSidebarLink.classList.remove('hide');
})

microInsuranceSidebarBack.addEventListener('click', () => {
  microInsuranceSidebarLink.classList.add('hide');
  // servicesSidebarLink.classList.remove('gradual-fadeIn');
  servicesSidebarLink.classList.remove('hide');
})


const sideEffect = document.querySelector('.side-effect');
const aboutUsSummary = document.querySelector('#about-us-summary-section');
const navContainer = document.querySelector("#nav-container");
const header = document.querySelector("#header");
let initialNavContainerTop;
let yOffset = window.pageYOffset;
window.addEventListener('load', () => {
 initialNavContainerTop = header.getBoundingClientRect().height;
 if(yOffset >= initialNavContainerTop){
  navContainer.classList.add('sticky-nav');
}
})
window.addEventListener('scroll', () => {
  const aboutUsSummaryBounding = aboutUsSummary.getBoundingClientRect();
  const navContainerBounding = navContainer.getBoundingClientRect();
  if(aboutUsSummaryBounding.top + aboutUsSummaryBounding.height / 2 < window.innerHeight){
    sideEffect.style.top = aboutUsSummaryBounding.top + (aboutUsSummaryBounding.height / 2);
     sideEffect.style.left = aboutUsSummaryBounding.width - 30;
  }
  if(aboutUsSummaryBounding.top + 10 >= window.innerHeight){
    sideEffect.style.display = "none";
  }

  yOffset = window.pageYOffset;
  if(yOffset >= initialNavContainerTop){
    navContainer.classList.add('sticky-nav');
  }else{
    if(navContainer.classList.contains('sticky-nav')){

      navContainer.classList.remove('sticky-nav')
    }
  }
})

