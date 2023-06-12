// theme selector
const input = document.querySelector(".theme-switcher input");
input.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.setAttribute("data-theme", "dark");
    } else {
        document.body.setAttribute("data-theme", "light");
    }
});

// logo background height adjusment based on the form height
// function adjustHeight() {
//   document.querySelector(".form-container__inputs").style.height = document.defaultView.getComputedStyle(document.querySelector(".image-logo")).getPropertyValue("height")
// }
// adjustHeight()