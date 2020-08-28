const string = `<style>
#pikachu {
  position: absolute;
  display:flex;
  width: 420px;
  height: 235px;
  left: 50%;
  top: 100px;
  margin-left: -210px;
  background: #ffe600;
}
.eye {
  width: 64px;
  height: 64px;
  border: 2px solid black;
  background: #2e2e2e;
  border-radius: 100%;
  position: absolute;
  margin-left: 32px;
}
.eye:after {
  width: 32px;
  height: 32px;
  border: 2px solid black;
  background: #fff;
  content: "";
  display: block;
  position: absolute;
  border-radius: 100%;
  margin-left: 4px;
  margin-top: 4px;
}
.eye.right {
  right: 32px;
}
.nose {
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 30px;
  margin-left: -10px;
  border-top: 10px solid black;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: center bottom;
  animation: wave 0.1s infinite linear;
}
.nose:before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 6px;
  top: -16px;
  left: -8px;
  background-color: black;
  border-top-left-radius: 10px 8px;
  border-top-right-radius: 10px 8px;
}

.ridiculousMouth {
  position: absolute;
  width: 228px;
  height: 190px;
  margin-top: 70px;
  margin-left: 88px;
  overflow: hidden;
}
.ridiculousMouth:after {
  content: "";
  display: block;
  position: absolute;
  width: 80px;
  height: 25px;
  background: #ffe600;
  border: 3px solid black;
  border-top: none;
  border-left: none;
  right: 25px;
  top: -6px;
  transform: rotate(25deg);
  box-shadow: 0 -10px 0 #ffe600, 5px -3px 0 #ffe600;
  border-bottom-right-radius: 60px 30px;
}
.ridiculousMouth:before {
  content: "";
  display: block;
  position: absolute;
  width: 80px;
  height: 25px;
  background: #ffe600;
  border: 3px solid black;
  border-top: none;
  border-right: none;
  left: 35px;
  top: -6px;
  transform: rotate(-25deg);
  border-bottom-left-radius: 60px 30px;
  box-shadow: 0 -10px 0 #ffe600, 5px -3px 0 #ffe600;
  z-index: 1;
}
.ridiculousMouth > div {
  position: absolute;
  background: #ff485f;
  width: 228px;
  height: 800px;
  border: 4px solid black;
  border-bottom-left-radius: 118px 800px;
  border-bottom-right-radius: 118px 800px;
  margin-top: -637px;
  overflow: hidden;
}
.ridiculousMouth > div:after {
  content: "";
  position: absolute;
  display: block;
  width: 130px;
  height: 100px;
  box-shadow: 0 -70px 0 #9b000a;
  bottom: 35px;
  margin-left: 49px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}
.cheek {
  width: 82px;
  height: 82px;
  border: 3px solid black;
  border-radius: 100%;
  position: absolute;
  margin-top: 110px;
  background: #f00;
}
.cheek.right {
  right: 0;
} </style>`;
const player = {
  init: {
    n: 0,
    time: 300,
    a: undefined,
  },
  run: () => {
    if (player.init.n === string.length) {
      clearInterval(player.init.a);
    }
    player.init.n += 1;
    display.innerText = string.substr(0, player.init.n);
    style.innerHTML = string.substr(0, player.init.n);
    display.scrollTop = 8999;
  },
  play: () => {
    player.stop();
    player.init.time = 300;
    player.init.a = setInterval(player.run, player.init.time);
  },
  stop: () => {
    clearInterval(player.init.a);
  },
  normal: () => {
    player.stop();
    player.init.time = 300;
    player.init.a = setInterval(player.run, player.init.time);
  },
  fast: () => {
    player.stop();
    player.init.time = 0;
    player.init.a = setInterval(player.run, player.init.time);
  },
  replay: () => {
    player.init.n = 0;
    player.init.time = 300;
    player.play();
  },
};
btnStop.onclick = player.stop;
btnPlay.onclick = player.play;
btnNormal.onclick = player.normal;
btnFast.onclick = player.fast;
btnReplay.onclick = player.replay;
