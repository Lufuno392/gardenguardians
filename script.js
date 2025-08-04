document.addEventListener('DOMContentLoaded', function() {
    const leftArm = document.querySelector('.arm.left');
    const rightArm = document.querySelector('.arm.right');
    const leftLeg = document.querySelector('.leg.left');
    const rightLeg = document.querySelector('.leg.right');
    const runner = document.querySelector('.runner');
    const scene = document.querySelector('.scene');
    
    let position = 20;
    let armAngle = 0;
    let legAngle = 0;
    let armDirection = 1;
    let legDirection = 1;
    
    // Create some clouds
    for (let i = 0; i < 5; i++) {
        createCloud();
    }
    
    function createCloud() {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        
        const size = Math.random() * 50 + 50;
        const yPos = Math.random() * 200;
        const xPos = Math.random() * window.innerWidth;
        
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.6}px`;
        cloud.style.top = `${yPos}px`;
        cloud.style.left = `${xPos}px`;
        
        scene.appendChild(cloud);
        
        // Animate cloud
        setInterval(() => {
            const currentLeft = parseFloat(cloud.style.left);
            cloud.style.left = `${currentLeft + 0.2}px`;
            
            if (currentLeft > window.innerWidth) {
                cloud.style.left = `-${size}px`;
            }
        }, 50);
    }
    
    function animate() {
        // Move runner forward
        position += 1;
        if (position > 100) {
            position = 0;
        }
        runner.style.left = `${position}%`;
        
        // Arm swinging animation
        armAngle += 5 * armDirection;
        if (Math.abs(armAngle) > 45) {
            armDirection *= -1;
        }
        leftArm.style.transform = `rotate(${armAngle}deg)`;
        rightArm.style.transform = `rotate(${-armAngle}deg)`;
        
        // Leg kicking animation
        legAngle += 7 * legDirection;
        if (Math.abs(legAngle) > 30) {
            legDirection *= -1;
        }
        leftLeg.style.transform = `rotate(${-legAngle}deg)`;
        rightLeg.style.transform = `rotate(${legAngle}deg)`;
        
        requestAnimationFrame(animate);
    }
    
    animate();
});