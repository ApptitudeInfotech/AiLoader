import React from "react";
import PropTypes from 'prop-types';


import AiOverlay from "@aiui/ai-overlay";



/**
 * Minimal Loader / Spinner React Component.
 *
 * @author [Apptitude Infotech](https://github.com/ApptitudeInfotech)
 */
const AiLoader = (props) => {
    const { opened = false, size = 32, color = '#212121', overlayColor = '#e0e0e0', style = {}, ...rest } = props;
    let elemRef = React.useRef(null);

    React.useEffect(() => {
        if (opened) {
            const divElem = elemRef.current.querySelector('div.ai-loader-id');
            let rotate360 = [
                { transform: 'rotate(360deg)' }
            ];
            let slowInfinite = {
                easing: 'linear',
                duration: 2000,
                iterations: Infinity
            };
            divElem.animate(rotate360, slowInfinite);
        }
    }, [opened]);

    return (
        <React.Fragment  >
            <AiOverlay opened={opened} color={overlayColor} />
            <div style={{
                cursor: `auto`,
                visibility: `hidden`,
                overflow: `hidden`,
                userSelect: `none`,
                display: `block`,
                position: `fixed`,
                zIndex: 1011,
                top: `calc(50% - ${size / 2}px)`,
                left: `calc(50% - ${size / 2}px)`,
                visibility: (opened ? `visible` : `hidden`),
                ...style,
            }}
                {...rest}
                ref={elemRef}
            >
                {
                    opened
                        ?
                        <div style={{
                            border: `4px solid #f3f3f3`,
                            borderRadius: `50%`,
                            borderTop: `4px solid ${color}`,
                            borderBottom: `4px solid ${color}`,
                            width: `${size - 4}px`,
                            height: `${size - 4}px`
                        }}
                            className="ai-loader-id"
                        />
                        :
                        null
                }
            </div>
        </React.Fragment>
    );
};

AiLoader.propTypes = {
    /**
   * If true, the loader is open   
   */
    opened: PropTypes.bool,
    /**
    * Loader size
    */
    size: PropTypes.number,
    /**
    * Loader Color
    */
    color: PropTypes.string,
    /**
   * Overlay Color
   */
    overlayColor: PropTypes.string,
    /**
     *@ignore
     */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

AiLoader.defaultProps = {
    opened: false,
    size: 32,
    color: "#212121",
    overlayColor: "#e0e0e0",
};

export default AiLoader;