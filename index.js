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

function main(){
    setTimeout(removeShortsSuggestions, 3000);
    setTimeout(removeShortsMenu, 4000);
}

main();