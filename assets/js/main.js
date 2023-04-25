var backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
// $(document).ready(function () {
//   function initCarousel() {
//     if ($("#visible").css("display") == "block") {
//       $(".carousel .carousel-item").each(function () {
//         var i = $(this).next();
//         i.length || (i = $(this).siblings(":first")),
//           i.children(":first-child").clone().appendTo($(this));

//         for (var n = 0; n < 4; n++)
//           (i = i.next()).length || (i = $(this).siblings(":first")),
//             i.children(":first-child").clone().appendTo($(this));
//       });
//     }
//   }
//   $(window).on({
//     resize: initCarousel(),
//     load: initCarousel()
//   });
// });
let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 2
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})