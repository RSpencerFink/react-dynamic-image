import React from 'react'
import PropTypes from 'prop-types'

const DynamicImage = ({
    noStyles,
    ariaHidden,
    srcProp,
    classProp,
    altProp,
    onClickProp,
    refProp,
    imageWidths,
}) => {
    const defaultImageWidths = [
        `400w`,
        `600w`,
        `800w`,
        `1100w`,
        `1500w`,
        `2000w`,
        `2500w`,
    ]

    const generateSrcSet = () => {
        const widthArray = imageWidths || defaultImageWidths
        return widthArray
            .map(width => {
                return `${srcProp}_${width}.jpg ${width}`
            })
            .join(', ')
    }

    return (
        <img
            style={noStyles ? {} : { maxWidth: '100%', maxHeight: '100%' }}
            src={`${srcProp}.jpg`}
            srcSet={generateSrcSet()}
            alt={altProp}
            ref={refProp || null}
            className={`responsive-img${classProp ? ` ${classProp}` : ''}`}
            onClick={onClickProp}
            aria-hidden={ariaHidden ? true : false}
        />
    )
}

Image.propTypes = {
    srcProp: PropTypes.string.isRequired,
    altProp: PropTypes.string.isRequired,
    noStyles: PropTypes.bool,
    ariaHidden: PropTypes.bool,
    classProp: PropTypes.string,
    onClickProp: PropTypes.func,
    imageWidths: PropTypes.array,
    refProp: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.elementType }),
    ]),
}

export default DynamicImage
