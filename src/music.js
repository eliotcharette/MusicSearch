export class SongSearch{
  findSong(artist, track, lyricWord) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.musixmatch.com/ws/1.1/track.search?page_size=10&page=1&q_artist=${artist}&q_track=${track}&q_lyrics=${lyricWord}&s_track_rating=desc&apikey=b9946a85ea45ab4e6bec13e86e525e7b`;



      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
