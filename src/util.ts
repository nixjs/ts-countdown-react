import { CountdownTypes } from './types'

export const getPad = (n: number | string): string => {
    return (n < 10 ? '0' : '') + n
}

export const getCountdown = (target: number): CountdownTypes.CountdownTimeProp => {
    const currentDate = new Date().getTime() / 1000
    let secondsLeft = target - currentDate

    const days = getPad(parseInt(String(secondsLeft / 86400), 10))
    secondsLeft = secondsLeft % 86400

    const hours = getPad(parseInt(String(secondsLeft / 3600), 10))
    secondsLeft = secondsLeft % 3600

    const minutes = getPad(parseInt(String(secondsLeft / 60), 10))
    const seconds = getPad(parseInt(String(secondsLeft % 60), 10))

    return {
        days,
        hours,
        minutes,
        seconds
    }
}
