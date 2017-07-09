// JavaScript Document
<!--Script for wrong-answer effect-->
var i = 1;
var x = 1;
var k = 0;
var end=0;
function fadetimer() {
    var ElementOpacity;
    if (x < 20) {
        document.getElementById("divone").style.display = 'block';
      }
   if (x >= 20) {
        x = 0;}
        document.getElementById("divone").style.display = 'block';
       var object = document.getElementById("divone").style; 
    
    if (i > 20) {
        i=1;
            object.opacity = (i*10 / 100);
            object.MozOpacity = (i*10 / 100);
            object.KhtmlOpacity = (i*10 / 100);
            object.filter = "alpha(opacity=" + i*10 + ")";
        m=0;
    }
    if(i<=10) {
            object.opacity = (i*10 / 100);
            object.MozOpacity = (i*10 / 100);
            object.KhtmlOpacity = (i*10 / 100);
            object.filter = "alpha(opacity=" + i*10 + ")";
			if(i==10)
			{	
				if(k<=25)
					{
					i=i-1;	
					k++;
					}
				else
				k=0;
			}
    }
    else if  (i > 10){
    var m;    
        m = 20-i;
            object.opacity = (m*10 / 100);
            object.MozOpacity = (m*10 / 100);
            object.KhtmlOpacity = (m*10 / 100);
            object.filter = "alpha(opacity=" + m*10 + ")";
			if(m==0)
			end=1;
        }

    i++;
    x++;
	if(end!=1)
	   setTimeout("fadetimer()", 50);
}
<!--Script for menu effect-->
            $(function() {
                $('#navigation a').stop().animate({'marginLeft':'-30px'},800);

                $('#navigation > li').hover(
                    function () {
                        $('a',$(this)).stop().animate({'marginLeft':'-20px'},200);
                    },
                    function () {
                        $('a',$(this)).stop().animate({'marginLeft':'-30px'},200);
                    }
                );
            });

<!-- Script for Logout effect-->

$(document).ready(function(){
  $("logout ").click(function(){
		$("body").fadeTo(1000,0,function(){
			window.location='../logout.php';
		});

  });
});

