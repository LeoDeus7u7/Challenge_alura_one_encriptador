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
 
window.onload = function () {
    
    document.getElementById("encript").addEventListener('click',()=>{
       let forEncript = document.getElementById("forEncript").value;
       print("response",encript(forEncript));
       print("welcome","");
       document.getElementById("search").style.display = "none";
    });
    document.getElementById("unencript").addEventListener('click',()=>{
        let forEncript = document.getElementById("forEncript").value;
        print("response",unencript(forEncript));
        print("welcome","");
        document.getElementById("search").style.display = "none";
    });
    document.getElementById("copy").addEventListener('click',()=>{
        let foCopy = document.getElementById("response").textContent;
        navigator.clipboard.writeText(foCopy).then(()=>{
            alert("El texto: '"+ foCopy+"' fue copiado.")
        });
    });
}