

var contPesq=1;
if( window.innerWidth<1080 && window.innerWidth>789 ){
    var menuButons=document.getElementsByClassName("Menu-but");
    for(var i=0;i<menuButons.length;i++){
        
        menuButons[i].style.fontSize="11px";
         menuButons[i].style.padding="12px 4px";
         menuButons[i].style.marginLeft="4px;"
    }
}



//slide inicial
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    
    $(x[slideIndex-1]).fadeIn(1000);
    
    setTimeout(carousel, 5000); // Change image every 6 seconds
}


//verify if the user is logged in


if(localStorage.getItem("logged")=="true"){
    
    document.getElementById("cadastro-cont-desapear").style.display="none";
     document.getElementById("logado-cont-aparecer").style.display="block";
     document.getElementById("img-log").src="imgs/logout.png";
    
    
    if(localStorage.getItem("loginAtual")=="igor-matheus"){
            
                     var x=document.getElementsByClassName("my-name");
                    for(var i=0;i<x.length;i++){
                        x[i].innerHTML="Igor Matheus de Souza";
                    }

                   document.getElementById("perfil-img").src="imgs/igor-perfil.png";
                    document.getElementById("perfil-img2").src="imgs/igor-perfil.png";




        document.getElementsByClassName("my-data")[0].innerHTML="14/11/1996";
        document.getElementsByClassName("my-tel")[0].innerHTML="99134-6450";
        document.getElementsByClassName("my-email")[0].innerHTML="igorm1411@gmail.com";
        document.getElementsByClassName("my-inter")[0].innerHTML="Computação gráfica";
        document.getElementsByClassName("my-cidade")[0].innerHTML="Mesquita-RJ";
        document.getElementsByClassName("my-hob")[0].innerHTML="Musicas, jogos e filmes.";
         document.getElementsByClassName("my-cep")[0].innerHTML="26551-271";
        document.getElementsByClassName("my-login")[0].innerHTML="igor-matheus";


 }
    else if (localStorage.getItem("loginAtual")=="joao-porto"){
              var x=document.getElementsByClassName("my-name");
            for(var i=0;i<x.length;i++){
                x[i].innerHTML="João Pedro Porto";
            }
           document.getElementById("perfil-img").src="imgs/joao-perfil.png";
            document.getElementById("perfil-img2").src="imgs/joao-perfil.png";
        
             document.getElementsByClassName("my-data")[0].innerHTML="14/01/1999";
        document.getElementsByClassName("my-tel")[0].innerHTML="99134-6450";
        document.getElementsByClassName("my-email")[0].innerHTML="joaoPipoca@gmail.com";
        document.getElementsByClassName("my-inter")[0].innerHTML="Computação gráfica";
        document.getElementsByClassName("my-cidade")[0].innerHTML="Flamengo-Rj";
        document.getElementsByClassName("my-hob")[0].innerHTML="Pipoca, jogos e filmes.";
         document.getElementsByClassName("my-cep")[0].innerHTML="26551-271";
        document.getElementsByClassName("my-login")[0].innerHTML="joao-porto";
        
    }
    
    else{
            
        var x=document.getElementsByClassName("my-name");
            for(var i=0;i<x.length;i++){
                x[i].innerHTML=localStorage.getItem("4partnershipNome");
            }
            
            
            
document.getElementsByClassName("my-data")[0].innerHTML=localStorage.getItem("4partnershipData");
            
document.getElementsByClassName("my-tel")[0].innerHTML=localStorage.getItem("4partnershipTel");
            
document.getElementsByClassName("my-email")[0].innerHTML=localStorage.getItem("4partnershipEmail");
            
document.getElementsByClassName("my-inter")[0].innerHTML=localStorage.getItem("4partnershipInteresse");
            
document.getElementsByClassName("my-cidade")[0].innerHTML=localStorage.getItem("4partnershipCidade");
            
document.getElementsByClassName("my-hob")[0].innerHTML=localStorage.getItem("4partnershipInteresse");
 
document.getElementsByClassName("my-login")[0].innerHTML=localStorage.getItem("4partnershipLogin");
document.getElementsByClassName("my-cep")[0].innerHTML="26551-271";        
      
        document.getElementById("perfil-img").src="imgs/sem-perfil.png";
        document.getElementById("perfil-img2").src="imgs/sem-perfil.png";    
            
        
    }
    
    
    
    
    
}



//exit account

function FloginOut(){
    
    
    document.getElementById("cadastro-cont-desapear").style.display="block";
    localStorage.setItem("logged","false");  
    document.getElementById("logado-cont-aparecer").style.display="none";
    document.getElementById("img-log").src="imgs/login.png";
    $("#pesq-area").hide(0);
    
        }


//login(entrar no site)

    
   
    
function Flogin(){
    
    var login=document.getElementById("login").value;
    var senha=document.getElementById("senha").value;
    
    
if(login==localStorage.getItem("4partnershipLogin") && senha==localStorage.getItem("4partnershipSenha") || login=="igor-matheus" && senha=="cria" || login=="joao-porto" && senha=="cria"){
    
    localStorage.setItem("loginAtual",login);
    
    
    document.getElementById("img-log").src="imgs/logout.png";
     document.getElementById("cadastro-cont-desapear").style.display="none";
      document.getElementById("logado-cont-aparecer").style.display="block";   
        localStorage.setItem("logged","true");   
    
    if(login=="igor-matheus"){
            
                     var x=document.getElementsByClassName("my-name");
                    for(var i=0;i<x.length;i++){
                        x[i].innerHTML="Igor Matheus de Souza";
                    }

                   document.getElementById("perfil-img").src="imgs/igor-perfil.png";
                    document.getElementById("perfil-img2").src="imgs/igor-perfil.png";




        document.getElementsByClassName("my-data")[0].innerHTML="14/11/1996";
        document.getElementsByClassName("my-tel")[0].innerHTML="99134-6450";
        document.getElementsByClassName("my-email")[0].innerHTML="igorm1411@gmail.com";
        document.getElementsByClassName("my-inter")[0].innerHTML=localStorage.getItem("Computação gráfica");
        document.getElementsByClassName("my-cidade")[0].innerHTML="Mesquita-RJ";
        document.getElementsByClassName("my-hob")[0].innerHTML="Musicas, jogos e filmes.";
        document.getElementsByClassName("my-cep")[0].innerHTML="26551-271"; 
         document.getElementsByClassName("my-cep")[0].innerHTML="26551-271";
        document.getElementsByClassName("my-login")[0].innerHTML="igor-matheus";
 }
        
        
else if (login=="joao-porto"){
              var x=document.getElementsByClassName("my-name");
            for(var i=0;i<x.length;i++){
                x[i].innerHTML="João Pedro Porto";
            }
    
            document.getElementById("perfil-img").src="imgs/joao-perfil.png";
                    document.getElementById("perfil-img2").src="imgs/joao-perfil.png";
           
             document.getElementsByClassName("my-data")[0].innerHTML="14/01/1999";
        document.getElementsByClassName("my-tel")[0].innerHTML="99134-6450";
        document.getElementsByClassName("my-email")[0].innerHTML="joaoPipoca@gmail.com";
        document.getElementsByClassName("my-inter")[0].innerHTML="Computação gráfica";
        document.getElementsByClassName("my-cidade")[0].innerHTML="Flamengo-Rj";
        document.getElementsByClassName("my-hob")[0].innerHTML="Pipoca, jogos e filmes.";
         document.getElementsByClassName("my-cep")[0].innerHTML="26551-271";
        document.getElementsByClassName("my-login")[0].innerHTML="joao-porto";
   }
        
    
  else{
            
        var x=document.getElementsByClassName("my-name");
            for(var i=0;i<x.length;i++){
                x[i].innerHTML=localStorage.getItem("4partnershipNome");
            }
            
            
            
document.getElementsByClassName("my-data")[0].innerHTML=localStorage.getItem("4partnershipData");
            
document.getElementsByClassName("my-tel")[0].innerHTML=localStorage.getItem("4partnershipTel");
            
document.getElementsByClassName("my-email")[0].innerHTML=localStorage.getItem("4partnershipEmail");
            
document.getElementsByClassName("my-inter")[0].innerHTML=localStorage.getItem("4partnershipInteresse");
            
document.getElementsByClassName("my-cidade")[0].innerHTML=localStorage.getItem("4partnershipCidade");
            
document.getElementsByClassName("my-hob")[0].innerHTML=localStorage.getItem("4partnershipInteresse");
 
document.getElementsByClassName("my-login")[0].innerHTML=localStorage.getItem("4partnershipLogin");  
      
        document.getElementById("perfil-img").src="imgs/sem-perfil.png";
        document.getElementById("perfil-img2").src="imgs/sem-perfil.png";    
            
        
    
        
        
        
    document.getElementById("cadastro-cont-desapear").style.display="none";
        
}
    
    
    
    
    
}

    
}
//validação do formulário cadastro
function Fcadastrar(){
   
   var nome=document.getElementById("cNome").value;
    
	var interesse=document.getElementById("cInteresse").value;
    var data=document.getElementById("cData").value;
    var tel=document.getElementById("ctel").value;
    var email=document.getElementById("email").value;
    var cidade=document.getElementById("cidade").value;
     var cep=document.getElementById("cep").value;
    
    var myDiv=document.getElementById("divTextError");
    myDiv.removeChild(myDiv.firstChild);

    
    var nlogin=document.getElementById("novoLogin").value;
    var nsenha=document.getElementById("novaSenha").value;
    
    
    
       
        
     
	  
	
    
    
    
    
	if(!nome){
       
        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa preeencher o nome.");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
    
    if(data.length < 7 ||data.length >8 ){
       
        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa preeencher a data adequadamente.");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
     
    if(email.indexOf(" ") >= 0 || email.indexOf("@") < 1 || email.indexOf("@")+1 == email.length || email.indexOf(".")< 0){

        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa preeencher o E-mail corretamente.");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
    
    if(tel.length < 8 || tel.length > 11 ){
  
        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa preeencher o telefone adequadamente.");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
    
    
    
    
    if(!cidade){
       
        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa preeencher a cidade.");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
    
    if(cep.length < 5 || cep.length > 9 ){
       
        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa preeencher o CEP adequadamente.");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
    
    
    
    
    
    
    
    if(!interesse){
       
        var node = document.createElement("P");
        var textnode = document.createTextNode("Você precisa a área de interesse");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
            return
    }
   
    
    
    
    else{
        
         localStorage.setItem("4partnershipLogin",nlogin);
         localStorage.setItem("4partnershipSenha",nsenha);
        
        
         localStorage.setItem("4partnershipNome",nome);
         localStorage.setItem("4partnershipData",data);
        localStorage.setItem("4partnershipTel",tel);
         localStorage.setItem("4partnershipEmail",email); localStorage.setItem("4partnershipInteresse",interesse);
         localStorage.setItem("4partnershipCidade",nsenha);
        
        
        
        
        var node = document.createElement("P");
        var textnode = document.createTextNode("Cadastro realizado com Sucesso!");
        node.appendChild(textnode);
        document.getElementById("divTextError").appendChild(node);
        document.getElementById("divTextError").firstElementChild.style.color="green";
        return
        
    }    

	
}

//toggle 







function mymsg (){
        
            window.location.href="minhaPagina.html";

}


$(document).ready(function mymsg (){
        
    $("#mytoggle-message").click(function(){
            $("#home-toggle").hide(0);
            $("#posts-toggle").hide(0);
            $("#mensagens-toggle").fadeIn(1500);
            document.getElementById("mytoggle-message-li").className="active";
            document.getElementById("mytoggle-home-li").className=" ";
            document.getElementById("mytoggle-posts-li").className=" ";
        });
});
    

        
$("#mytoggle-home").click(function(){
            $("#mensagens-toggle").hide(0);
            $("#posts-toggle").hide(0);
            $("#home-toggle").fadeIn(1500);
            document.getElementById("mytoggle-home-li").className="active";
            document.getElementById("mytoggle-message-li").className=" ";
            document.getElementById("mytoggle-posts-li").className=" ";
        });




$("#mytoggle-posts").click(function(){
            $("#mensagens-toggle").hide(0);
            $("#home-toggle").hide(0);
            $("#posts-toggle").fadeIn(1500);
            document.getElementById("mytoggle-home-li").className=" ";
            document.getElementById("mytoggle-message-li").className=" ";
            document.getElementById("mytoggle-posts-li").className="active";
        });


// Pesquisar 



function pesquisar(){
    
    var pesquisa=document.getElementById("pesquisar").value;
    if(pesquisa==""){
        return
    }
    if(contPesq>3){
        contPesq=1
    }
    
   if(contPesq==1){
     $("#pesq-area2").hide(0);
       $("#pesq-area3").hide(0); 
    $("#pesq-area1").fadeIn(1200);
   }
     
   if(contPesq==2){
       $("#pesq-area1").hide(0);
       $("#pesq-area3").hide(0); 
    $("#pesq-area2").fadeIn(1200);
   }
    if(contPesq==3){
       $("#pesq-area1").hide(0);
        $("#pesq-area2").hide(0); 
    $("#pesq-area3").fadeIn(1200);
   }
    
    
    
    var x=document.getElementsByClassName("topic");
    
        for(var i=0;i < x.length;i++){
            
            x[i].innerHTML=pesquisa;
            
        }
    
    contPesq++;
    
}


//postar


function postar(){
   
    
    
    var titulo=$("#titulo").val();
    var text=$("#input-post").val();
    
    
    if(titulo!="" && text!=""){
     document.getElementById("postar-id").style.display="none";
    $("#postado").fadeIn(1000);
    $("#titulo-p").text(titulo);
    
    $("#post-p").text(text);
    
    
    $("#nome-p").text("Nome: "+localStorage.getItem("loginAtual"));
    $("#cidade-p").text("Cidade: "+localStorage.getItem("4partnershipCidade"));
    
    }
}



//selecionar e implantar todos os topicos




function topic(){
    
    
    
    var x=document.getElementsByClassName("topic");
    
    if(localStorage.getItem("4partnershipInteresse").length>2){
        var p=localStorage.getItem("4partnershipInteresse");
    }
    else{
        p="Computação grafica";
    }
    
    
    for(var i=0;i < x.length;i++){
            
            x[i].innerHTML=p;
            
        }
    
    
    
    
    
}




//mudar de página



function mudarPagina(){
    
    window.location.href="paginaBuscar.html";
    
    
}