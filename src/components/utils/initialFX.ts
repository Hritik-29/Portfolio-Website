import gsap from "gsap";

// SplitText and smoother removed — gsap-trial was a watermarked package.
// Landing text animation is now a simple stagger on the heading elements.

export function initialFX() {
  document.body.style.overflowY = "auto";
  // smoother.paused(false) replaced — body overflow now controls scroll visibility
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Animate landing text headings with a clean fade + slide-up
  gsap.fromTo(
    [
      ".landing-info h3",
      ".landing-intro h2",
      ".landing-intro h1",
      ".landing-info h2",
    ],
    { opacity: 0, y: 40, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.08,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
