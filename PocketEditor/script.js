
            function _(e){
                return document.getElementById(e);
            }
                
                var image=document.getElementById("image");
                var grayscale=document.getElementById("grayscale");
                var grayscaleValue=document.getElementById("grayscale-value");
                var contrast=document.getElementById("contrast");
                var contrastValue=document.getElementById("contrast-value");
                var brightness=document.getElementById("brightness");
                var brightnessValue=document.getElementById("brightness-value");
                var saturation=document.getElementById("saturation");
                var saturationValue=document.getElementById("saturation-value");
                var hue=document.getElementById("hue");
                var hueValue=document.getElementById("hue-value");
                var blur=document.getElementById("blur");
                var blurValue=document.getElementById("blur-value");
                var canvas= document.getElementById("dataimage");
                var ctx=canvas.getContext('2d');
                
                updat(grayscale,grayscaleValue);
                updat(contrast,contrastValue);
                updat(brightness,brightnessValue);
                updat(saturation,saturationValue);
                updat(hue,hueValue);
                updat(blur,blurValue);
                
                grayscale.onchange=function(){
                    updat(grayscale,grayscaleValue);
                }
                
                contrast.onchange=function(){
                    updat(contrast,contrastValue);
                }
                
                brightness.onchange=function(){
                    updat(brightness,brightnessValue);
                }
                
                saturation.onchange=function(){
                    updat(saturation,saturationValue);
                }
                hue.onchange=function(){
                    updat(hue,hueValue);
                }
                blur.onchange=function(){
                    updat(blur,blurValue);
                }
                
                function updat(el,val){
                val.innerHTML=el.value;
                image.style.filter="grayscale("+grayscale.value+
                                    "%)contrast("+contrast.value+"%) brightness("+brightness.value+"%) saturate("+saturation.value+
                                    "%)hue-rotate("+hue.value*360/100+"deg) blur("+blur.value+"px);";
                
                }
                function upload(file){
                  var  nme=file.name;
                  if(file.type.match(/image\/*/)){  
	         	     var url = URL.createObjectURL(file);
	         	     var img=document.getElementById("image");
	         	     var menu=document.getElementById("menu");
	         	     menu.style.display="none";
	         	     img.src=url;
                  }else {
        	        alert("This file does not seem to be an image.");
                  }
                }
                
                function toggleMenu(){
                    var menu=document.getElementById("menu");
                    var dis=menu.getAttribute("style");
                    alert(dis);
                }
            
             
    