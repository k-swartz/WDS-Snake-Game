export const GridSize = 21;
let SnakeSpeed = .34;
let ExpansionRate = 2;

export const GetSnakeSpeed = () => {
    if (window.localStorage.getItem('SnakeSpeed')) return window.localStorage.getItem('SnakeSpeed');
    return SnakeSpeed;
}

export const SetSnakeSpeed = (NewSpeed) => {
    SnakeSpeed = NewSpeed;
    window.localStorage.setItem('SnakeSpeed', NewSpeed);
    return SnakeSpeed;
}

export const GetExpansionRate = () => {
    if (window.localStorage.getItem('ExpansionRate')) return window.localStorage.getItem('ExpansionRate');
    return ExpansionRate;
}

export const SetExpansionRate = (NewRate) => {
    ExpansionRate = NewRate;
    window.localStorage.setItem('ExpansionRate', NewRate);
    return ExpansionRate;
}
