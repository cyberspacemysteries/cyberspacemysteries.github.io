var themes = [
  // {
  //   // Template
  //   logo: {
  //       path: "/assets/nostr-ings-community-banner.svg",
  //       fillColor: "",
  //       outlineColor: "#000"
  //   },
  //   title: {
  //       fillColor: "#FFF",
  //       outlineColor: "#000"
  //   },
  //   description: {
  //       fillColor: "#000"
  //   },
  //   button1: {
  //       fillColor: "",
  //       outlineColor: "#000",
  //       labelFillColor: "#000"
  //   },
  //   button2: {
  //       fillColor: "",
  //       outlineColor: "#000",
  //       labelFillColor: "#000"
  //   },
  //   background: {
  //       path: '',
  //       pathRetina: '',
  //       pathMobile: '',
  //       pathMobileRetina: '',
  //       backgroundColor: ''
  //   },
  //   copy: {
  //       backgroundColor: ""
  //   },
  //   image: {
  //       path: 'url("/assets/images/home/banner/template.jpg")',
  //       pathRetina: 'url("/assets/images/home/banner/template@2x.jpg")',
  //       pathMobile: 'url("/assets/images/home/banner/template-mobile.jpg")',
  //       pathMobileRetina: 'url("/assets/images/home/banner/template-mobile@2x.jpg")',
  //       backgroundColor: "#fbfbfb"
  //   },
  //   flipLayoutOnMobile: false,
  //   author: {
  //       name: "Template",
  //       link: "https://github.com/nostr-ings/nostr-ings.github.io/issues"
  //   }
  // },
  {
    // Bridging bitcoin
    logo: {
        path: "/assets/nostr-ings-community-banner.svg",
        fillColor: "#fff",
        outlineColor: "#000"
    },
    title: {
        fillColor: "#fff",
        outlineColor: "transparent"
    },
    description: {
        fillColor: "#fff"
    },
    button1: {
        fillColor: "#8C3AF5",
        outlineColor: "#fff",
        labelFillColor: "#fff"
    },
    button2: {
        fillColor: 'transparent',
        outlineColor: "#fff",
        labelFillColor: "#fff"
    },
    background: {
        path: '',
        pathRetina: '',
        pathMobile: '',
        pathMobileRetina: '',
        backgroundColor: '#000000'
    },
    copy: {
        backgroundColor: "#000000"
    },
    image: {
        path: 'url("/assets/images/home/banner/nostr-ings-banner.png")',
        pathRetina: 'url("/assets/images/home/banner/nostr-ings-banner@2x.png")',
        pathMobile: 'url("/assets/images/home/banner/nostr-ings-banner-mobile.png")',
        pathMobileRetina: 'url("/assets/images/home/banner/nostr-ings-banner-mobile@2x.png")',
        backgroundColor: "#000000"
    },
    flipLayoutOnMobile: false,
    author: {
        name: "elidy with stable diffusion",
        link: "https://github.com/nostr-ings/nostr-ings.github.io/issues"
    }
  }

];

var shuffleArray = function(array) {
    var i = array.length - 1;
    for(; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
};

shuffleArray(themes);

var currentThemeIndex = null;
var applyNextTheme = function() {
    currentThemeIndex++;

    if(currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
    }

    applyTheme(currentThemeIndex);
}

var getProperty = function(thing, find, fallback) {
    if(!thing) {
        return fallback ? fallback : null;
    }

    if(!find) {
        return fallback ? fallback : null;
    }

    var result = thing;
    var bits = find.split('.');
    var i=0, length=bits.length, bit;
    for(; i<length; i++) {
        bit = bits[i];

        if(result[bit]) {
            result = result[bit];
        } else {
            result = fallback === undefined ? null :  fallback;
            break;
        }
    }

    return result;
};

var applyDocumentThemeProperty = function(theme, propertyName, propertyId) {
    document.documentElement.style.setProperty(propertyName, getProperty(theme, propertyId));
};

var applyTheme = function(themeIndex) {
    currentThemeIndex = themeIndex;

    var theme = themes[themeIndex];

    // Del

    // Document-wide property.
    var documentProperties = [
        ['--copy-background-color', 'copy.backgroundColor'],
        ['--title-fill-color', 'title.fillColor'],
        ['--title-outline-color', 'title.outlineColor'],
        ['--description-fill-color', 'description.fillColor'],
        ['--button-1-fill-color', 'button1.fillColor'],
        ['--button-1-outline-color', 'button1.outlineColor'],
        ['--button-1-label-fill-color', 'button1.labelFillColor'],
        ['--button-2-fill-color', 'button2.fillColor'],
        ['--button-2-outline-color', 'button2.outlineColor'],
        ['--button-2-label-fill-color', 'button2.labelFillColor'],
        ['--banner-image-path', 'image.path'],
        ['--banner-image-path-retina', 'image.pathRetina'],
        ['--banner-image-path-mobile', 'image.pathMobile'],
        ['--banner-image-path-mobile-retina', 'image.pathMobileRetina'],
        ['--banner-image-color', 'image.backgroundColor'],
        ['--banner-background-path', 'background.path'],
        ['--banner-background-path-retina', 'background.pathRetina'],
        ['--banner-background-path-mobile', 'background.pathMobile'],
        ['--banner-background-path-mobile-retina', 'background.pathMobileRetina'],
        ['--banner-background-color', 'background.backgroundColor']
    ];

    var i;
    for(i=0; i<documentProperties.length; i++) {
        applyDocumentThemeProperty(theme, documentProperties[i][0], documentProperties[i][1]);
    }

    // Logo properties.
    var logoPaths = document.getElementsByClassName('banner-bitcoin-logo-path');
    var logoPathFills = document.getElementsByClassName('banner-bitcoin-logo-fill-path');
    var logoFills = document.getElementsByClassName('banner-bitcoin-logo-fill');
    if(logoPaths && logoPaths.length > 0) {
        for(i=0; i<logoPaths.length; i++) {
            logoPaths[i].setAttribute('stroke', getProperty(theme, 'logo.outlineColor'));
        }
    }
    if(logoPathFills && logoPathFills.length > 0) {
        for(i=0; i<logoPathFills.length; i++) {
            logoPathFills[i].setAttribute('fill', getProperty(theme, 'logo.outlineColor'));
        }
    }
    if(logoFills && logoFills.length > 0) {
        for(i=0; i<logoFills.length; i++) {
            logoFills[i].setAttribute('fill', getProperty(theme, 'logo.fillColor'));
        }
    }

    // Banner properties.
    var banner = document.getElementById('home-banner');
    if(banner) {
        if(theme.flipLayoutOnMobile) {
            banner.classList.add('-flip-on-mobile');
        } else {
            banner.classList.remove('-flip-on-mobile');
        }
    }

    // Author properties.
    var author = document.getElementById('home-banner-info-author');
    if(author) {
        author.innerText = getProperty(theme, 'author.name');
        author.setAttribute('href', getProperty(theme, 'author.link'));
    }

    // Lottie properties.
    var homeBannerImage = document.querySelector('.home-banner-image');
    if(theme.image.lottie && ref.reduceMotion && !ref.reduceMotion.matches) {
        homeBannerImage.classList.add('lottie');
        homeBannerImage.dataset.lottie = theme.image.lottie;
        decideIfLottie();
    }
    else {
        homeBannerImage.classList.remove('lottie');
        homeBannerImage.dataset.lottie = '';
        stopLottie();
    }
};

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    var banner = document.getElementById('home-banner');

    if(banner) {
        applyTheme(0);

        var bannerNext = document.getElementById('home-banner-info-next');
        if(bannerNext) {
            bannerNext.addEventListener('click', function(event) {
                event.preventDefault();

                applyNextTheme();
            });
        }
    }
});
