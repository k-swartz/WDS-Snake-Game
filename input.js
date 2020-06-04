import { GetSnakeSpeed, GetExpansionRate, SetSnakeSpeed as SetSnakeSpeedSettings, SetExpansionRate as SetExpansionRateSettings } from './settings.js';

let InputDirection = {
    X: 0,
    Y: 0
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (InputDirection.Y !== 0) break;
            InputDirection = {
                X: 0,
                Y: -1
            }
            break;
        case 'ArrowDown':
            if (InputDirection.Y !== 0) break;
            InputDirection = {
                X: 0,
                Y: 1
            }
            break;
        case 'ArrowLeft':
            if (InputDirection.X !== 0) break;
            InputDirection = {
                X: -1,
                Y: 0
            }
            break;
        case 'ArrowRight':
            if (InputDirection.X !== 0) break;
            InputDirection = {
                X: 1,
                Y: 0
            }
            break;
    }
});

document.getElementById('SnakeSpeed').addEventListener('change', (e) => {
    e.preventDefault();
    let NewSnakeSpeed = (21 - document.getElementById('SnakeSpeed').value) * .08;
    if (NewSnakeSpeed === GetSnakeSpeed()) return;
    SetSnakeSpeedSettings(NewSnakeSpeed);
});

document.getElementById('SnakeGrowth').addEventListener('change', (e) => {
    e.preventDefault();
    if (document.getElementById('SnakeGrowth').value === GetExpansionRate()) return;
    SetExpansionRateSettings(document.getElementById('SnakeGrowth').value);
});

export const GetInputDirection = () => {
    return InputDirection;
}

export const SetSnakeSpeed = (SnakeSpeed) => {
    document.getElementById('SnakeSpeed').value = 20-SnakeSpeed/.08;

}

export const SetExpansionRate = (ExpansionRate) => {
    document.getElementById('SnakeGrowth').value = ExpansionRate;
}