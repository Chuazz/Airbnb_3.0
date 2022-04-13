var customer = document.querySelectorAll(".customer");
var check = document.querySelector(".check__here");
var header = document.querySelector("#header");
var smartFind = customer[0].querySelector(".smart__find");
var customerCount = document.querySelectorAll(".customer__count");
var petService = document.querySelector(".pet__service");

smartFind.addEventListener("click", function(e){
    e.stopPropagation();
});

document.addEventListener("click", function(e) {
    if(check.contains(smartFind) == false) {
        document.documentElement.style.overflowY = "auto";
        customer[0].querySelector(".smart__find").classList.add("remove");
        customer[0].querySelector(".about__customer").classList.remove("about-customer__background");
        customer[0].querySelector(".custom-btn__icon").classList.add("un__animation");
        customer[0].querySelector(".custom-btn__icon").classList.remove("animation");
        customer[0].querySelector(".custom-btn__icon p").classList.add("remove");

        customerItem[0].classList.remove("h-3-75", "l-3-75");
        customerItem[0].classList.add("h-4", "l-4");
        customerItem[0].classList.remove("customer__item-boxShadow");

        customerItem[1].querySelector(".item__calender").classList.add("remove");
        customerItem[1].classList.remove("customer__item-boxShadow");

        customerItem[2].querySelector(".item__calender").classList.add("remove");
        customerItem[2].classList.remove("customer__item-boxShadow");

        customerItem[3].querySelector(".customer__list").classList.add("remove");
        customerItem[3].classList.remove("customer__item-boxShadow");
//===============================
        customer[1].querySelector(".smart__find").classList.add("remove");
        customer[1].querySelector(".about__customer").classList.remove("about-customer__background");
        customer[1].querySelector(".custom-btn__icon").classList.add("un__animation");
        customer[1].querySelector(".custom-btn__icon").classList.remove("animation");
        customer[1].querySelector(".custom-btn__icon p").classList.add("remove");

        customerItem[4].querySelector(".smart__find-medium").classList.add("remove");
        customerItem[4].classList.add("h-6");
        customerItem[4].classList.remove("h-5");
        customerItem[4].classList.remove("customer__item-boxShadow");

        customerItem[5].querySelector(".item__calender").classList.add("remove");
        customerItem[5].classList.remove("customer__item-boxShadow");
        customerItem[5].classList.remove("h-7");

        document.querySelector(".custommer__account").classList.add("remove");
        petService.classList.add("remove");
        e.stopPropagation();
    }
});
//===============================================================
var headerLogo = document.querySelector(".web__logo");
var headerItem = document.querySelectorAll(".header__item");
var navEnd = document.querySelector(".nav__end");
var navEndItem = document.querySelectorAll(".nav__end-item a");

document.querySelectorAll("input")[0].addEventListener("click", function(e){
    e.stopPropagation();
});

document.querySelectorAll("input")[1].addEventListener("click", function(e){
    e.stopPropagation();
});

window.addEventListener("scroll", scrollToSee);

function scrollToSee(e) {
    if(document.documentElement.scrollTop > 20){
        header.classList.add("header__white");
        headerLogo.style = "color: var(--rgb__color--light-red)";
        headerItem[0].classList.add("remove");
        headerItem[1].querySelector(".nav__mid").classList.add("remove");
        headerItem[1].querySelector(".header__search").classList.remove("h-0", "l-0", "m-0");
        customer[0].classList.add("remove");
        customer[1].classList.add("remove");
        navEnd.classList.remove("m-11");
        navEndItem[0].style.color = "#222";
        navEndItem[1].style.color = "#222";
        document.querySelectorAll(".nav__end-item")[0].classList.add("hover__color");
        document.querySelectorAll(".nav__end-item")[1].classList.add("hover__color");
    }
    else{
        header.classList.remove("header__white");
        headerLogo.style = "color: #fff";
        headerItem[0].classList.remove("remove");
        headerItem[1].querySelector(".nav__mid").classList.remove("remove");
        headerItem[1].querySelector(".header__search").classList.add("h-0", "l-0", "m-0");
        customer[0].classList.remove("remove");
        customer[1].classList.add("remove");
        navEnd.classList.add("m-11");
        navEndItem[0].style.color = "#fff";
        navEndItem[1].style.color = "#fff";
        document.querySelectorAll(".nav__end-item")[0].classList.remove("hover__color");
        document.querySelectorAll(".nav__end-item")[1].classList.remove("hover__color");
    }
};
//===============================================================
var navEndRight = document.querySelector(".end__item-right");

navEndRight.addEventListener("click", clickToSeeAccount);

function clickToSeeAccount(e) {
    document.querySelector(".custommer__account").classList.toggle("remove");
    e.stopPropagation();
}
//===============================================================
var navMidItem = document.querySelectorAll(".nav__mid-item");
var hr1 = navMidItem[0].querySelector(".hr1");
var hr2 = navMidItem[1].querySelector(".hr2");

navMidItem[0].addEventListener("mouseover", hoverToSee1);
navMidItem[0].addEventListener("mouseout", unHoverToSee1);
navMidItem[1].addEventListener("mouseover", hoverToSee2);
navMidItem[1].addEventListener("mouseout", unHoverToSee2);

function hoverToSee1(e) {
    if(hr1.classList.contains("check")){
        hr1.style = "display: block; animation:  hrAnimation 0.3s linear;";
    }
    e.stopPropagation();
};

function unHoverToSee1(e) {
    if(hr1.classList.contains("check")){
        hr1.style.display = "none";
    }
};

function hoverToSee2(e) {
    hr2.style = "display: block; animation:  hrAnimation 0.3s linear;";
    e.stopPropagation();
};

function unHoverToSee2(e) {
    hr2.style = "display: none;";
    e.stopPropagation();
};
//===============================================================
smartFind.onClick = function(e){
    e.stopPropagation();
};
//===============================================================
var customerItem = document.querySelectorAll(".customer__item");
var length = customerItem.length;

for(var i = 0; i < length; ++i){
    customerItem[i].addEventListener("click", function(e){
        e.stopPropagation();
    })
};

navMidItem[0].addEventListener("click", clickToSeeChoice1);
navMidItem[1].addEventListener("click", clickToSeeChoice2);

function clickToSeeChoice1(e){
    customer[0].querySelector(".smart__find").classList.add("remove");
    hr1.classList.add("open");
    hr2.classList.remove("open");
    customer[0].classList.remove("remove");
    customer[1].classList.add("remove");
    customerItem[4].classList.remove("customer__item-boxShadow");
    customer[1].querySelector(".about__customer").classList.remove("about-customer__background");
    e.stopPropagation();
};

function clickToSeeChoice2(e) {
    hr1.classList.add("check");
    hr1.style.display = "none";
    hr1.classList.remove("open");
    hr2.classList.add("open");
    customer[0].classList.add("remove");
    customer[1].classList.remove("remove");
    customerItem[5].querySelector(".custom-btn__icon").classList.add("custom-btn__icon-2");
    customer[1].querySelector(".smart__find").classList.add("remove");
    customerItem[0].classList.remove("customer__item-boxShadow");
    customer[0].querySelector(".about__customer").classList.remove("about-customer__background");
    
    e.stopPropagation();
};
//===============================================================
customer[0].querySelector(".custom-btn__icon").onclick = clickToSeeSmartFind1;
customer[1].querySelector(".custom-btn__icon").onclick = clickToSeeSmartFind2;

customerItem[0].addEventListener("click", clickToSeeSmartFind1);
customerItem[1].addEventListener("click", clickToSeeCalender);
customerItem[2].addEventListener("click", clickToSeeCalender2);
customerItem[3].addEventListener("click", clickToSeeCustomerList);
customerCount[3].querySelector(".customer__age").addEventListener("click", clickToSeePetService);
customerItem[4].addEventListener("click", clickToSeeSmartFind2);
customerItem[5].addEventListener("click", clickToSeeCalender3);

function clickToSeeSmartFind1(e) {
    if(window.innerWidth > 943){
        customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    customer[0].querySelector(".about__customer").classList.add("about-customer__background");
    customerItem[0].querySelector(".smart__find").classList.remove("remove");
    customerItem[0].classList.add("h-3-75", "l-3-75");
    customerItem[0].classList.remove("h-4", "l-4");
    customerItem[0].classList.add("customer__item-boxShadow");
    customerItem[1].querySelector(".item__calender").classList.add("remove");
    customerItem[1].classList.remove("customer__item-boxShadow");
    customerItem[2].querySelector(".item__calender").classList.add("remove");
    customerItem[2].classList.remove("customer__item-boxShadow");
    customerItem[3].querySelector(".customer__list").classList.add("remove");
    customerItem[3].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
};

function clickToSeeCalender(e) {
    if(window.innerWidth > 943){
        customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    customerItem[0].classList.add("h-3-75", "l-3-75");
    customerItem[0].classList.remove("h-4", "l-4"); 
    customerItem[0].classList.remove("customer__item-boxShadow");
    customerItem[1].querySelector(".item__calender").classList.remove("remove");
    customerItem[1].classList.add("customer__item-boxShadow");
    customerItem[2].querySelector(".item__calender").classList.add("remove");
    customerItem[2].classList.remove("customer__item-boxShadow");
    customerItem[3].querySelector(".customer__list").classList.add("remove");
    customerItem[3].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
}

function clickToSeeCalender2(e) {
    if(window.innerWidth > 943){
        customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    customerItem[0].classList.add("h-3-75", "l-3-75");
    customerItem[0].classList.remove("h-4", "l-4"); 
    customerItem[0].classList.remove("customer__item-boxShadow");
    customerItem[1].querySelector(".item__calender").classList.add("remove");
    customerItem[1].classList.remove("customer__item-boxShadow");
    customerItem[2].querySelector(".item__calender").classList.remove("remove");
    customerItem[2].classList.add("customer__item-boxShadow");
    customerItem[3].querySelector(".customer__list").classList.add("remove");
    customerItem[3].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
}

function clickToSeeCustomerList(e) {
    if(window.innerWidth > 943){
        customer[0].querySelector(".custom-btn__icon p").classList.remove("remove");
        customer[0].querySelector(".custom-btn__icon").classList.add("animation");
        customer[0].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }   
    customer[0].querySelector(".about__customer").classList.add("about-customer__background");
    customerItem[0].classList.remove("customer__item-boxShadow");
    customerItem[0].querySelector(".smart__find").classList.add("remove");
    customerItem[0].classList.add("h-3-75", "l-3-75");
    customerItem[0].classList.remove("h-4", "l-4");
    customerItem[1].querySelector(".item__calender").classList.add("remove");
    customerItem[1].classList.remove("customer__item-boxShadow");
    customerItem[2].querySelector(".item__calender").classList.add("remove");
    customerItem[2].classList.remove("customer__item-boxShadow");
    customerItem[3].querySelector(".customer__list").classList.remove("remove");
    customerItem[3].classList.add("customer__item-boxShadow");
    e.stopPropagation();
}

function clickToSeePetService(e) {
    petService.classList.remove("remove");
    document.documentElement.style.overflowY = "hidden";
    e.stopPropagation();
}

function clickToSeeSmartFind2(e) {
    if(window.innerWidth > 943){
        customerItem[5].querySelector(".custom-btn__icon p").classList.remove("remove");
        customerItem[5].querySelector(".custom-btn__icon").classList.add("animation");
        customerItem[5].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }
    customer[1].querySelector(".about__customer").classList.add("about-customer__background");
    customerItem[4].querySelector(".smart__find-medium").classList.remove("remove");
    customerItem[4].classList.remove("h-6");
    customerItem[4].classList.add("h-5");
    customerItem[4].classList.add("customer__item-boxShadow");
    customerItem[5].querySelector(".item__calender").classList.add("remove");
    customerItem[5].classList.add("h-7");
    customerItem[5].classList.remove("customer__item-boxShadow");
    e.stopPropagation();
};

function clickToSeeCalender3(e) {
    if(window.innerWidth > 943){
        customerItem[5].querySelector(".custom-btn__icon p").classList.remove("remove");
        customerItem[5].querySelector(".custom-btn__icon").classList.add("animation");
        customerItem[5].querySelector(".custom-btn__icon").classList.remove("un__animation");
    }
    customer[1].querySelector(".about__customer").classList.add("about-customer__background");
    customerItem[4].querySelector(".smart__find-medium").classList.add("remove");
    customerItem[4].classList.remove("h-6");
    customerItem[4].classList.add("h-5");
    customerItem[4].classList.remove("customer__item-boxShadow");
    customerItem[5].querySelector(".item__calender").classList.remove("remove");
    customerItem[5].classList.add("customer__item-boxShadow");
    customerItem[5].classList.add("h-7");
    e.stopPropagation();
}
//===============================================================
var changeLayout = document.querySelector(".change__language-layout");

navEndItem[1].addEventListener("click", clickToSeeLayout);
changeLayout.addEventListener("click", clickToOpenLayout);
changeLayout.querySelector(".close__layout-icon").addEventListener("click", clickToOpenLayout);
changeLayout.querySelector(".layout__container").onclick = function(e){
    e.stopPropagation();
};

function clickToSeeLayout(e) {
    document.documentElement.style.overflowY = "hidden";
    changeLayout.style.display = "flex";
    e.stopPropagation();
};

function clickToOpenLayout(e) {
    document.documentElement.style.overflowY = "auto";
    changeLayout.style.display = "none";
    e.stopPropagation();
};
//===============================================================
var layoutItem = document.querySelectorAll(".layout__item");
var chooseLayout = document.querySelectorAll(".choose__languages");

layoutItem[0].addEventListener("click", clickToChangeLayout1);
layoutItem[1].addEventListener("click", clickToChangeLayout2);

function clickToChangeLayout1(e) {
    changeLayout.querySelector(".translate__container").classList.remove("remove");
    changeLayout.querySelector(".language__recomend").classList.remove("remove");
    layoutItem[0].classList.add("black__color");
    layoutItem[1].classList.remove("black__color");
    chooseLayout[0].classList.remove("remove");
    chooseLayout[1].classList.add("remove");
    changeLayout.querySelector(".layout__item-slash--1").classList.remove("remove");
    changeLayout.querySelector(".layout__item-slash--2").classList.add("remove");
    e.stopPropagation();
}

function clickToChangeLayout2(e) {
    changeLayout.querySelector(".translate__container").classList.add("remove");
    changeLayout.querySelector(".language__recomend").classList.add("remove");
    layoutItem[0].classList.remove("black__color");
    layoutItem[1].classList.add("black__color");
    chooseLayout[0].classList.add("remove");
    chooseLayout[1].classList.remove("remove");
    changeLayout.querySelector(".layout__item-slash--1").classList.add("remove");
    changeLayout.querySelector(".layout__item-slash--2").classList.remove("remove");
    e.stopPropagation();
}
//===============================================================
var turnOnOff = document.querySelector(".turn__on-off");

turnOnOff.addEventListener("click", function(e) {
    turnOnOff.querySelector(".fa-circle-check").classList.toggle("translate9");
    turnOnOff.classList.toggle("background");
    e.stopPropagation();
});
