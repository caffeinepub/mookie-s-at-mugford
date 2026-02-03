export const ASSETS = {
  hero: "/assets/generated/mookies-hero.dim_2400x1350.png",
  logo: "/assets/generated/mookies-logo.dim_1200x400.png",
  menu: {
    avocadoToast: "/assets/generated/menu-avocado-toast.dim_1200x900.png",
    cinnamonRoll: "/assets/generated/menu-cinnamon-roll.dim_1200x900.png",
    pastries: "/assets/generated/menu-pastries.dim_1200x900.png",
    hamEggCheese: "/assets/generated/menu-ham-egg-cheese.dim_1200x900.png",
    eggCheddar: "/assets/generated/menu-egg-cheddar.dim_1200x900.png",
    lattesEspresso: "/assets/generated/menu-lattes-espresso.dim_1200x900.png",
  },
} as const;

export const MENU_ITEMS = [
  {
    name: "Avocado Toast",
    image: ASSETS.menu.avocadoToast,
    alt: "Fresh avocado toast on rustic plate with warm café lighting",
  },
  {
    name: "Cinnamon Roll",
    image: ASSETS.menu.cinnamonRoll,
    alt: "Homemade cinnamon roll with icing in cozy morning light",
  },
  {
    name: "Variety of Pastries",
    image: ASSETS.menu.pastries,
    alt: "Assorted fresh pastries display with wood textures",
  },
  {
    name: "Ham, Egg & Cheese",
    image: ASSETS.menu.hamEggCheese,
    alt: "Ham egg and cheese breakfast sandwich in café setting",
  },
  {
    name: "Egg & Cheddar",
    image: ASSETS.menu.eggCheddar,
    alt: "Egg and cheddar breakfast sandwich with cozy backdrop",
  },
  {
    name: "Lattes & Espresso Drinks",
    image: ASSETS.menu.lattesEspresso,
    alt: "Lattes and espresso drinks on wooden table",
  },
] as const;
