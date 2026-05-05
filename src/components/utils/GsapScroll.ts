import gsap from "gsap";

export function setCharTimeline() {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  if (window.innerWidth > 1024) {
    tl1
      .fromTo(".character-model", { opacity: 1 }, { opacity: 0, duration: 1 }, 0)
      .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
      .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
      .fromTo(".about-me", { y: "-50%", opacity: 0 }, { y: "0%", opacity: 1 }, 0);

    tl2
      .to(".about-section", { y: "30%", duration: 6 }, 0)
      .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0);

    // Fade in/out for about character image
    const aboutImgTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
      }
    });
    aboutImgTl
      .fromTo(".about-image img", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(".about-image img", { opacity: 0, duration: 1 }, "+=2");
  }
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { scaleY: 0.1 },
      { scaleY: 1, duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }

  // Divider animations
  gsap.utils.toArray(".section-divider").forEach((divider: any) => {
    gsap.to(divider, {
      scaleX: 0.8,
      scrollTrigger: {
        trigger: divider,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
      }
    });
  });
}
