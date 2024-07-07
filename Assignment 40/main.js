"use strict";
//Defining the make_album function:
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling tree functions and creating 3 variables with different values:
let album1 = make_album("Atif Aslam", "Album Title 1");
let album2 = make_album("Neha Kakkar", "Album Title 2");
// Calling a make_album function with third parameter:
let album3 = make_album("Ali Zafar", "Album Title 3", 10);
//Printing the variables:
console.log(album1);
console.log(album2);
console.log(album3);
