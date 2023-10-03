let lola__lola = document.getElementById("lola__lola")
const in1 = document.querySelector(".lellet")
let in11 = document.querySelector("lellet1")
const wrapper1 = document.querySelector(".wrapper1")
function createMassage(){
        let v = in1.value
        if(v === ""){
            return  ""
        }
        let date = new Date()
        let houre = date.getHours()
        let minut = date.getMinutes()
        let div = document.createElement("div")
        div.classList.add("box")
        div.innerHTML = `
            <p>${v}</p>
                <span>${houre} ${minut}</span>
        `
        console.log(div);
        wrapper1.appendChild(div)
        in1.value = ""
        partniorMassage()
    }
    const messages = [
                 "nma gap",
                 "nma qvos",
                 "qattas",
                 "yaxwimisi",
                 "km bnsi",
                 "hm",
                 "ok",
                 "haa",
                 "yoq",
                 "hop",
                 "hec nma",
         
             ]
             function partniorMassage(){
                 setTimeout(()=>{
                     let date = new Date()
                     let houre = date.getHours()
                     let minut = date.getMinutes()
                     let div = document.createElement("div")
                     div.classList.add("box")
                     div.classList.add("partner")
                     let index = Math.floor(Math.random() * messages.length)
                     div.innerHTML = `
                         <p>${messages[index]}</p>
                             <span>${houre} ${minut}</span>
                     `
                     console.log(div);
                     wrapper1.appendChild(div)
                 }, 2000)
             }






function active(){
    document.getElementById("box__chat1").style.display = "block"

}
console.log(lola__lola, in1, wrapper1);

