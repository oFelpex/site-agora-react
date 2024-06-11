function nextImage() {
    let count = 2;
    let interval;
    const slider = document.getElementById("slider");
    function startInterval() {
        interval = setInterval(function() {
            document.getElementById("radio" + count).checked = true;
            count++;
            count = count > 4 ? 1 : count;
        }, 8000);
    }
    slider.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });
    slider.addEventListener('mouseleave', () => {
        startInterval();
    });
    startInterval();
}
function closeNavBar() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('orangeBarNavigationBar');
        if (window.scrollY >= 800) {
            navbar.style.position = 'absolute';
            navbar.style.top = '800px';
        } else {
            navbar.style.position = 'fixed';
            navbar.style.top = '0px';
        }
    });
}
nextImage();
closeNavBar();
function openOrCloseMenu(open) {
    const menu = document.querySelector('.menu');
    const overlayForMenu = document.querySelector('.overlayShadowForMenu');
    menu.style.left = open ? '0' : '-200px';
    overlayForMenu.style.pointerEvents = open ? 'all' : 'none';
    overlayForMenu.style.opacity = open ? 1 : 0;
}
function changeButtonMenu(button) {
    button.classList.toggle("change");
    openOrCloseMenu(button.classList.contains("change"));
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            button.classList.remove('change');
            openOrCloseMenu(false);
        }
    });
        
}
function closeMenuOverlayClicked() {
    const button = document.querySelector('.buttonMenu');
    changeButtonMenu(button);
}
function copyAgoraNumberOrEmail(copyThis) {
    let copyWhat;
    const alertWhat = document.querySelector('.AgoraAlertContainer h2');
    const clicked = document.createElement('input');
    switch(copyThis) {
        case 1:
            copyWhat = '(84) 3342-2257';
            alertWhat.textContent = 'Número copiado!';
            break;
        case 2:
            copyWhat = 'institutoagora2015@gmail.com';
            alertWhat.textContent = 'E-mail copiado!';
            break;
    }
    clicked.value = copyWhat;
    document.body.appendChild(clicked);
    clicked.select();
    document.execCommand('copy');
    document.body.removeChild(clicked);

    startEndAnimationAlert();
}
function startEndAnimationAlert() {
    const startAnimationForAlert = document.querySelector('.AgoraAlertContainer');
    let timeOutId;
    
    startAnimationForAlert.style.animation = 'none';
    setTimeout(function() {
        startAnimationForAlert.style.animation = 'AgoraAlert 1s ease-in-out 1 normal forwards, AgoraAlert 1s ease-in-out 3s 1 reverse forwards';
        clearTimeout(timeOutId);
    }, 10);
    timeOutId = setTimeout(function() {
        startAnimationForAlert.style.animation = 'none';
    }, 4000);
}