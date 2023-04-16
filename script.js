$(document).ready(function(){

    var API_KEY = "AIzaSyDKZpTW1Sfjj59YXcbr18pDlpU2cpSv0-Y"
    
    var video = ''

 
    $("#form").submit(function(event) {
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY,search,1000000)
    })

    function videoSearch(key,search,maxResults) {

    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,(data) => {
        console.log(data)

        data.items.forEach(item => {
            video =`<iframe width="300" height="150" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe> `
            $("#videos").append(video);


        });

    })

    }
})