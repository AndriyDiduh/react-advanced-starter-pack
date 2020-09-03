# React Advanced Starter Pack - NOT READY YET :( but soon will be :) 
Hi, I'm Andriy Diduh, this starter pack is all in one to start your next Powerful Project with 0 config. I'll try to keep it clean and updated. Yes I use this setup for my projects, usually I install additional third party modules like maps, date picker, etc... 

But here I will try to keep setup to the most needed one. 


-- This version is RAW and needs to be edited to work properly. --
-- I will edit Readme when this project will be ready.--

### Main setup
- ES6 code standard setup
- no semicolon ";" is used 

### Technology support
- <strong>TypeScript</strong> support
- <strong>Webpack</strong> full config
- <strong>Babel</strong> support, including TypeScript

### Code clean look 
- <strong>Eslint</strong> config for clean code look
- <strong>Prettier</strong> config for code style

### Store management 
- <strong>Flux</strong> folder shortcuts added to Webpack and Typescript config files
- in process of writing...

### Import 
- Images import, includes SVG, GIF, PNG, JPG, JPEG, ICO
- Video import, includes MP4

### Styles
- <strong>CSS</strong> and <strong>SASS</strong> support 

### API handling 
- <strong>Axios</strong> to send calls to your API 

### Maps 
- <strong>Geojson</strong> file format support

### Deploy
- <strong>Netlify</strong> support 

## Folder structure and use
<strong>Import shortcuts</strong> 

```js

    // Examples of how to import with shortcuts
    import MyComponent from 'Components/MyComponent'
    import {
        ListInfoBlock,
        TextInfoBlock,
    } from 'Components/InfoBlocks'
    import 'Scss/my-styles.scss'

    // List of shortcuts
    Src: './src'
    Api: './src/api'
    Components: './src/components'
    Screens: './src/screens'
    Actions: './src/flux/actions'
    Store: './src/flux/store'
    Imgs: './src/styles/img'
    Scss: './src/styles/scss'
    Content: './src/content'
    Types: './src/types'
```
- in process of writing...


# RUN 
<strong>Development!</strong>
- Launch locally in a browser as development setup. 
```bash
npm run start:dev
```
- Build for <strong>Development</strong> to ./dist folder.
```bash
npm run build:dev
```
<strong>Production!</strong>
- Launch for production - in making....
```bash
npm run ......
```
- Build for <strong>Production</strong> to ./dist folder.
```bash
npm run build:prod
```
<strong>Testing!</strong>
- in the making......

## License

_react-advanced-starter-pack_ is available under the MIT License.