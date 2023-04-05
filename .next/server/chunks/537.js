"use strict";
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 2537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContainerBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(954);
;// CONCATENATED MODULE: ./components/Navbar.js






function Navbar() {
    const router = (0,router_.useRouter)();
    console.log(router.asPath);
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex  md:flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-semibold text-xl dark:text-gray-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    "stroke-width": "1.5",
                                    stroke: "currentColor",
                                    class: "w-6 h-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-x-8 hidden md:block",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/about",
                                className: `text-base  ${router.asPath === "/about" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                children: [
                                    "About",
                                    " ",
                                    router.asPath === "/about" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-arrow-down inline-block h-3 w-3",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/projects",
                                className: `text-base  ${router.asPath === "/projects" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                children: [
                                    "Projects",
                                    router.asPath === "/projects" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-arrow-down inline-block h-3 w-3",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/experience",
                                className: `text-base  ${router.asPath === "/experience" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                children: [
                                    "Experience",
                                    " ",
                                    router.asPath === "/experience" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-arrow-down inline-block h-3 w-3",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/contact",
                                className: `text-base  ${router.asPath === "/contact" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                children: [
                                    "Contact",
                                    router.asPath === "/contact" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-arrow-down inline-block h-3 w-3",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-x-2 flex flex-row items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data/* default.socialLinks.github */.Z.socialLinks.github,
                                className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-github h-5 w-5",
                                    viewBox: "0 0 100 100",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                                className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-linkedin h-5 w-5",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "aria-label": "Toggle Dark Mode",
                                type: "button",
                                className: "w-10 h-10 p-3 rounded focus:outline-none",
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                                children: mounted && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    className: "w-4 h-4 text-yellow-500 dark:text-yellow-500",
                                    children: theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-x-8 block md:hidden mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        className: "text-base font-normal text-gray-600 dark:text-gray-300",
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/projects",
                        className: "text-base font-normal text-gray-600 dark:text-gray-300",
                        children: "Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/experience",
                        className: "text-base font-normal text-gray-600 dark:text-gray-300",
                        children: "Experience"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        className: "text-base font-normal text-gray-600 dark:text-gray-300",
                        children: "Contact"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-[#F1F1F1] dark:bg-gray-900 pb-96",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-0.5 w-full bg-white dark:bg-gray-700"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col md:space-y-0 md:flex-row justify-between md:items-center mt-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-x-2 flex flex-row items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data/* default.socialLinks.github */.Z.socialLinks.github,
                                    className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-github h-5 w-5",
                                        viewBox: "0 0 100 100",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                                    className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-linkedin h-5 w-5",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ContainerBlock.js






function ContainerBlock({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Nick Ahlers",
        description: `Love to code, especially with React and NextJS!`,
        image: "/avatar.png",
        type: "website",
        ...customMeta
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "viewport-fit=cover"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Nick Ahlers"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "dark:bg-gray-800 w-full h-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const userData = {
    githubUsername: "numenor-dev",
    name: "Nick Ahlers",
    designation: "Frontend Developer",
    avatarUrl: "/avatar.png",
    contactAvatar: "/notlooking.jpg",
    email: "nckahlers@gmail.com",
    phone: "425-835-1575",
    address: "Kirkland, WA",
    projects: [
        {
            title: "Portfolio",
            link: "https://nickaportfolio.com",
            imgUrl: "/pf.png",
            description: "Professional portfolio showcasing additional projects I've built. This site was built with NextJS, TailwindCSS, Axios, and RoughNotation."
        },
        {
            title: "Stormbreaker",
            link: "http://ec2-54-201-39-167.us-west-2.compute.amazonaws.com",
            imgUrl: "/sb.png",
            description: "A real time, severe weather search using the weather.gov API. Built with React, Reactstrap, Redux, Express, and MongoDB."
        },
        {
            title: "Washington Nature",
            link: "http://ec2-34-220-54-251.us-west-2.compute.amazonaws.com",
            imgUrl: "/wn.png",
            description: "A dedicated site for fictional scenery in Washington state. Built with React, Reactstrap, Redux, Express, and MongoDB."
        }
    ],
    about: {
        title: "Hi, I'm Nick Ahlers. Currently a Frontend Developer with a certification in the MERN (MongoDB, Express, React, Node) stack. I have a background in IT, which has aided in my journey in becoming a developer. I'm always looking to the future for new frameworks and libraries that offer new ways to build exciting ideas.",
        description: [
            `Within the last few years, I've discovered my passion for all things coding. Specifically, I was drawn to React for it's declarative, robust, and adaptable library.
       With the power of JavaScript, I'm thrilled for the future of web innovation.`
        ]
    },
    experience: [
        {
            title: "Frontend Developer",
            company: "Zumiez",
            year: "2022",
            companyLink: "https://www.zumiez.com",
            desc: "Write production ready code to add features and fixes on all Zumiez regional sites."
        },
        {
            title: "IT Support",
            company: "Ventec Life Systems",
            year: "2020",
            companyLink: "https://www.venteclife.com",
            desc: "Supported infrastructure for ventilator start up during the peak of Covid."
        },
        {
            title: "Partner Support Team Lead (Tier 3)",
            company: "ConnectWise",
            year: "2016",
            companyLink: "https://www.connectwise.com",
            desc: "High tier, global support for B2B customers of ConnectWise."
        },
        {
            title: "Intelligence Analyst",
            company: "Army Reserve",
            year: "2012",
            companyLink: "https://goarmy.com",
            desc: "Deciphered classified data gathered from special operations."
        }
    ],
    resumeUrl: "https://drive.google.com/file/d/1Nqn4vvRKqN-DkIdAmkVoQXafg9rHbamO/view?usp=share_link",
    mernCert: "https://drive.google.com/file/d/1szbtm8OkMXUx58Z2sKxJBNwfBtgFhfKs/view?usp=share_link",
    socialLinks: {
        linkedin: "https://linkedin.com/in/nick-ahlers",
        github: "https://github.com/numenor-dev"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userData);


/***/ })

};
;