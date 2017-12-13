function snoww(x) {
  var canvas = document.createElement('canvas');
  canvas.id = 'snow';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var flakeArray = [];
  canvas.style.pointerEvents = 'none';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.zIndex = '90001';
  function canvasResize() {
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
  }
  canvasResize();
  window.onresize = function() {
    canvasResize();
  };
  var MyMath = Math;
  setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var random = MyMath.random();
    var distance = 0.7 * random;
    flake = {};
    flake.x = 2 * canvas.width * MyMath.random() - 0.5 * canvas.width;
    flake.y = MyMath.random();
    flake.velX = 0.5 - 0.6*MyMath.random();
    flake.velY = 0.9 + 0.1 * MyMath.random();
    flake.radius = MyMath.pow(5 * random, 2) / 5;
    flake.update = function() {
      var t = this;
      t.x += t.velX;
      t.y += t.velY;
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.radius, 0,5 * MyMath.PI, !1);
      ctx.fillStyle = '#eaeaea';
      ctx.fill();
    };
    flakeArray.push(flake);
    for (b = 0; b < flakeArray.length; b++) {
      flakeArray[b].y > canvas.height
        ? flakeArray.splice(b, 1)
        : flakeArray[b].update();
    }
  }, x);
}
snoww(0);
snoww(10);