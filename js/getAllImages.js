var folder = "images/content/gallery";

$.ajax({
    url : folder,
    success: function (data) {
        alert('Success');
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery").append( "<img class='col-md-4 col-sm-6 col-xs-12 image-file' src='"+ folder + "/" + val +"'>" );
            } 
        });
    }
});