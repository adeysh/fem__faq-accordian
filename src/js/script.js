const accordionHeaders = document.querySelectorAll(".accordion-btn");

Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
    let target = accordionHeader.parentElement.nextElementSibling;
    let expandIcon = accordionHeader.querySelector(".icon-expand");
    let contractIcon = accordionHeader.querySelector(".icon-contract");

    accordionHeader.onclick = () => {
        let expanded = accordionHeader.getAttribute("aria-expanded") === 'true' || false;
        accordionHeader.setAttribute("aria-expanded", !expanded);
        target.hidden = expanded;
        console.log("clicked");
        expandIcon.classList.toggle("hidden");
        contractIcon.classList.toggle("hidden");
    }
});