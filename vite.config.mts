import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import yaml from "js-yaml";

const vueI18nPlugin = {
  name: "vue-i18n",
  transform(code, id) {
    // if .vue file don't have <i18n> block, just return
    if (!/vue&type=i18n/.test(id)) {
      return;
    }
    // parse yaml
    if (/\.ya?ml$/.test(id)) {
      code = JSON.stringify(yaml.load(code.trim()));
    }
    // mount the value on the i18n property of the component instance
    return `export default Comp => {
      Comp.i18n = ${code}
    }`;
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueI18nPlugin],
  base: "/scaffold-vite-vue-tailwind/",
});
