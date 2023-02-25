import React from 'react'
import classNames from 'classnames'

export interface CountdownItemPropArg {
    value: number | string
    show?: boolean
    showLabel?: boolean
    label?: string
    className?: string
}

export const CountdownItem: React.FC<CountdownItemPropArg> = ({ value, show, showLabel, label, className }) => {
    if (!show) return <></>
    return (
        <div className={classNames('countdown-col', className)}>
            <span className="countdown-value" data-text="99">
                {value}
            </span>
            {showLabel && label && <span className="countdown-label">{label}</span>}
        </div>
    )
}

CountdownItem.displayName = 'CountdownItem'
