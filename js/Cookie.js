let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});

function AcceptCookie(){
    document.getElementById("cookiePopup").className = "hide";
}
function RejectCookie(){
    dataLayer.push({
        'event': 'default_consent',
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
    });
}