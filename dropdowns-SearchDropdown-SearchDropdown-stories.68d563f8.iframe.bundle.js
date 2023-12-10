"use strict";(self.webpackChunkreact_actors=self.webpackChunkreact_actors||[]).push([[886],{"./src/dropdowns/SearchDropdown/SearchDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchDropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),Input=__webpack_require__("./src/inputs/Input/index.ts"),Dropdown=__webpack_require__("./src/dropdowns/Dropdown/Dropdown.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SearchDropdown=(0,react.forwardRef)((({items,onTextChange,...props},ref)=>{const[value,setValue]=(0,react.useState)(),[open,setOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(Dropdown.L,{open,items:items.map((({key,body})=>(0,jsx_runtime.jsx)("div",{onClick:()=>setValue(key),children:body},key))),children:[(0,jsx_runtime.jsx)("input",{ref,type:"hidden",value,...props}),(0,jsx_runtime.jsx)(Input.I,{onFocus:()=>setOpen(!0),onBlur:()=>setOpen(!1),onChange:e=>onTextChange?.(e.target.value)})]})}));try{SearchDropdown.displayName="SearchDropdown",SearchDropdown.__docgenInfo={description:"",displayName:"SearchDropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SearchDropdownItem[]"}},onTextChange:{defaultValue:null,description:"",name:"onTextChange",required:!1,type:{name:"((text: string) => unknown)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdowns/SearchDropdown/SearchDropdown.tsx#SearchDropdown"]={docgenInfo:SearchDropdown.__docgenInfo,name:"SearchDropdown",path:"src/dropdowns/SearchDropdown/SearchDropdown.tsx#SearchDropdown"})}catch(__react_docgen_typescript_loader_error){}const SearchDropdown_stories={title:"SearchDropdown",component:SearchDropdown,parameters:{layout:"centered"}},Template=({items,...args})=>{const[text,setText]=(0,react.useState)();return(0,jsx_runtime.jsx)(SearchDropdown,{...args,items:items.filter((i=>i.key.toLowerCase().includes(text))),onTextChange:t=>setText(t),children:"SearchDropdown"})};Template.displayName="Template";const Normal=Template.bind({});Normal.args={items:[{key:"Felix",body:"Felix"},{key:"Clement",body:"Clement"},{key:"Eugene",body:"Eugene"},{key:"Ringo",body:"Ringo"},{key:"Isaiah",body:"Isaiah"},{key:"Brayden",body:"Brayden"},{key:"Paul",body:"Paul"},{key:"Ansel",body:"Ansel"},{key:"Junior",body:"Junior"},{key:"Allan",body:"Allan"},{key:"Zechariah",body:"Zechariah"},{key:"Virgil",body:"Virgil"},{key:"Jim",body:"Jim"},{key:"Bret",body:"Bret"},{key:"Obadiah",body:"Obadiah"},{key:"Rod",body:"Rod"},{key:"Stevie",body:"Stevie"},{key:"Shannon",body:"Shannon"},{key:"Bubby",body:"Bubby"},{key:"Edmunds",body:"Edmunds"},{key:"Felix",body:"Felix"},{key:"Mohammed",body:"Mohammed"},{key:"Collin",body:"Collin"},{key:"Basil",body:"Basil"},{key:"Georgie",body:"Georgie"}]},Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"({\n  items,\n  ...args\n}: SearchDropdownProps) => {\n  const [text, setText] = useState<string>();\n  return <SearchDropdown {...args} items={items.filter(i => i.key.toLowerCase().includes(text))} onTextChange={t => setText(t)}>SearchDropdown</SearchDropdown>;\n}",...Normal.parameters?.docs?.source}}};const __namedExportsOrder=["Normal"]},"./src/dropdowns/Dropdown/Dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dropdown=({open,align="right",items,children})=>{const theme=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.Fg)("normal");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrap,{tabIndex:0,children:[children,open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Down,{align,theme,children:items.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Item,{tabIndex:index,theme,children:item},index)))})]})};Dropdown.displayName="Dropdown";const Wrap=_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z.div`
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
//# sourceMappingURL=dropdowns-SearchDropdown-SearchDropdown-stories.68d563f8.iframe.bundle.js.map