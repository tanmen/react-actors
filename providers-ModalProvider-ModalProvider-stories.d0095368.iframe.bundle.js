"use strict";(self.webpackChunkreact_actors=self.webpackChunkreact_actors||[]).push([[342,121],{"./src/modals/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"modals/Modal",component:__webpack_require__("./src/modals/Modal/Modal.tsx").u},Default={args:{title:"Caution!",text:"The dogs that live here are very fierce and dangerous.\nDo not put your hands near them.\nIf you feed them, your data will be erased.\nAre you ready?",actions:[{text:"OK",color:"moderate"},{text:"NG",color:"secondary"}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Caution!',\n    text: `The dogs that live here are very fierce and dangerous.\nDo not put your hands near them.\nIf you feed them, your data will be erased.\nAre you ready?`,\n    actions: [{\n      text: 'OK',\n      color: 'moderate'\n    }, {\n      text: 'NG',\n      color: 'secondary'\n    }]\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/providers/ModalProvider/ModalProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ModalProvider_stories});var buttons=__webpack_require__("./src/buttons/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Modal=__webpack_require__("./src/modals/Modal/Modal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ModalContext=(0,react.createContext)({show:_props=>{}}),ModalProvider=({modal:Element=Modal.u,children})=>{const[props,setProps]=(0,react.useState)(null);return(0,jsx_runtime.jsxs)(ModalContext.Provider,{value:{show:props=>setProps(props)},children:[children,props&&(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(ModalContent,{onClick:()=>setProps(null),children:(0,jsx_runtime.jsx)("div",{onClick:e=>e.stopPropagation(),children:(0,jsx_runtime.jsx)(Element,{...props,onClose:()=>setProps(null)})})}),(0,jsx_runtime.jsx)(Background,{})]})]})};ModalProvider.displayName="ModalProvider";const ModalContent=emotion_styled_browser_esm.Z.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000010;
`,Background=emotion_styled_browser_esm.Z.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .5;
  background-color: #000;
  z-index: 1000000;
`;try{ModalProvider.displayName="ModalProvider",ModalProvider.__docgenInfo={description:"",displayName:"ModalProvider",props:{modal:{defaultValue:null,description:"",name:"modal",required:!0,type:{name:"FC<ModalProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/providers/ModalProvider/ModalProvider.tsx#ModalProvider"]={docgenInfo:ModalProvider.__docgenInfo,name:"ModalProvider",path:"src/providers/ModalProvider/ModalProvider.tsx#ModalProvider"})}catch(__react_docgen_typescript_loader_error){}var Modal_stories=__webpack_require__("./src/modals/Modal/Modal.stories.tsx");const ModalProvider_stories={title:"providers/ModalProvider",component:ModalProvider},Click=()=>{const{show}=(0,react.useContext)(ModalContext);return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(buttons.z,{onClick:()=>show(Modal_stories.Default.args),children:"Click Me"})})};Click.displayName="Click";const Default={args:{children:(0,jsx_runtime.jsx)(Click,{})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Click />\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/modals/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var _emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_buttons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/buttons/index.ts"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Modal=({title,text,actions,onClose})=>{const theme=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.Fg)("normal");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Wrapper,{theme,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Title,{theme,children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content,{children:text}),actions&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ActionContent,{onClick:()=>onClose(),children:actions.map((({text,onClick,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_buttons__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:e=>(e.preventDefault(),onClick?.(e)),...props,children:text},text)))})]})};Modal.displayName="Modal";const Wrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div((({theme:{font,background,border}})=>_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv`
  color: ${font};
  background-color: ${background};
  border-color: ${border};
  font-weight: 700;
  word-break: keep-all;
  border-radius: .25rem;
`)),Title=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.h2((({theme:{border}})=>_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv`
  border-bottom: 1px solid ${border};
  padding: .375rem .75rem;
`)),Content=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.pre`
  padding: .375rem .75rem;
  min-height: 4rem;
`,ActionContent=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  display: flex;
  justify-content: center;
  gap: .75rem;
  padding: .75rem;
`;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"({ text: string; } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CustomProps> & CustomProps)[]"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modals/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/modals/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=providers-ModalProvider-ModalProvider-stories.d0095368.iframe.bundle.js.map