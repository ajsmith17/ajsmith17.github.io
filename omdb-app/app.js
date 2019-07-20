$(() => {
  $('.info').css('visibility', 'hidden');

  $('form').on('submit', (event)=>{

    event.preventDefault();
    // $('.info').css('visibility', 'visible');
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput,
    }).then(
      (data) => {
        if (data.Response == "False") {
          alert(data.Error);
          return;
        } else {
          $('.info').css('visibility', 'visible');
        };
        $("#title").html(data.Title + " (" + data.Year + ")");
        $("#released").html(data.Released + " (" + data.Country + ")");
        $("#rated").html(data.Rated);
        $("#runtime").html(data.Runtime);
        const genre = data.Genre;
        const newGenre = genre.split(",", 3);
        if (newGenre[1] == undefined) {
          $("#genre").html(newGenre[0]);
        } else if (newGenre[2] == undefined) {
          $("#genre").html(newGenre[0] + ','+ newGenre[1]);
        } else {
          $("#genre").html(newGenre[0] + ','+ newGenre[1]+','+ newGenre[2]);
        };
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

      },
      (error) => {
        alert(error);
      }
    );

  });

  $('button').on('click', (event) => {
    event.preventDefault();
    let $listItem = $('<div class="listItem">');
    let $listLeft = $('<div class="listLeft">').css({'width': '50%'});
    let $listRight = $('<div class="listRight">').css({'width': '50%'});
    let selection = $('#title').text();
    let listPic = $('#poster').clone();
    listPic.css({'width': '100px'});
    $listLeft.append(listPic);
    $listRight.text(selection);
    $listItem.append($listLeft);
    $listItem.append($listRight);
    $('.list').append($listItem);
    $('.listLeft').on('click', (event) => {
      event.preventDefault();
      $(event.currentTarget).parent().remove();
    });

  });

  // $('.listLeft').on('click', (event) => {
  //   event.preventDefault();
  //   $(event.currentTarget).parent().remove();
  // });

});
