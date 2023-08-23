var rightView = [`
<div class="right__background">
    <div class="box">
        <div class="box__head">
            <div class="icon">
                <img src="../gallery/tomate.png" alt="tomato" title="Happy Tomato" width="50px">
            </div>
            <div class="box__title">
                <h2>Pomodoro Technique</h2>
            </div>
            <div class="icon">
                <img src="../gallery/reloj-contorno-circular.png" alt="timer" title="Timer" width="45px">
            </div>
        </div>
        <div class="box__info">
            <p>
                The Pomodoro Technique was developed in the late 1980s by then university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.
            </p>
        </div>
    </div>
    <div class="steps__title">
        <h2>Steps</h2>
    </div>
    <div class="box__steps">
        <div class="step" id="step_1">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        1
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    Get a to-do list and a timer.
                </p>
            </div>
        </div>
        <div class="step" id="step_2">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        2
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    Set your timer for 25 minutes and focus 
                </p>
            </div>
        </div>
        <div class="step" id="step_3">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        3
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    When your session ends, mark off one pomodoro
                </p>
            </div>
        </div>
        <div class="step" id="step_4">
            <div class="step__number">
                <div class="step__number--circle">
                    <h2>
                        4
                    </h2>
                </div>
            </div>
            <div class="step__text">
                <p>
                    Then enjoy a five-minute break.
                </p>
            </div>
        </div>
    </div>
</div>
<div class="right__todo__background hide">
    <div class="box__todo">
        <div class="box__todo__head">
            <div class="box__todo__title">
                <h2>To do</h2>
            </div>
            <form class="input__bar" id="new__todo__form">
                
                <input 
                    type="text" 
                    name="content"
                    id="content"
                    placeholder="Write down your next task..."
                    class="input__bar__box" />
                
                    <button class="icon__todo" type="submit">
                    <p>add</p><i class="fas fa-plus"></i>
                </button>
            </form>
        </div>
    </div>
    <div class="items__scroll">
        <div class="box__items" id="todoList">
            <!-- <div class="item">
                <div class="item__description">
                    <label>description</label>
                </div>
                <button class="item__edit">
                    <div class="item__button" id="bt_edit">
                        <p>edit</p><i class="fas fa-pencil"></i>
                    </div>
                </button>
                <button class="item__delete">
                    <div class="item__button" id="bt_delete">
                        <p>delete</p><i class="fas fa-trash-alt"></i>
                    </div>
                </button>
            </div> -->
        </div>
    </div>
</div>
`]

export default rightView