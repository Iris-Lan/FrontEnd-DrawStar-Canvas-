function doFirst(){
    document.getElementById('theForm').onsubmit = drawStars;
    
    
    function drawStars(){
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);
        
        context.beginPath();
        for(let i = 0; i < 100; i++){
            let interval = i * 50;
            
            //水平線
            context.moveTo(0, interval);
            context.lineTo(canvas.width, interval);
            context.font='10px sans-serif';
            context.textAlign='left';
            context.textBaseline="alphabetic";
            context.fillText(interval, 0, interval);
            
            //垂直線
            context.moveTo(interval, 0);
            context.lineTo(interval, canvas.height);
            context.fillText(interval, interval, 10);
        }
        context.strokeStyle='rgba(0,0,0,0.3)';
        context.stroke();
        
        

        let num = document.getElementById('num').value;
        let outerRadius = document.getElementById('outerRadius').value;
        let innerRadius = document.getElementById('innerRadius').value;
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let perAngle = 1 / num * Math.PI;


    // //外圓
    //     context.beginPath();
    //     context.arc(x, y, outerRadius, 0, 2 * Math.PI);
    //     context.strokeStyle='red';
    //     context.stroke();
    // // 內圓
    //     context.beginPath();
    //     context.arc(x, y, innerRadius, 0, 2 * Math.PI);
    //     context.strokeStyle='red';
    //     context.stroke();
    // // 外圓45-315弧
    //     context.beginPath();
    //     context.arc(x, y, outerRadius, 1.75 * Math.PI, 0.25 * Math.PI, false);
    //     context.strokeStyle='blue';
    //     context.stroke();
        
    for(let i = 1; i < num * 2; i+=2){
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
            
            
            // let outerX = Math.cos(perAngle * i) * outerRadius + x;
            // let outerY = Math.sin(perAngle * i) * outerRadius + y;
            // let innerX1 = Math.cos(perAngle * (i+1)) * innerRadius + x;
            // let innerY1 = Math.sin(perAngle * (i+1)) * innerRadius + y;
            // let innerX2 = Math.cos(perAngle * (i-1)) * innerRadius + x;
            // let innerY2 = Math.sin(perAngle * (i-1)) * innerRadius + y;

            // context.moveTo(innerX1, innerY1);
            // context.lineTo(outerX, outerY);
            // context.moveTo(outerX, outerY);
            // context.lineTo(innerX2, innerY2);

    //畫座標
            context.font='13px sans-serif';
            context.textAlign='center';
            context.textBaseline='middle';
            context.fillText(`(${Math.round(outerX)}, ${Math.round(outerY)})`, outerX +13, outerY -5);
            context.font='bold 8px sans-serif';
            context.textAlign='center';
            context.fillText(`(${Math.round(innerX1)}, ${Math.round(innerY1)})`, innerX1, innerY1);   
            
        }

        return false;
    }
}

window.addEventListener('load', doFirst);