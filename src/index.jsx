import React from 'react';
import PropTypes from 'prop-types';

const DynamicImage = ({
  //   isPublic,
  noStyles,
  ariaHidden,
  srcProp,
  classProp,
  altProp,
  onClickProp,
  refProp,
  imageWidths
}) => {
  //   const handleImports = (newSrc, width, ext) => {
  //     const img = require(`${newSrc}_${width}${ext}`);
  //     return `${img} ${width}w`;
  //   };

  const defaultImageWidths = [400, 600, 800, 1100, 1500, 2000, 2500];

  const generateSrcSet = () => {
    const re = /(?:\.([^.]+))?$/;
    const widthArray = imageWidths || defaultImageWidths;
    const ext = re.exec(srcProp)[0];
    const newSrc = srcProp.replace(ext, '');
    console.log(newSrc);
    const srcSetArray = widthArray.map(width => {
      `${newSrc}_${width}${ext} ${width}w`;
    });
    return srcSetArray.join(', ');
  };

  return (
    <img
      style={noStyles ? {} : { maxWidth: '100%', maxHeight: '100%' }}
      src={srcProp}
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
  classProp: PropTypes.string,
  onClickProp: PropTypes.func,
  //   isPublic: PropTypes.bool,
  noStyles: PropTypes.bool,
  ariaHidden: PropTypes.bool,
  imageWidths: PropTypes.array,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType })
  ])
};

export default DynamicImage;
