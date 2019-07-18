$(() => {

  $('form').on('submit', (event)=>{
    event.preventDefault();
    const userInput = $('input[type="text"]').val();

    $.ajax({
      url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput,
    }).then(
      (data) => {
        $("#title").html(data.Title);
        const imgUrl = data.Poster;
        $("#poster").attr('src', imgUrl);
        $("#year").html(data.Year);
        $("#rated").html(data.Rated);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  });



})
