var canv;
function takeshot() {
          
     if ($(".name-input").val()==="") {
return          
     }
          let div =document.getElementById('photo');
          html2canvas(div).then(
               function (canvas) {
                    $("#output").empty(); 
                    $(canvas).addClass("w-100")
                    $("#output").append(canvas);
                    $('#exampleModal').modal('show');
         
                    var canv = canvas.toDataURL().replace("data:image/png;base64,", "");


                    $(".download").on("click", function () {
     
                         downloadBase64File('image/png', canv, 'image');
                         
})
               })
     }
      function downloadBase64File(contentType, base64Data, fileName){
        const linkSource = `data:${contentType};base64,${base64Data}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
}
$(function() {  
     $(".the-name").draggable();  
     $(".newtexttoappend").draggable();  
   });     

function cloneEl() {
     
}

// function showModal() {
//           $("#output").empty();  

//      $("#show-btn").toggleClass("active")
     
//           let clonedimg = $("#photo").clone();
//           $(clonedimg).addClass("col-12")
//           $("#output").append(clonedimg);   
//           }
     


     let name = document.createElement("p");
     $(".the-name").append(name); 
     $(".name-input").on("keyup", function () {
          name.innerText = $(".name-input").val();
          if ($(".name-input").val()!=="") {
               $("#show-btn").removeClass("disabled");
               
          }
     
     })

function addNew() {
     let newImgName = $(".new-img-name").val();
     let newImgEx = $(".new-img-ex").val();


     if (newImgName && newImgEx !== " ") {
          $(".addnew").removeClass("disabled");
          $(".tobecup").attr("src", "./images/" + newImgName + "."+ newImgEx );   
     }
}



function addNewText() {

     $(".newtexttoappend").css("display", "block");
    
        
     
     
}

$(function() {  
    
   
   }); 







