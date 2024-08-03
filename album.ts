// Exercise 39: album



// Function to create an album object
function make_album(artist: string, title: string, tracks?: number) {
    // Create the album object
    let album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title
    };

    // Add the number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three album objects
let album1 = make_album('The Beatles', 'Abbey Road');
let album2 = make_album('Adele', '25', 11);
let album3 = make_album('Taylor Swift', '1989', 13);

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);

