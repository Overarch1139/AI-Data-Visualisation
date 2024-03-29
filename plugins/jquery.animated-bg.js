/*!
 animated-bg jQuery plugin
 Author: Konstantinos Alexiou
 Date: 2018-01-02
 https://github.com/konalexiou/jquery-animated-bg
*/
$.fn.animatedbg = function(options) {

  var settings = $.extend({
      // These are the defaults.
      colors : ["#7dcbd4", "#fdc014", "#acd573", "#fff"],
      numParticles: 100
  }, options );

  var t = $(this);

  for(var i = 0; i < settings.numParticles; i++){
    $particle = $('body').find('div:first').clone();
    $particle.removeClass().empty().addClass('particle');
    $particle.css('position','absolute').css('border-radius','100%').css('opacity',0.3);
    $particle.css('background', settings.colors[Math.floor(Math.random()*settings.colors.length)]);
    $particle.css('left', `${Math.floor(Math.random() * 100)}vw`);
    $particle.css('top', `${Math.floor(Math.random() * 100)}vh`);
    $particle.css('transform', `scale(${Math.random()})` );
    var size = (Math.random()*30)+'px';
    $particle.css('width', size);
    $particle.css('height',size);
    $particle.css('z-index',1);
    t.append($particle);
  }

  // Keyframe animation
  $('.particle').each(function(i){
    let el = this;
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };
    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });

};
