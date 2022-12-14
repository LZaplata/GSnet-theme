let mix = require("laravel-mix");

mix.setPublicPath("assets/")
    .options({
        processCssUrls: false
    })
    .sass("assets/src/sass/theme.sass", "css/")
    .css("node_modules/bootstrap-icons/font/bootstrap-icons.css", "css/")
    .css("node_modules/swiper/swiper-bundle.css", "css/")
    .css("node_modules/wowjs/css/libs/animate.css", "css/")
    .js("assets/src/js/theme.js", "js/")
    .js("node_modules/bootstrap/dist/js/bootstrap.js", "js/")
    .js("node_modules/@popperjs/core/dist/esm/popper.js", "js/")
    .js("node_modules/jquery/dist/jquery.min.js", "js/")
    .js("node_modules/swiper/swiper-bundle.js", "js/")
    .js("node_modules/wowjs/dist/wow.min.js", "js/")
    .copyDirectory("node_modules/bootstrap-icons/font/fonts", "assets/css/fonts/")
    .browserSync({
        proxy: "localhost81/doubledot/gsnet.cz",
        files: [
            "partials/**/*",
            "pages/**/*",
            "assets/src/sass/*",
            "assets/src/js/*",
        ],
    });
