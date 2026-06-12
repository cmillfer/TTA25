import React from 'react';

export const ToeTagIcon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img 
        src="/images/Imgone.png"
        alt="Toe Tag Awards Logo" 
        {...props}
        // Enforce aspect ratio and prevent squishing
        style={{ height: props.className?.includes('h-8') ? '2rem' : undefined, width: 'auto' }}
    />
);