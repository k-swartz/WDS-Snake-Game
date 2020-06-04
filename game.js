import { SnakeSpeed, Update as UpdateSnake, Draw as DrawSnake, OutsideGrid, GetSnakeHead, SnakeIntersection } from './snake.js'
import { Update as UpdateFood, Draw as DrawFood } from './food.js'

let LastRenderTime = 0;
let GameOver = false;

const Main = (CurrentTime) => {
    if (GameOver) {
        if (confirm('You lose. Play again?')) {
            window.location = '/';
        }
        return;
    }
    window.requestAnimationFrame(Main);
    const SecondsSinceLastRender = (CurrentTime - LastRenderTime) / 1000;
    if (SecondsSinceLastRender < SnakeSpeed) return;
    LastRenderTime = CurrentTime;
    Update();
    Draw();
}

const Update = () => {
    UpdateSnake();
    UpdateFood();
    CheckDeath();
}

const Draw = () => {
    GameBoard.innerHTML = '';
    DrawSnake(document.getElementById('GameBoard'));
    DrawFood(document.getElementById('GameBoard'));
}

const CheckDeath = () => {
    if (OutsideGrid(GetSnakeHead()) || SnakeIntersection()) {
        GameOver = true;
    }
}

window.requestAnimationFrame(Main);
