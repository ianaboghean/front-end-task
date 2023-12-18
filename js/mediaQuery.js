handleSelectLang();

window.addEventListener('resize', function(event){
    handleSelectLang();
});

function handleSelectLang() {
    let selectLang    = document.getElementById('selectLang');
    let logoLink      = document.getElementById('logoLink');
    let signInForFree = document.getElementById('signInForFree');
    let leftAndRightControls = document.getElementById('leftAndRightControls');
    let downPageLinks = document.getElementById('downPageLinks');
    let downPageLogoWrapper = document.getElementById('downPageLogoWrapper');

    if (window.matchMedia("(max-width: 320px)").matches) {
        document.getElementById("selectLang").remove();
        document.getElementById("signInForFree").remove();
        document.getElementById('logoLink').remove();
        document.getElementById("leftAndRightControls").remove();
        document.getElementById('downPageLinks').remove();
        document.getElementById('downPageLogoWrapper').remove();

        document.getElementById("collapsibleNavbar").append(selectLang);
        document.getElementById("collapsibleNavbar").append(signInForFree);
        document.getElementById("navbarWrapper").prepend(logoLink);
        document.getElementById("bigInvestCarousel").append(leftAndRightControls);
        document.getElementById("downPageContent").prepend(downPageLinks);
        document.getElementById("downPageContent").prepend(downPageLogoWrapper);
        
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById("selectLang").remove();
        document.getElementById('logoLink').remove();
        document.getElementById("signInForFree").remove();
        document.getElementById("leftAndRightControls").remove();
        document.getElementById('downPageLinks').remove();
        document.getElementById('downPageLogoWrapper').remove();

        document.getElementById("collapsibleNavbar").append(selectLang);
        document.getElementById("collapsibleNavbar").prepend(logoLink);
        document.getElementById("selectLangWrapper").prepend(signInForFree);
        document.getElementById("bigInvestCarousel").append(leftAndRightControls);
        document.getElementById("downPageContent").prepend(downPageLinks);
        document.getElementById("downPageContent").prepend(downPageLogoWrapper);

    } else {
        document.getElementById("selectLang").remove();
        document.getElementById("signInForFree").remove();
        document.getElementById("leftAndRightControls").remove();
        document.getElementById('downPageLinks').remove();

        document.getElementById("selectLangWrapper").prepend(selectLang);
        document.getElementById("selectLangWrapper").append(signInForFree);
        document.getElementById("peopleLoveBigInvest").append(leftAndRightControls);
        document.getElementById("downPageContent").append(downPageLinks);
    }
}
