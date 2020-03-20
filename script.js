window.onscroll = function(){scrollPage()};
var header = document.getElementsByClassName('main-heaer');
let sticky = main-header.offsetTop;
function scrollPage(params) {
    if (window.pageYOffset>= sticky) {
        main-header.classList.add('sticky')
    } else {
        main-header.classList.remove('sticky');
    }
}