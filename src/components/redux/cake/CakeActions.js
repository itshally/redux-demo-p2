import { BUY_CAKE } from './CakeTypes'

/* ----------------------------- Define actions ----------------------------- */

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}