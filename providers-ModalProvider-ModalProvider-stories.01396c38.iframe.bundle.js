"use strict";(self.webpackChunkreact_actors=self.webpackChunkreact_actors||[]).push([[342,121],{"./src/modals/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"modals/Modal",component:__webpack_require__("./src/modals/Modal/Modal.tsx").u},Default={args:{title:"Caution!",text:"The dogs that live here are very fierce and dangerous.\nDo not put your hands near them.\nIf you feed them, your data will be erased.\nAre you ready?",actions:[{text:"OK",color:"moderate"},{text:"NG",color:"secondary"}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Caution!',\n    text: `The dogs that live here are very fierce and dangerous.\nDo not put your hands near them.\nIf you feed them, your data will be erased.\nAre you ready?`,\n    actions: [{\n      text: 'OK',\n      color: 'moderate'\n    }, {\n      text: 'NG',\n      color: 'secondary'\n    }]\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/providers/ModalProvider/ModalProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _buttons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/buttons/index.ts"),_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useModal.ts"),_modals_Modal_Modal_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/modals/Modal/Modal.stories.tsx"),_ModalProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/providers/ModalProvider/ModalProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"providers/ModalProvider",component:_ModalProvider__WEBPACK_IMPORTED_MODULE_3__.D},Click=()=>{const{show}=(0,_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__.d)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_buttons__WEBPACK_IMPORTED_MODULE_0__.z,{onClick:()=>show(_modals_Modal_Modal_stories__WEBPACK_IMPORTED_MODULE_2__.Default.args),children:"Click Me"})})};Click.displayName="Click";const Default={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Click,{})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Click />\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);