let user = prompt("usernameni kiriting...")
let rep_name = prompt("repository nomini kiriting...")

let url = `https://github.com/${user  }/${rep_name}`
if(user && rep_name){
    window.open(url, "_self")
}else{
    alert("Iltimos ma`lumotlarni to`liq kiriting!!")
}
