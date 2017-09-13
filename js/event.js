$( document ).ready(function() {
  // console.log("hi");

  $(function($) {
    var tocken = "208472281.5fcab57.43259b6dbf59454bafdf405c6e1b2bb3"; /* Access Tocken 입력 */
    var count = "4";
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + tocken + "&count=" + count,
      success: function(response) {
        // console.log(response.data[0]);
         var insta = '<div id="myCarousel" class="carousel slide" data-ride="carousel" >';
        if ( response.data.length > 0 ) {
          console.log(response.data[0])
          insta += '<ol class="carousel-indicators">';
          insta +="<li data-target=''#myCarousel' data-slide-to='0' class='active' ></li>"
          for(var i = 1; i < response.data.length; i++) {

            insta +="<li data-target=''#myCarousel' data-slide-to="+i+"></li>"
          }

          insta += "</ol><div class='carousel-inner'>";
          var first_text = response.data[0];
          if(first_text.caption){
            insta +='<div class="item active"><a href="'+response.data[0].link+'"><img src="' +response.data[0].images.standard_resolution.url+'" alt="image"><div class="carousel-caption"><p>'+response.data[0].caption.text+'</p></div></div>';

          }else{
            insta +='<div class="item active"><a href="'+response.data[0].link+'"><img src="' +response.data[0].images.standard_resolution.url+'" alt="image"><div class="carousel-caption"><p></p></div></div>';
            console.log("caption is null");
          }

          for(var j = 1; j < response.data.length; j++) {
            var text = response.data[j];
            if(text.caption){
              // console.log(j + "has value");
              insta +='<div class="item"><a href="'+response.data[j].link+'"><img src="' +response.data[j].images.standard_resolution.url+'" alt="image"><div class="carousel-caption"><p>'+response.data[j].caption.text+'</p></div></div>';

            }else{
              // console.log(j + "has no value");
              insta +='<div class="item"><a href="'+response.data[j].link+'"><img src="' +response.data[j].images.standard_resolution.url+'" alt="image"><div class="carousel-caption"><p></p></div></div>';

            }

          }

          insta += "</div>";
          insta += "<a class='left carousel-control' href='#myCarousel' data-slide='prev'><span class='glyphicon glyphicon-chevron-left'></span><span class='sr-only'>Previous</span></a>";
          insta += "<a class='right carousel-control' href='#myCarousel' data-slide='next'><span class='glyphicon glyphicon-chevron-right'></span><span class='sr-only'>Next</span></a>";
          insta += "</div>"

          $("#instaPics").append(insta);

        }
        $(".insta-box").hover(function(){
          $(this).find(".caption-layer").css({"backbround" : "rgba(255,255,255,0.7)", "display":"block"});
        }, function(){
          $(this).find(".caption-layer").css({"display":"none"});
        });
      },
      error: function(xhr, ajaxOptions, thrownError){
        alert(xhr.status);
        alert(thrownError);
      }

    });
  });
});
