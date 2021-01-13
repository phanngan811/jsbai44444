function kq(){
   var giaTriX = document.getElementById("x").value;
   var giaTriN = document.getElementById("n").value;

    giaTriN = parseInt(giaTriN);
    giaTriX = parseInt(giaTriX);



    var a=0
    var s = 0
    for(var i = 1; i<=giaTriN; i++){
        a =giaTriX **i;
        s += a;
    
    }



  
    document.getElementById("thongBao").innerHTML=s
}


document.getElementById("btnThongBao2").addEventListener("click", function(){
    var tong = 0;
    var n = 0;
    for(var i = 0; tong <10000; i++){
        tong += i;
        n=i-1
        
    }
    document.getElementById("thongBao2").innerHTML= n;
})







function kq3(){
    var giaiThuaN = document.getElementById("giaiThua").value;
    giaiThuaN = parseInt(giaiThuaN);


    var ketQua = 1;
    for(var j= 1; j<=giaiThuaN; j++){
        ketQua *= j;
    }

    document.getElementById("thongBao3").innerHTML="Giải thừa của " + giaiThuaN + " là: "+ ketQua;
}



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
