import React from 'react';
import PropTypes from 'prop-types';

const DynamicImage = ({
  public,
  noStyles,
  ariaHidden,
  srcProp,
  classProp,
  altProp,
  onClickProp,
  refProp,
  imageWidths
}) => {
  const defaultImageWidths = [400, 600, 800, 1100, 1500, 2000, 2500];

  const generateSrcSet = () => {
    const widthArray = imageWidths || defaultImageWidths;
    return widthArray
      .map(width => {
        return public
          ? `${srcProp}_${width}.jpg ${width}w`
          : require(`${srcProp}_${width}.jpg ${width}w`);
      })
      .join(', ');
  };

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
  );
};

DynamicImage.propTypes = {
  srcProp: PropTypes.string.isRequired,
  altProp: PropTypes.string.isRequired,
  public: PropTypes.bool,
  noStyles: PropTypes.bool,
  ariaHidden: PropTypes.bool,
  classProp: PropTypes.string,
  onClickProp: PropTypes.func,
  imageWidths: PropTypes.array,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType })
  ])
};

export default DynamicImage;
