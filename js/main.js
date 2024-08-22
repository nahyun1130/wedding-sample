function dday() {
    // dday
    const today = new Date();
    const dday = new Date("2024-11-30");
    const timeDifference = dday.getTime() - today.getTime();
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let resultText = "";
    if (dayDifference > 0) {
        resultText = `-${dayDifference}`;
    } else if (dayDifference === 0) {
        resultText = "today";
    } else {
        resultText = `${Math.abs(dayDifference)}`;
    }

    document.getElementById("dday").textContent = resultText;
}
dday();

$(function(){
    //snow
    const wrap = document.querySelector('.wrap');
    if (wrap) {
      for (let i = 0; i < 200; i++) {
        const snow = document.createElement("div");
        snow.className = "snow";
        snow.style.opacity = Math.random();
      
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() * 20 - 10);
        const scale = Math.max(Math.random(), 0.5);
      
        const keyframe = [
          { transform: `translate(${startX}vw, 0) scale(${scale})` },
          { transform: `translate(${endX}vw, 100vh) scale(${scale})` },
        ];
        const option = {
          duration: 15000,
          easing: "linear",
          iterations: Infinity,
          delay: -Math.random() * 20 * 1000,
        };
        snow.animate(keyframe, option);
        wrap.appendChild(snow);
      }
    }

    // tab
    $('.way >*').click(function(){
        $('.way > *').removeClass('on')
        $(this).addClass('on')
        let idx = $(this).index()

        $('.waymenu>*').removeClass('on')
        $('.waymenu>*').eq(idx).addClass('on')
    })
})


// text copy
function copytext() {
    const text = document.getElementById("copy").textContent;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("복사하였습니다.");
        })
        .catch(err => {
            console.error("복사에 실패했습니다.", err);
        });
}


function copybank1() {
    const text = document.getElementById("bank1").textContent;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("복사하였습니다.");
        })
        .catch(err => {
            console.error("복사에 실패했습니다.", err);
        });
}

function copybank2() {
    const text = document.getElementById("bank2").textContent;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("복사하였습니다.");
        })
        .catch(err => {
            console.error("복사에 실패했습니다.", err);
        });
}


// share

document.getElementById('share').addEventListener('click', function(e) {
    e.preventDefault()
    if (navigator.share) {
        navigator.share({
            title: '푸우 ♥ 피글렛',
            text: 'wedding day',
            url: window.location.href
        })
    } else {
        alert('Share feature is not supported on this device.');
    }
});