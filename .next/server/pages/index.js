"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 2 modules
var ContainerBlock = __webpack_require__(2537);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(954);
;// CONCATENATED MODULE: ./components/LatestCode.js



function LatestCode({ repositories , latestRepo  }) {
    const [repos, setRepos] = (0,external_react_.useState)(repositories);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-[#F1F1F1] lg:-mt-36 dark:bg-gray-900 pb-28",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:max-w-5xl max-w-2xl mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col lg:flex-row justify-between items-center lg:pt-40 mx-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "text-6xl lg:text-8xl font-bold text-gray-500 mt-8 mb-2 lg:pl-0 pl-5 lg:mt-2 lg:ml-8 dark:text-slate-800 text-center lg:text-left",
                            children: "Latest Code"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: `https://github.com/${data/* default.githubUsername */.Z.githubUsername}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mb-6 lg:mb-0 px-8 py-4 rounded-md bg-white drop-shadow-2xl  text-xl font-semibold flex flex-row space-x-3 items-center dark:text-gray-700 mt-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-arrow-up-right-square",
                                    stroke: "4",
                                    strokeWidth: "4",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "View GitHub"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 lg:max-w-6xl max-w-md mx-auto px-8 lg:-mt-10 gap-y-14 mt-10 lg:gap-y-20",
                children: repos && repos.map((latestRepo, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(GithubRepoCard, {
                        latestRepo: latestRepo
                    }, "idx"))
            })
        ]
    });
}
const GithubRepoCard = ({ latestRepo  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-5xl mx-auto ml-28 lg:ml-28 lg:mt-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-semibold text-2xl lg:text-xl dark:text-gray-200 text-gray-700",
                children: latestRepo.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-base font-normal my-4 text-gray-500",
                children: latestRepo.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: latestRepo.clone_url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "font-semibold group flex flex-row space-x-1 w-full items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "View Repository"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "4 0 24 20",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        className: "h-5 w-5 transform group-hover:translate-x-2 transition duration-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./lib/getLatestRepos.js

const getLatestRepos = async (data, token)=>{
    // console.log("data", data);
    try {
        const username = data.githubUsername;
        // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
        // console.log("TOKEN", token);
        if (token) {
            const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });
            let repos = res.data.items;
            let latestSixRepos = repos.splice(0, 6);
            // console.log("LATEST 6 repos", latestSixRepos);
            return latestSixRepos;
        } else {
            const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`);
            let repos = res.data.items;
            let latestSixRepos = repos.splice(0, 6);
            return latestSixRepos;
        }
    } catch (err) {
        console.log(err);
    }
};
/* harmony default export */ const lib_getLatestRepos = (getLatestRepos);

;// CONCATENATED MODULE: external "react-rough-notation"
const external_react_rough_notation_namespaceObject = require("react-rough-notation");
;// CONCATENATED MODULE: ./components/BoxAnimation.js



const BoxAnimation = ({ color , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_rough_notation_namespaceObject.RoughNotation, {
        type: "box",
        multiline: false,
        padding: [
            4,
            8
        ],
        strokeWidth: 5,
        iterations: 1,
        animationDuration: 2000,
        color: color,
        children: children
    });
};

;// CONCATENATED MODULE: ./components/Hero.js





function Hero() {
    const colors = [
        "#F59E0B",
        "#84CC16",
        "#10B981",
        "#3B82F6"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-6xl mx-auto flex flex-row overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto text-center lg:text-left lg:pl-0 lg:pt-20 lg:pr-24 lg:pb-20 pb-8 pl-11",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_rough_notation_namespaceObject.RoughNotationGroup, {
                    show: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "lg:text-6xl text-5xl font-bold text-gray-700 dark:text-gray-200",
                                children: "Nick Ahlers"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:w-80 w-64 lg:ml-0 ml-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxAnimation, {
                                color: colors[3],
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "lg:text-6xl text-5xl font-bold text-gray-700 dark:text-gray-200",
                                    children: "Developer."
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:w-48 mt-5 w-40 lg:ml-0 ml-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(BoxAnimation, {
                                color: colors[2],
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "lg:text-6xl text-5xl font-bold text-gray-700 dark:text-gray-200",
                                    children: "IT Pro."
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden lg:block relative w-full md:w-1/2 -mr-40 mt-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-2/5 ml-24",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: data/* default.avatarUrl */.Z.avatarUrl,
                            alt: "avatar",
                            className: "drop-shadow-2xl"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row justify-between mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-row space-x-4"
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js






function Home({ repositories  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerBlock/* default */.Z, {
        title: "Nick Ahlers - Developer. IT Pro.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LatestCode, {
                repositories: repositories
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    console.log(process.env.GITHUB_AUTH_TOKEN);
    let token = process.env.GITHUB_AUTH_TOKEN;
    const repositories = await lib_getLatestRepos(data/* default */.Z, token);
    // console.log("REPOSITORIES", repositories);
    return {
        props: {
            repositories
        }
    };
};


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,537], () => (__webpack_exec__(2836)));
module.exports = __webpack_exports__;

})();