
function kq4(){
    var divTag = document.getElementsByTagName("div");
    for (var i = 0; i<=divTag.length; i++){
        if((i+1)%2 == 0){
            divTag[i].style.background="red"
        }else{
            divTag[i].style.background="green"
        }
    }
}
