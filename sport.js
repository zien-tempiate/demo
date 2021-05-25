document.querySelector("#outer-wrapper").style.display= "block";
document.querySelector(".footerbar").style.height= "50px";
        document.querySelector("#match-yaster").onclick=function(){
        this.classList.add("open-match");
        document.querySelector("#match-today").classList.remove("open-match");
        document.querySelector("#match-tom").classList.remove("open-match");      
        document.querySelector("#matchtables-yester").classList.add("openn");
        document.querySelector("#matchtables-today").classList.remove("openn");
        document.querySelector("#matchtables-Tom").classList.remove("openn");
        };
        document.querySelector("#match-today").onclick=function(){
        this.classList.add("open-match");
        document.querySelector("#match-yaster").classList.remove("open-match");
        document.querySelector("#match-tom").classList.remove("open-match");      
        document.querySelector("#matchtables-yester").classList.remove("openn");
        document.querySelector("#matchtables-today").classList.add("openn");
        document.querySelector("#matchtables-Tom").classList.remove("openn");
        };
        document.querySelector("#match-tom").onclick=function(){
        this.classList.add("open-match");
        document.querySelector("#match-yaster").classList.remove("open-match");
        document.querySelector("#match-today").classList.remove("open-match");      
        document.querySelector("#matchtables-today").classList.remove("openn");
        document.querySelector("#matchtables-yester").classList.remove("openn");
        document.querySelector("#matchtables-Tom").classList.add("openn");
        };
