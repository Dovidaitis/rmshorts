let yt_logo = document.body.getElementsByClassName("yt-simple-endpoint style-scope ytd-topbar-logo-renderer");

function removeShortsMenu(){
    let menu = document.body.getElementsByClassName("style-scope ytd-guide-section-renderer");
    if (menu.length > 4){
        menu[4].remove();
    }
}

function removeShortsSuggestions(){
    let shorts = Array.from(document.body.getElementsByClassName("style-scope ytd-rich-section-renderer"));
    
    if (shorts.length > 0){
        shorts.forEach(function(element){
            element.remove();
        });
    }
}

function addLogoListener(){
    logo[0].addEventListener('click', function(event) {
      main();
      });
}

function main(){
    addLogoListener();
    setTimeout(removeShortsSuggestions, 3000);
    setTimeout(removeShortsMenu, 4000);
}

main();