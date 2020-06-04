import {
    OnSnake,
    ExpandSnake
} from './snake.js'

export const GridSize = 21;

const ExpansionRate = 2;

const GetRandomFoodPosition = () => {
    let NewFoodPosition;
    while (NewFoodPosition == null || OnSnake(NewFoodPosition)) {
        NewFoodPosition = GetRandomGridPosition();
    }
    return NewFoodPosition;
}


const GetRandomGridPosition = () => {
    return {
        X: Math.floor(Math.random() * GridSize) + 1,
        Y: Math.floor(Math.random() * GridSize) + 1
    }
}

let Food = GetRandomFoodPosition();

export const Update = () => {
    if (OnSnake(Food)) {
        ExpandSnake(ExpansionRate);
        Food = GetRandomFoodPosition();
    }
}

export const Draw = (GameBoard) => {
    const SnakeElement = document.createElement('div');
    SnakeElement.classList.add('Food');
    SnakeElement.style.gridRowStart = Food.Y;
    SnakeElement.style.gridColumnStart = Food.X;
    GameBoard.appendChild(SnakeElement);
}
