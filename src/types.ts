export namespace CountdownTypes {
    export type Status = 'START' | 'COMPLETED'

    export interface CountdownTimerOptionals {
        className?: string
        day?: string
        hour?: string
        minute?: string
        second?: string
        classNameCol?: string
    }

    export interface CountdownTimeProp {
        days: string | number
        hours: string | number
        minutes: string | number
        seconds: string | number
    }
}
