import VueSanitize from "vue-sanitize";

defaultOptions = {
    allowedTags: ['p' 'h1' 'h2' 'h3' 'h4' 'h5' 'b'],
};
Vue.use(VueSanitize, defaultOptions);
