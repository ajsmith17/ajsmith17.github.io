The WatchList

The WatchList is an app that uses the OMDb API and returns movie information to the user when given a movie title. The user can then either keep searching titles and learning about movies, or when they see one they like and wish to watch later they can add that movie to their "WatchList" on the side of the page. To remove an item from the list, simply click on the item's miniature movie poster. Local storage functionality coming soon...

Getting Started:

https://ajsmith17.github.io/omdb-app/

Open the link, and a modal with site instructions will pop up upon arrival.

Technologies and Approach:

The app uses a combination of HTML/CSS and Javascript, as well as jQuery. Data is transferred from the OMDb API to the page with an AJAX function. The specific data values are assigned to their corresponding DOM elements on the page whenever there is a form submission from the search bar. A variable taking input from the search bar will append the movie title to the end of the API URL, which will then access the required data. Most of the elements on the page are hidden until the form submission, upon which they become visible to display movie information.

For the most part, the page is loaded by just appending data from the object into the elements on the page, but a few special cases needed extra attention. A modal was designed to open one second after the page loads that contains instructions on how to use the app, but can also be opened and closed whenever needed with the 'Site Help' button. "If" statements ensure that no more than two countries and three genres are shown underneath the title in order to achieve consistency in formatting that area.

When the page is loaded, a '+' button is visibly located next to the movie title. When the user clicks the button, an event handler creates a new div inside the "WatchList" with a smaller copy of the movie poster as well as the movie's title next to it. Another event handler inside of this one will listen for a click on the small poster, which will remove the item from the list.

Unsolved Problems:

For now, figuring out local storage proved to be very difficult. I understood the concept of saving items as strings, but could not figure out how to get HTML from the WatchList item div to save to storage. I will come back to this project to update it once we have gone over those methods.

The mobile version of the site gave me issues due to the WatchList ignoring the overflow command I had used in the CSS and not allowing me to implement a horizontal scroll as I had intended. The list items would just resize smaller and smaller in order to display all of them inside the list at once. After what felt like forever trying to figure out why, and asking for help unsuccessfully, I decided to just flex-wrap the list items so they would display in rows stacked on top of each other.
