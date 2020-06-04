import { GridSize } from "./settings.js";

export const GetRandomGridPosition = () => {
    return {
        X: Math.floor(Math.random() * GridSize) + 1,
        Y: Math.floor(Math.random() * GridSize) + 1
    }
}