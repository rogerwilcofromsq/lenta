window.LentaNOD = {};

(function() {
  var LentaNOD = window.LentaNOD;
  
  var BASE_URL = "http://rusnod.github.io/lenta";


  LentaNOD.init = function(options) {
    options = options || {};
    options.corner = options.corner || "top_right";

    var position_css = function() {
      var css;

      switch(options.corner) {
        case "top_left":
          css = "left: 0; top: 0;";
          break;
        /*
        case "top_right":
          css = "right: 0; top: 0;";
          break;
        */

        // FIXME: выводится на первом экране, а не в подвале
        /*
        case "bottom_right":
          css = "right: 0; bottom: 0;";
          break;
        case "bottom_left":
          css = "left: 0; bottom: 0;";
          break;
        */
        default:
          css = "right: 0; top: 0;";
          break;
      }

      return css;
    }

    var image_src = function() {
      var src;

      switch(options.corner) {
        /*
        case "top_left":
          src = "lenta_tl.png";
          break;
          */
        case "top_right":
          src = "lenta_tr.png";
          break;
        /*
        case "bottom_right":
          src = "lenta_br.png";
          break;
        case "bottom_left":
          src = "lenta_bl.png";
          break;
        */
        default:
          src = "lenta_tr.png";
          break;
      }

      return src;
    }
    
    var image_map = function() {
      var map;
      map = '<map id="imgmap201423191423" name="imgmap201423191423"><area shape="poly" alt="" title="Национально-освободительное движение" coords="0,0,138,139,138,86,55,0" href="http://rusnod.ru/top3.html" target="_blank" /></map>';
      
      return map;
    }

    document.write("<span style='position: absolute; "+position_css()+"'><img usemap='#imgmap201423191423' src='"+BASE_URL+"/images/"+image_src()+"' style='border-style: none' /></span>" + image_map());
  };
})();
