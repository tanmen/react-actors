"use strict";(self.webpackChunkreact_actors=self.webpackChunkreact_actors||[]).push([[990],{"./src/dropdowns/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_buttons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/buttons/index.ts"),_Dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdowns/Dropdown/Dropdown.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Dropdown",component:_Dropdown__WEBPACK_IMPORTED_MODULE_2__.L,parameters:{layout:"centered"}},Template=args=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__.L,{open,...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_buttons__WEBPACK_IMPORTED_MODULE_1__.z,{onClick:()=>setOpen(!open),children:"Open"})})};Template.displayName="Template";const Normal=Template.bind({});Normal.args={items:["Test","Test","Test","Test","Test","Test","Test"]},Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"(args: DropdownProps) => {\n  const [open, setOpen] = useState();\n  return <Dropdown open={open} {...args}><Button onClick={() => setOpen(!open)}>Open</Button></Dropdown>;\n}",...Normal.parameters?.docs?.source}}};const __namedExportsOrder=["Normal"]},"./src/dropdowns/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dropdown=({open,align="right",items,children})=>{const theme=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.Fg)("normal");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrap,{tabIndex:0,children:[children,open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Down,{align,theme,children:items.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Item,{tabIndex:index,theme,children:item},index)))})]})};Dropdown.displayName="Dropdown";const Wrap=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
  position: relative;
`,Down=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.ul((({theme:{font},align})=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv`
  position: absolute;
  color: ${font};
  top: calc(100% + .25rem);
  ${"left"===align?_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv`right: 0;`:_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv`left: 0;`}
  border-radius: .25rem;
  list-style-type: none;
  max-height: 13.75rem;
  overflow-y: scroll;
`)),Item=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.li((({theme:{background,border}})=>_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv`
  padding: .375rem .5rem;
  background-color: ${background};

  & + & {
    border-top: 1px solid ${border};
  }

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, .8);
  }
`));try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"right"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"ReactNode[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdowns/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/dropdowns/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=dropdowns-Dropdown-Dropdown-stories.3b1adcda.iframe.bundle.js.map