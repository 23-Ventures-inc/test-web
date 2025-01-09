import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../styles/styles.css';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

export default function Process() {
    interface InfoItem {
        title: string;
        description: string;

      }
    const info: InfoItem[] = [
        { title: 'Step 1', description: 'Submit your video editing request.' },
        { title: 'Step 2', description: 'We review and estimate your project.' },
        { title: 'Step 3', description: 'Our editors start working on it.' },
        { title: 'Step 4', description: 'Receive the final edited video.'},
        { title: 'Step 5', description: 'Request revisions if needed.' },
        { title: 'Step 6', description: 'Enjoy your professionally edited video!' },
    ];

    const customizedMarker = () => (
        <span className="flex w-[15px] h-[15px] align-items-center justify-content-center text-white border-circle z-10 shadow-1 rounded-full bg-white py-2"></span>
    );

    const customizedContent = (info: InfoItem, index: number) => (
        <motion.div
            variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.9 }}
        >
            <Card title={info.title} className="border border-[#1f5a46] px-4 py-7 rounded-2xl my-2">
                <p className="py-2 px-4 my-2">{info.description}</p>
                <Button label="Read more" className="button" />
            </Card>
        </motion.div>
    );

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="lg:px-[200px] w-full flex justify-center flex-col my-10"
        >
            <h2
                className="mt-5 text-center text-2xl md:text-[45px] md:leading-[60px] font-bold text-transparent bg-gradient-to-r from-white to-slate-600 bg-clip-text py-4"
                data-scroll
                data-scroll-speed="0.5"
            >
                Our Process
            </h2>
            <div className="card my-4 px-[20px] relative">

                <Timeline
                    value={info}
                    align="alternate"
                    className="timeline"
                    marker={customizedMarker}
                    content={(data, index) => customizedContent(data, index)}
                />
            </div>
        </motion.div>
    );
}
