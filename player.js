setTimeout(() => {$(".footerbar").css("height","50px");
$(document).ready(function(){
          $("#match-yaster").click(function(){
            $("#match-today").removeClass("open-match");
            $("#match-tom").removeClass("open-match");
            $("#matchtables-today").removeClass("openn");
            $("#matchtables-Tom").removeClass("openn");
            
            $("#match-yaster").addClass("open-match");
            $("#matchtables-yester").addClass("openn");
          });
          
          $("#match-today").click(function(){
          
            $("#match-yaster").removeClass("open-match");
            $("#match-tom").removeClass("open-match");
            $("#matchtables-yester").removeClass("openn");
            $("#matchtables-Tom").removeClass("openn");
            
            $("#match-today").addClass("open-match");
            $("#matchtables-today").addClass("openn");
          });
          
          $("#match-tom").click(function(){
          
            $("#match-yaster").removeClass("open-match");
            $("#match-today").removeClass("open-match");
            $("#matchtables-today").removeClass("openn");
            $("#matchtables-yester").removeClass("openn");
            
            $("#match-tom").addClass("open-match");
            $("#matchtables-Tom").addClass("openn");
          });
          $("#s1").click(function(){
            $("#s2").removeClass("o-s");
            $("#s3").removeClass("o-s");
            $("#se-2").removeClass("open");
            $("#se-3").removeClass("open");
            
            $("#s1").addClass("o-s");
            $("#se-1").addClass("open");
          });
          
          $("#s2").click(function(){
          
            $("#s1").removeClass("o-s");
            $("#s3").removeClass("o-s");
            $("#se-1").removeClass("open");
            $("#se-3").removeClass("open");
            
            $("#s2").addClass("o-s");
            $("#se-2").addClass("open");
          });
          
          $("#s3").click(function(){
          
            $("#s1").removeClass("o-s");
            $("#s2").removeClass("o-s");
            $("#se-1").removeClass("open");
            $("#se-2").removeClass("open");
            
            $("#s3").addClass("o-s");
            $("#se-3").addClass("open");
          });
        });
},150);
