
export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({live: false}).init()
    });
  }
};

export const ModeId= "6643365a32ef73702cd38ddd";