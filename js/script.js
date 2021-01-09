const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
menuBtn.onclick = function() {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
  } else {
    sideNav.style.right = "-250px";
  }
};

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});

// var typed = $(".typed");
//
// $(function() {
//   typed.typed({
//     strings: [
//       "Lambe Boluwatife.",
//       "A Developer.",
//       "A Songwriter.",
//       "A Student.",
//       "An Idealist."
//     ],
//     typeSpeed: 100,
//     loop: true
//   });
// });
