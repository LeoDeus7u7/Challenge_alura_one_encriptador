function encript(text) {
    return text.split("").map(d => {
        switch (d) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufas";
            default:
                return d;
        }
    }).join("");
}
function unencript(text) {
    return text.split(" ").map(d => {
        return d.replaceAll("enter","e")
                .replaceAll("ai","a")
                .replaceAll("imes","i")
                .replaceAll("ober","o")
                .replaceAll("ufas","u");
    }).join(" ");
}
function print(id,text){
    document.getElementById(id).textContent = text;
}
function printSlowAnimation(text,action){
    if(text != ""){
    let time = 200;
    if(text.length >= 20){time = 150};
    if(text.length >= 40){time = 50};
    let response = document.getElementById("response");
        response.textContent = "";
        print("welcome",action);
        document.getElementById("spiner").style.display = "inline-block";
    let aux = "";
    let index = 0;
    let inter = setInterval(() => {
        aux = aux + text[index];
        response.textContent = aux;
        index++;
        if(aux.length === text.length){
            print("welcome","");
            document.getElementById("spiner").style.display = "none";
            clearInterval(inter);
        };
        }, time);}
}

window.onload = function () {
// Selecion de temas
    const themeButton = document.getElementById('toggle')
    const darkTheme = 'dark-theme'
    const selectedTheme = localStorage.getItem('selected-theme')
    const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

    if (selectedTheme) {
 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    if(selectedTheme === 'dark'){themeButton.checked = false;}else{
        themeButton.checked = true;
  }
  
    } else {
  
    if (userHasDarkTheme) document.body.classList.add(darkTheme)
    themeButton.checked = false;
    }
    themeButton.addEventListener('click', () => {
 
     document.body.classList.toggle(darkTheme)
  
    localStorage.setItem('selected-theme', getCurrentTheme())
    })
//selecion de tema
    document.getElementById("encript").addEventListener('click',()=>{
       let forEncript = document.getElementById("forEncript").value;
       print("welcome","");
       document.getElementById("search").style.display = "none";
       printSlowAnimation(encript(forEncript),"Encriptando");
       
    });
    document.getElementById("unencript").addEventListener('click',()=>{
        let forEncript = document.getElementById("forEncript").value;
        print("welcome","");
        document.getElementById("search").style.display = "none";
        printSlowAnimation(unencript(forEncript),"Desenciptando");
    });
    document.getElementById("copy").addEventListener('click',()=>{
        let foCopy = document.getElementById("response").textContent;
        navigator.clipboard.writeText(foCopy).then(()=>{
            print("welcome","El texto: '"+ foCopy+"' fue copiado.")
        });
    });
}