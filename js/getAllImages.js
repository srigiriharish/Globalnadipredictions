var folder = "images/content/gallery";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".gallery").append( "<img style='cursor: pointer;' class='col-md-4 col-sm-6 col-xs-12 image-file' data-original='"+ folder + "/" + val +"' src='"+ folder + "/" + val +"'>" );
            } 
        });
        $('.gallery').viewer();
    }
});

