import { GetSnakeSpeed, GetExpansionRate } from './settings.js';
import { Update as UpdateSnake, Draw as DrawSnake, OutsideGrid, GetSnakeHead, SnakeIntersection } from './snake.js'
import { Update as UpdateFood, Draw as DrawFood } from './food.js'
import { SetSnakeSpeed as SetSnakeSpeedSlider, SetExpansionRate as SetExpansionRateSlider } from './input.js';

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
    if (SecondsSinceLastRender < GetSnakeSpeed()) return;
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

SetSnakeSpeedSlider(GetSnakeSpeed());
SetExpansionRateSlider(GetExpansionRate());
