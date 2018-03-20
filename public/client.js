var COLOURS = [ '#E3EB64', '#A7EBCA', '#FFFFFF', '#D8EBA7', '#868E80' ];
var radius = 3;
var socket = io();
var previousPosition=[0,0];
var ctx = Sketch.create();

    ctx.container = document.getElementById( 'container' ),

    ctx.autoclear= false;

    ctx.retina='auto';

    ctx.setup = function() { console.log( 'setup' );}

    ctx.keydown= function() { if ( ctx.keys.C ) ctx.clear();}

    socket.on('new-pos', function(newPosition) {
          console.log(newPosition);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.fillStyle = ctx.strokeStyle = COLOURS[0];
          ctx.lineWidth = radius;
          ctx.beginPath();
          ctx.moveTo( previousPosition[0], previousPosition[0] );
          ctx.lineTo( newPosition[0], newPosition[1] );
          ctx.stroke();
          previousPosition=newPosition;
    });
