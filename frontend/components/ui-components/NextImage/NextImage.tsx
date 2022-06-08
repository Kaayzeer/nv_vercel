import React from "react";
import NextImage from "next/image";
import styles from "./NextImage.module.css";

type Props = {
  width: string;
  maxWidth: string;
};

const Image = ({ width, maxWidth, ...rest }: Props) => {
  /*   let widths = {};

    width ? widths['width'] = width : "100%";
    maxWidth ? widths['maxWidth']  = maxWidth : "100%";

    return (
        <div className={styles.imageContainer} style={widths}>
            <NextImage src={''} className={styles.image} {...rest} />
        </div>
    ); */
};

export default Image;
