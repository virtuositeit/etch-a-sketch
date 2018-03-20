var COLOUR =  '#505050';
var radius = 3;
var socket = io();
var previousPosition=[0,0];
var offset=[0,0];
var ctx = Sketch.create();
var firstMessage=true;

    ctx.container = document.getElementById( 'container' ),

    ctx.autoclear= false;

    ctx.retina='auto';

    ctx.setup = function() { console.log( 'setup' );}

    ctx.keydown= function() { if ( ctx.keys.C ) ctx.clear();}

    socket.on('reset', function() {
      firstMessage=true;
      ctx.clear();
    });
    console.log(ctx.width);

    socket.on('new-pos', function(newPosition) {

      newPosition[0] = newPosition[0].map(0,1023,con,);
      newPosition[1] = newPosition[1].map(0,1023,,);
      if(firstMessage){
        firstMessage=false;
        offset=newPosition;


      }else{
      console.log("start at "+newPosition);
         //while(working){console.log("waiting");}

          console.log('from'+ previousPosition+'to' +newPosition);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.fillStyle = ctx.strokeStyle = COLOUR;
          ctx.lineWidth = radius;
          ctx.beginPath();
          ctx.moveTo( previousPosition[0]-offset[0], previousPosition[1]-offset[1] );
          ctx.lineTo( newPosition[0]-offset[0], newPosition[1] -offset[1]);
          ctx.stroke();
          previousPosition=newPosition;
       }
    });
