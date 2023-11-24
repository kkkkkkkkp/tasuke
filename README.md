
# Otasuke

otasuke is a versatile and open-source npm package that provides a variety of utilities designed to enhance web development productivity. This package includes a collection of tools ranging from date formatting and text capitalization to regular expressions, React hooks, loader animations, and a ready-to-use page.



## Document
Storybook:
https://otasuke.netlify.app
## Features

- loader animation
- dayformat
- capital text
- regex
- ready-to-use pages (Success, Error...)



## Installation

Install otasuke with npm

```bash
  npm install otasuke
```
    
## Usage/Examples, Loader

```javascript
import { BlobLoader } from 'otasuke'

function App() {
  return <BlobLoader backgroundColor='red' size='40px' />
}
```

## Usage/Examples, DayFormat

```javascript
import { dayFormat1 } from 'otasuke'

function App() {
    const date = new Date()
    return(
        <h1>{dayFormat1{date}}</h1>
    )
}
```
## GitHub Link
https://github.com/kkkkkkkkp/tasuke