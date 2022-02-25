let stars_lists = document.querySelectorAll(".stars_list");
for(let i = 0; i != stars_lists.length; i++) {
    for(let j = 0; j != 5; j++) {
        stars_lists[i].children[j].addEventListener("click", () => {
            if(stars_lists[i].children[j].getAttribute("src") == "/imagens/hidden_star.ico"){
                for(let k = j; k >= 0; k--) {
                    stars_lists[i].children[k].setAttribute("src", "/imagens/selected_star.ico");
                }
            }
            else if((stars_lists[i].children[j].getAttribute("src") == "/imagens/selected_star.ico") &&
                   (stars_lists[i].children[j + 1].getAttribute("src") == "/imagens/selected_star.ico")) {
                for(let k = j + 1; k != 5; k++) {
                    stars_lists[i].children[k].setAttribute("src", "/imagens/hidden_star.ico");
                }
            }
            else if(j == 0) {
                stars_lists[i].children[j].setAttribute("src", "/imagens/hidden_star.ico");
            }
        });
    }
}