$(() => {
  $('.info').css('visibility', 'hidden');

  $('form').on('submit', (event)=>{

    event.preventDefault();
    $('.info').css('visibility', 'visible');
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput,
    }).then(
      (data) => {
        $("#title").html(data.Title + " (" + data.Year + ")");
        $("#released").html(data.Released + " (" + data.Country + ")");
        $("#rated").html(data.Rated);
        $("#runtime").html(data.Runtime);
        const genre = data.Genre;
        const newGenre = genre.split(",", 3);
        $("#genre").html(newGenre[0] + ','+ newGenre[1]+','+ newGenre[2]);
        const imgUrl = data.Poster;
        $("#poster").attr('src', imgUrl);
        $('#IMDb').html(data.Ratings[0].Value);
        $('#rotten').html(data.Ratings[1].Value);
        $('#meta').html(data.Ratings[2].Value);
        $("#director").html(data.Director);
        $("#writers").html(data.Writer);
        $("#actors").html(data.Actors);
        $("#plot").html(data.Plot);
        console.log(data);
        if (data.Response == "False") {
          alert(data.Error);
        }
      },
      (error) => {
        alert(error);
      }
    );
  });



})
