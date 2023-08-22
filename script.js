gsap.to("#vid",{
  filter : "blur(10px)",
  transform: "scale(1.1)",
  scrollTrigger:{
      trigger : ".parent .child-scrollable #page1",
      scroller : ".parent .child-scrollable",
      start : "115% 15%",
      end : "90% 85%",
      scrub : 2,
      // markers:true
  }
})