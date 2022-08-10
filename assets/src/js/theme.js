const WOW = require("wowjs");

window.$ = window.jQuery = require("jquery");

addEventListener("ajax:invalid-field", function (event) {
    event.detail.element.classList.add("is-invalid");
    event.detail.element.closest(".col").querySelector("div").classList.add("invalid-feedback");
});

addEventListener("ajax:promise", function(event) {
    event.target.closest('form').querySelectorAll('.is-invalid').forEach(function (el) {
        el.classList.remove("is-invalid");
        closest(".col").querySelector("div").classList.add("invalid-feedback");
    });
});

document.querySelector("#kontaktujte-nas #attachment").addEventListener("change", function (event) {
    const [file] = event.target.files;
    const { name, size } = file;

    document.querySelector("#kontaktujte-nas .attachment-name").textContent = name;
});

$(document).ready(function () {
    window.wow = new WOW.WOW({
        live: false,
        mobile: false,
    }).init();
});
