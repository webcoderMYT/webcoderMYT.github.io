$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ["page1", "page2", "page3", "page4"],
        menu: "#menu"
    });
    const isotope = new Isotope(".cases", {
        layoutMode: "fitRows",
        itemSelector: ".case-item"
    });

    const filterBtns = document.querySelector(".filter-btns")
    filterBtns.addEventListener("click", e => {
        let { target } = e;
        const filterOption = target.getAttribute('data-filter')
        if (filterOption) {
            document.querySelectorAll(".filter-btn.active").forEach(btn => btn.classList.remove("active"))
            target.classList.add("active");
            isotope.arrange({ filter: filterOption });
        }
    });
});