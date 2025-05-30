import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/HVDS.png" alt="Helmet Violation Detection System" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Helmet Violation Detection System (HVDS) - A website that
                                apply detection of motorbike riders without helmet
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A system built with ReactTS, Django, & AI Services for a fast,
                                professional experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/ai-interview.png"
                                    alt="AI Mock Interview"
                                />
                            </div>
                            <h2>Jump in AI and prepare for your next interview</h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/nicehouse.png" alt="Nice House" />
                            </div>
                            <h2>Nice House - A Connection from FPT Student to The Apartment</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;