import React, { useRef } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../styles/styles.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeIn } from './variants';

export default function Process() {
    interface InfoItem {
        step: string,
        title: string;
        description: string;
    }

    const info: InfoItem[] = [
        { step: 'Step 1', title: 'Apply with a form', description: 'The first step involves filling out a detailed application form to assess the startup idea, vision, and potential. This form helps us identify passionate entrepreneurs with innovative ideas and aligns them with the program’s goals.' },
        { step: 'Step 2', title: 'Screening ( Phaze 1 )', description: 'A preliminary evaluation of applicants, focusing on the core idea, feasibility, and problem-solving potential. This phase filters candidates who demonstrate clarity and commitment toward their vision.' },
        { step: 'Step 3', title: 'Screening ( Phaze 2 ) ', description: 'A deeper dive into shortlisted applicants, assessing business scalability, market understanding, and the entrepreneur’s capabilities. This phase ensures only high-potential startups move forward.' },
        { step: 'Step 4', title: 'Orientation program ( goal, purpose, numbers, included in program ) )  ,The story behind ( Finding the why )and sharing culture ', description: 'Introducing participants to the program’s goals, structure, and expectations. This phase covers program objectives, success metrics, and resources provided to support participants throughout the journey.' },
        { step: 'Step 5', title: 'Sharing their own stories ( Hardships and the wins )', description: 'Entrepreneurs share their personal journeys, including challenges and victories, to build trust and resilience. This process encourages authenticity and establishes a collaborative community.     ' },
        { step: 'Step 6', title: 'Bi Weekly workshops for 20 weeks straight', description: 'A series of 20 workshops over 20 weeks, offering actionable insights into various aspects of business growth. These sessions include expert guidance on marketing, operations, funding, and scaling strategies.' },
        { step: 'Step 7', title: 'Milestone Tracking and progress Evalutation', description: 'Startups set clear milestones and track progress against them. Regular evaluations ensure accountability, helping entrepreneurs stay on course and refine strategies when needed.' },
        { step: 'Step 8', title: 'Feedback and mentor support', description: 'Access to dedicated mentors who provide tailored feedback and solutions. Entrepreneurs receive guidance to overcome hurdles and achieve their short- and long-term goals.' },
        { step: 'Step 9', title: 'Elimination and Bonus Tasks', description: 'Regular evaluations may result in eliminations for those unable to meet expectations. Bonus tasks challenge entrepreneurs to think innovatively and showcase their potential.' },
        { step: 'Step 10', title: 'Valuation and Pitch Deck ( Exception Agencies )', description: 'Participants refine their business valuation models and craft compelling pitch decks. This phase ensures they are investor-ready and have a clear understanding of their business worth (excludes agencies).' },
        { step: 'Step 11', title: 'Investors Presentation and Pitch day', description: 'Startups present their refined pitches to a panel of investors, showcasing their growth and future potential. This is the culmination of the program and a gateway to funding opportunities.' },
        { step: 'Step 12', title: 'Continued Suppport ( If startups hit their milestones )', description: 'For startups that achieve their milestones, we provide ongoing guidance and resources. This ensures sustainable growth and success beyond the program, fostering long-term partnerships.' },
    ];

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const markerPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const customizedMarker = () => (
        <motion.div
            style={{ top: markerPosition }}
            className="absolute left-[50%] w-[3px] bg-green-500 h-[200px] transform -translate-x-1/2 -z-1 transition duration-200"
        />

    );


    const customizedMarkerDot = () => (
        <div className="flex justify-center items-center bg-[#042924] p-3 rounded-full">
            <div className="w-[15px] h-[15px] bg-white border  border-green-500 rounded-full"></div>
        </div>
    );

    const customizedContent = (info: InfoItem) => (
        <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.9 }}
            className="pb-10"
        >
            <Card title={info.title} className="rounded-2xl my-2">
                <span className="px-4 font-medium text-green-600">{info.step}</span>
                <h2 className="text-white px-4">{info.title}</h2>
                <p className="py-2 px-4 my-2 text-white">{info.description}</p>
                <Button label="Read more" className="button" />
            </Card>
        </motion.div>
    );

    return (
        <div ref={sectionRef} className="relative">
            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
                }}
                className="lg:px-[200px] w-full flex justify-center flex-col my-14"
            >
                <h2
                    className="mt-5 text-center text-2xl md:text-[45px] md:leading-[60px] font-bold text-transparent bg-gradient-to-r from-white to-slate-600 bg-clip-text py-4"
                    data-scroll
                    data-scroll-speed="0.5"
                >
                    How it works ?
                </h2>

                <div className="card my-4 px-[20px]">
                    {customizedMarker()}

                    <Timeline
                        value={info}
                        align="alternate"
                        className="lg:px-[200px]"
                        marker={customizedMarkerDot}
                        content={(data) => customizedContent(data)}
                    />
                </div>
            </motion.div>
        </div>
    );
}
