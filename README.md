# ReactActors
[![npm](https://img.shields.io/npm/v/react-actors)](https://www.npmjs.com/package/react-actors)
[![npm downloads](https://img.shields.io/npm/dt/react-actors)](https://www.npmjs.com/package/react-actors)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-actors)](https://www.npmjs.com/package/react-actors)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B25020%2Fgithub.com%2Ftanmen%2Freact-actors.svg?type=shield)](https://app.fossa.com/projects/custom%2B25020%2Fgithub.com%2Ftanmen%2Freact-actors?ref=badge_shield)

This is UI components collection that can be used in React.

## Information
This library is testing now.

## Installation
```
yarn add react-actors
```
or
```
npm install react-actors
```


## Storybook
https://tanmen.github.io/react-actors

## Usage Example

```typescript jsx
import React from "react";
import 'ress/dist/ress.min.css';
import {ThemeProvider} from "react-actors/providers";
import {Button} from "react-actors/buttons";

function App() {
  return (
    <ThemeProvider mode="dark">
      <Input/>
      <Button>Submit</Button>
    </ThemeProvider>
  )
}
```

## License
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B25020%2Fgithub.com%2Ftanmen%2Freact-actors.svg?type=large)](https://app.fossa.com/projects/custom%2B25020%2Fgithub.com%2Ftanmen%2Freact-actors?ref=badge_large)
