import { GridSize, GetExpansionRate } from "./settings.js";

import { GetRandomGridPosition } from "./grid.js";

import {
    OnSnake,
    ExpandSnake
} from './snake.js'

const GetRandomFoodPosition = () => {
    let NewFoodPosition;
    while (NewFoodPosition == null || OnSnake(NewFoodPosition)) {
        NewFoodPosition = GetRandomGridPosition();
    }
    return NewFoodPosition;
}


let Food = GetRandomFoodPosition();

export const Update = () => {
    if (OnSnake(Food)) {
        ExpandSnake(GetExpansionRate());
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
