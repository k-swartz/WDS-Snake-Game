export const SnakeSpeed = .34;
const SnakeBody = [{
    X: 13,
    Y: 12
}];
export const GridSize = 21;


import {
    GetInputDirection
} from "./input.js";

export const Update = () => {
    const InputDirection = GetInputDirection();
    for (let i = SnakeBody.length - 2; i >= 0; i--) {
        SnakeBody[i + 1] = {
            ...SnakeBody[i]
        };
    }
    SnakeBody[0].X += InputDirection.X;
    SnakeBody[0].Y += InputDirection.Y;
}

export const Draw = (GameBoard) => {
    GameBoard.innerHTML = '';
    SnakeBody.forEach((Position) => {
        const SnakeElement = document.createElement('div');
        SnakeElement.classList.add('Snake');
        SnakeElement.style.gridRowStart = Position.Y;
        SnakeElement.style.gridColumnStart = Position.X;
        GameBoard.appendChild(SnakeElement);
    });
}

export const ExpandSnake = (ExpansionRate) => {
    for (let i = 0; i < ExpansionRate; i++) {
        SnakeBody.push({
            ...SnakeBody[SnakeBody.length - 1]
        });
    }
}

export const OnSnake = (OnPosition, {
    IgnoreHead = false
} = {}) => {
    return SnakeBody.some((Location, Index) => {
        if (IgnoreHead && Index === 0) return false;
        if (IgnoreHead && Index > 0 && SnakeBody[Index].X === SnakeBody[Index - 1].X && SnakeBody[Index].Y === SnakeBody[Index - 1].Y) return false;
        return (Location.X === OnPosition.X && Location.Y === OnPosition.Y);
    });
}

export const OutsideGrid = (Position) => {
    return (Position.X < 1 || Position.X > GridSize || Position.Y < 1 || Position.Y > GridSize);
}

export const GetSnakeHead = () => {
    return SnakeBody[0];
}

export const SnakeIntersection = () => {
    return OnSnake(SnakeBody[0], {
        IgnoreHead: true
    });
}