
export const fadeIn = (direction: string, delay: number) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}


export const fade = (direction = 'up', duration = 5, delay = 0) => {
    return {
        hidden: { opacity: 0, y: direction === 'up' ? 50 : -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: 'easeInOut' },
        },
    };
};
