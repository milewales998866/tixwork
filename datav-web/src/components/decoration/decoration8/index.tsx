import React, {forwardRef, useMemo, useRef} from 'react'

import classnames from 'classnames'

import {fade} from '@jiaminghi/color'

import {useAutoResize, uuid} from '@/util'

import './style.less'
import _ from "lodash";

const defaultColor = ['rgba(3, 166, 224, 0.8)', 'rgba(3, 166, 224, 0.5)']

const svgWH = [100, 100]

const Decoration8 = forwardRef((props: DecorationProps & { reverse?: boolean, dur?: number }, ref) => {
    const {className, style, color = [], reverse = false, dur = 3,} = props
    const {width, height, domRef} = useAutoResize(ref)

    const polygonIdRef = useRef(`decoration-9-polygon-${uuid()}`)

    const mergedColor = useMemo(() => _.merge(_.cloneDeep(defaultColor), color || []), [color])

    const svgScale = useMemo(() => {
        const [w, h] = svgWH

        return [width / w, height / h]
    }, [width, height])

    const classNames = useMemo(() => classnames('dv-decoration-9', className), [
        className
    ])

    return (
        <div className={classNames} style={style} ref={domRef}>
            <svg
                width={`${svgWH[0]}px`}
                height={`${svgWH[1]}px`}
                style={{transform: `scale(${svgScale[0]},${svgScale[1]})`}}
            >
                <defs>
                    <polygon
                        id={polygonIdRef.current}
                        points='15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5'
                    />
                </defs>

                <circle
                    cx='50'
                    cy='50'
                    r='45'
                    fill='transparent'
                    stroke={mergedColor[1]}
                    strokeWidth='10'
                    strokeDasharray='80, 100, 30, 100'
                >
                    <animateTransform
                        attributeName='transform'
                        type='rotate'
                        values='0 50 50;360 50 50'
                        dur={`${dur}s`}
                        repeatCount='indefinite'
                    />
                </circle>

                <circle
                    cx='50'
                    cy='50'
                    r='45'
                    fill='transparent'
                    stroke={mergedColor[0]}
                    strokeWidth='6'
                    strokeDasharray='50, 66, 100, 66'
                >
                    <animateTransform
                        attributeName='transform'
                        type='rotate'
                        values='0 50 50;-360 50 50'
                        dur={`${dur}s`}
                        repeatCount='indefinite'
                    />
                </circle>

                <circle
                    cx='50'
                    cy='50'
                    r='38'
                    fill='transparent'
                    stroke={fade(mergedColor[1] || defaultColor[1], 30)}
                    strokeWidth='1'
                    strokeDasharray='5, 1'
                />
                {new Array(20).fill(0).map((foo, i) => (
                    <use
                        key={i}
                        href={`#${polygonIdRef.current}`}
                        stroke={mergedColor[1]}
                        fill={
                            Math.random() > 0.4 ? 'transparent' : mergedColor[0]
                        }
                    >
                        <animateTransform
                            attributeName='transform'
                            type='rotate'
                            values='0 50 50;360 50 50'
                            dur={`${dur}s`}
                            begin={`${i * dur / 20}s`}
                            repeatCount='indefinite'
                        />
                    </use>
                ))}

                <circle
                    cx='50'
                    cy='50'
                    r='26'
                    fill='transparent'
                    stroke={fade(mergedColor[1] || defaultColor[1], 30)}
                    strokeWidth='1'
                    strokeDasharray='5, 1'
                />
            </svg>

            {props.children}
        </div>
    )
})

export default Decoration8
