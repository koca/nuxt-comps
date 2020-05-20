export default {
  buildModules: ["@nuxt/components"],
  components: {
    dirs: [
      "~/components",
      "~/non-existent",
      { path: "@/components/base", prefix: "Base" },
      {
        path: "@/components/icons",
        prefix: "Icon",
        transpile: true /* Only for coverage purpose */
      }
    ]
  },
  hooks: {
    "components:dirs": dirs => {
      console.log("dirs", dirs);
    }
  }
};
