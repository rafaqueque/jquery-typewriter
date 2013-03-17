(function($){

  $.fn.typewriter = function(customOptions) {
    
    /* Default and extended options */
    var defaults = {
      delay: 10,
      playSound: false,
      soundFilePath: '',
    };
    var options = $.extend({}, defaults, customOptions);

    
    return this.each(function(){

      var element = $(this);
      var string = $(element).text().trim();


      /* init */
      element.html('');


      /* function to append letter by letter */
      function _writeLetter(element,i) 
      {
        if (options.playSound)
          _playSound(options.soundFilePath);

        element.append(string[i]);

        if (string.length > i) 
        {
          i++;

          setTimeout(function(){
            _writeLetter(element,i);
          }, options.delay);
        }
      }


      /* function to play sound */ 
      function _playSound(path)
      {
        var audioElement = $('<audio></audio>');
        audioElement.attr('name', 'typewriter-sound');
        audioElement.attr('src', path);
        audioElement.attr('autoplay', 'autoplay');

        $(audioElement).load(function(){
          audioElement.play();
        });
      }


      /* run */ 
      _writeLetter(element, 0);
    });

  }

})(jQuery);