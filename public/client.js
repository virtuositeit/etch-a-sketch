var COLOUR =  '#505050';
var radius = 3;
var socket = io();
var previousPosition=[0,0];
var offset=[0,0];
var ctx = Sketch.create();
var firstMessage=true;

    ctx.container = document.getElementById( 'container' ),
    offset=[ctx.width/2,ctx.height/2];
    ctx.autoclear= false;

    ctx.retina='auto';

    ctx.setup = function() { console.log( 'setup' );}

    ctx.keydown= function() { if ( ctx.keys.C ) ctx.clear();}

    socket.on('reset', function() {
      firstMessage=true;
      ctx.clear();
    });
  //  console.log('width'+ctx.width);
  //  console.log('height'+ctx.height);
    socket.on('new-pos', function(newPosition) {

      newPosition[0] = map(newPosition[0],0,1023,0,ctx.width);
      newPosition[1] = map(newPosition[1],0,1023,0,ctx.height);

      if(firstMessage){
        firstMessage=false;
        previousPosition=newPosition;
      }else{
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = ctx.strokeStyle = COLOUR;
        ctx.lineWidth = radius;
        ctx.beginPath();
        ctx.moveTo( previousPosition[0], previousPosition[1] );
        ctx.lineTo( newPosition[0], newPosition[1]);
        ctx.stroke();
        previousPosition=newPosition;
       }
    });
