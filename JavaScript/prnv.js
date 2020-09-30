
// Wrap every letter in a span
var textWrapper = document.querySelector('.anim');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anim .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 200,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.anim',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

$(window).scroll(function(){
    $('#navigation-div').toggleClass('scrolled', $(this).scrollTop() > 90);
    $('#navigation').toggleClass('scroll', $(this).scrollTop() > 90);
    $('.scrl').toggleClass('textScrolled', $(this).scrollTop() > 90);
    $('#name').toggleClass('pscroll', $(this).scrollTop() > 90);
    $('#top').toggleClass('topiconscroll', $(this).scrollTop() > 200);
})