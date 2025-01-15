import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";


const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); 
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        <>
           <div className="-z-10">
           {init && (
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: "transparant",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 0.8,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 120,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "square",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
           </div>
        </>
    );
};

export default ParticlesBackground;
