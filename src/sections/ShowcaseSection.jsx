import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section id={"work"} ref={sectionRef} className={"app-showcase"}>
      <div className={"w-full"}>
        <div className={"showcaselayout"}>
          {/*left*/}
          <div className={"first-project-wrapper"} ref={project1Ref}>
            <div className={"image-wrapper"}>
              <img src={"/images/prepwise.png"} alt={"Ryde"} />
            </div>
            <div className={"text-content"}>
              <h2>
                Anytime, anywhere AI - interview for developers called prepwise
              </h2>
              <p className={"text-white-50 md:text-xl"}>
                An app made practicing interviews easier and free so you
                can&apos;t bother yourself with how would I do.
              </p>
            </div>
          </div>

          {/*right*/}
          <div className={"project-list-wrapper overflow-hidden"}>
            <div className={"project"} ref={project2Ref}>
              <div className={"image-wrapper bg-[#ffefdb]"}>
                <img
                  src={"/images/project2.png"}
                  alt={"Library management system"}
                />
              </div>
              <h2>Library management platform</h2>
            </div>
            <div className={"project"} ref={project3Ref}>
              <div className={"image-wrapper bg-[#ffe7db]"}>
                <img src={"/images/project3.png"} alt={"YC directory"} />
              </div>
              <h2>A startup ShowCase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;
