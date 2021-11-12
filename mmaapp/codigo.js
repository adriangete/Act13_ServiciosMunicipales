
alert("Inicio")
$(function() { 
    var map;
       var latlng = new google.maps.LatLng(49.241943, -122.889318);
    var myOptions = {
        zoom: 12,
        center: latlng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("widget"), myOptions); 
    


    
    $("#btnSave").click(function() { 
        alert("GRabo")
        html2canvas($("#widget")[0]).then((canvas) => {
            console.log("done ... ");
            bimg = canvas.toDataURL();
            console.log(bimg)


            
            $("img-out").append(canvas);
        });

      /*  html2canvas($("#widget"), {
            useCORS: true,
//                        allowTaint:true,
            onrendered: function(canvas) {
                alert("onrendered")
                theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image 
                Canvas2Image.saveAsPNG(canvas); 
                
                $("#img-out").append(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
        });*/
    });
}

 

); 