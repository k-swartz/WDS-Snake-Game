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

export const GetInputDirection = () => {
    return InputDirection;
}