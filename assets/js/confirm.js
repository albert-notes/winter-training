function confirm(){
    var flag= document.getElementById("flag").value;
    if(flag!=""){
        $.ajax({
                type:'get',
                cache: false,
                timeout: 10000,
                url: "https://script.google.com/macros/s/AKfycbz39gSkvshgQjeYQ8RNiZi-XZCNH7bXJgf60TXp2cnT3JCNsGPp/exec",
                data:  {
                    'password' : flag
                },
                datatype:'json',
                success: function(respond){
                    if(respond=="fail"){
                        document.getElementById("flag").value="";
                        alert("Your answer is WRONG!!!");
                    }
                    else{
                        respond= respond.split(",");
                        location.href= respond[1];
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
                        alert("很抱歉　傳送逾時\n將自動重新傳送資料");
                        confirm();
                }
        });
    }
}