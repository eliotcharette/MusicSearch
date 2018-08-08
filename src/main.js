//logic for user interface

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SongSearch } from './music.js';
// b9946a85ea45ab4e6bec13e86e525e7b
$(document).ready(function() {
  $('#search').click(function() {
    let artist = $('#artist').val();
    let track = $('#track').val();
    let lyricWord = $('#lyric').val();


    let song = new SongSearch();
    let promise = song.findSong(artist, track, lyricWord);

    promise.then(function(response) {
      let main = JSON.parse(response);
      console.dir(main);
      console.log(main);
      for (let i = 0; i < main.message.body.track_list.length; i++) {
        $('.title').prepend(`<li>${artist}: ${main.message.body.track_list[i].track.track_name}</li>`);
      }
    });
  });
});
