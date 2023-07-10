

var finalView = `
<div class="left__background">
    <div class="backgroundCircle">
        <div class="circle__content">
            <div class="circle__timer">
                <spam class="timer" id="timer">00:00</spam>
            </div>
        </div>
    </div>
    <div class="pomodoros">
        <div class="pomodoros__check">
            <div class="pomodoro__count">
                <div class="n__pomodoro active"></div>
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoro__count">
                <div class="n__pomodoro off"></div>
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoro__count">
                <div class="n__pomodoro off"></div>
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoro__count">
                <div class="n__pomodoro off"></div>
            </div>
        </div>
        <div class="pomodoros__check">
            <div class="pomodoro__count">
                <div class="n__pomodoro off"></div>
            </div>
        </div>
    </div>
    <div class="buttonsArea">
        <div class="buttonsArea__box">
            <button class="hide background__button" id="pause">
                <i class="icon fas fa-pause"></i>
            </button>
            <button class="background__button" id="play">
                <i class="icon fas fa-play"></i>
            </button>
            <button class="background__button" id="reset">
                <i class="icon fas fa-undo-alt"></i>
            </button>
        </div>
    </div>
</div>
`;

export default finalView