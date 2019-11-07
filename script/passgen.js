function PassGen(){
    var characters = ["a", "b", "c", "d", "e", "f", "g", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "%", "&"];
    password = ""
    for(var i=0; i<12; i++){
        rand = Math.round(Math.random() *characters.length)
        password = password.concat(characters[rand]);
    }

    document.getElementById("outPut2").innerHTML = password;
    while(document.getElementById("outPut2").innerHTML.includes('undefined')){
        PassGen(); 
    }


}