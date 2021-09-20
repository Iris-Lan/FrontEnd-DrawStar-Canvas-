function doFirst(){
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    
    for(let i = 0; i <= 100; i++){
        let interval = i * 50;
        
        //水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);

        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke();

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let outerRadius = 200;
    let innerRadius = 60;
    let perAngle = 1 / 8 * Math.PI;

    for(let i = 1; i < 8 * 2; i+=2){
        context.beginPath();
        let outerX = Math.cos(perAngle * (i+1)) * outerRadius + x;
        let outerY = Math.sin(perAngle * (i+1)) * outerRadius + y;
        let innerX1 = Math.cos(perAngle * i) * innerRadius + x;
        let innerY1 = Math.sin(perAngle * i) * innerRadius + y;
        let innerX2 = Math.cos(perAngle * (i+2)) * innerRadius + x;
        let innerY2 = Math.sin(perAngle * (i+2)) * innerRadius + y;
        
        context.moveTo(outerX, outerY);
        context.lineTo(innerX1, innerY1);
        context.moveTo(outerX, outerY);
        context.lineTo(innerX2, innerY2);
        context.strokeStyle='green';
        context.stroke();

        context.font='13px sans-serif';
        context.textAlign='center';
        context.textBaseline='middle';
        context.fillText(`(${Math.round(outerX)}, ${Math.round(outerY)})`, outerX +13, outerY -5);
        context.font='bold 10px sans-serif';
        context.textAlign='center';
        context.fillText(`(${Math.round(innerX1)}, ${Math.round(innerY1)})`, innerX1, innerY1);   
    }

}

window.addEventListener('load', doFirst);