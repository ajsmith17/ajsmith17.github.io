$(() => {
  // =========> FINDING A MOVIE <=========
  $('.info').css('visibility', 'hidden');

  $('form').on('submit', (event)=>{

    event.preventDefault();
    
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput,
    }).then(
      (data) => {
        if (data.Response == "False") {
          alert(data.Error);
          return;
        } else {
          $('.info').css('visibility', 'visible');
        };
        $("#title").html(data.Title + " (" + data.Year + ")");
        let country = data.Country;
        const newCountry = country.split(",", 2);
        if (newCountry[1] == undefined) {
          country = newCountry[0];
        } else {
          country = newCountry[0] + ','+ newCountry[1];
        };
        $("#released").html(data.Released + " (" + country + ")");
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
  // ===========> (end) FINDING MOVIE <===========

  // ==========> ADDING MOVIE TO LIST <============
  $('#addButton').on('click', (event) => {
    event.preventDefault();
    let $listItem = $('<div class="listItem">');
    let $listLeft = $('<div class="listLeft">').css({'width': '50%'});
    let $listRight = $('<div class="listRight">').css({'width': '50%'});
    let selection = $('#title').text();
    let listPic = $('#poster').clone();
    listPic.css({'width': '80%', 'border': '2px solid white', 'cursor': 'pointer'});
    $listLeft.append(listPic);
    $listRight.text(selection);
    $listRight.css('padding-right', '5px');
    $listItem.append($listLeft);
    $listItem.append($listRight);
    $('.listContainer').append($listItem);

    // const saveObj = {
    //   savedMovie: $listItem.innerHTML
    // }
    //
    // let storage = JSON.stringify(saveObj);
    // console.log(storage);
    // debugger;
    // // console.log($listItem.html());
    // localStorage.setItem('savedMovie', storage);
    // console.log(localStorage);

    $('.listLeft').on('click', (event) => {
      event.preventDefault();
      $(event.currentTarget).parent().remove();
    });

  });
  // ============> (end) ADDING MOVIE TO LIST <=============

  // ===========> MODAL <===============

  const $openButton = $('#openModal');
  const $modal = $('#modal');
  const $close = $('#close');

  const openModal = () => {
    $modal.css('display', 'block');
  };

  const closeModal = () => {
    $modal.css('display', 'none');
  };

  $openButton.on('click', openModal)
  $close.on('click', closeModal)
  setTimeout(openModal, 1000);

});
