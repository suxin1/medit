import Muya from '../lib'
import EmojiPicker from '../lib/ui/emojiPicker'
import FormatPicker from '../lib/ui/formatPicker'
// import ImagePicker from '../lib/ui/imagePicker'
import ImageSelector from '../lib/ui/imageSelector'
import ImageToolBar from '../lib/ui/imageToolbar'
import ImageTransformer from '../lib/ui/transformer'
import CodePicker from '../lib/ui/codePicker'
// import TableColumnTools from '../lib/ui/tableColumnTools'
import QuickInsert from '../lib/ui/quickInsert'
// import TableDragBar from '../lib/ui/tableDragBar'
import TableTools from '../lib/ui/tableTools'
// import PreviewTools from '../lib/ui/previewTools'

// import FrontButton from '../lib/ui/frontButton'
import FrontMenu from '../lib/ui/frontMenu'

import "../themes/main.theme.css";


// const DEFAULT_MARKDOWN = `
// foo bar^hello^~world~`

// <div>
// foo bar
// </div>

// | foo | bar     |
// | ---:| ------- |
// | zar | foo bar |

// 0. foo
//    bar

// - foo bar1

//   foo bar2

// - [ ] a
// - [x] b
// - [ ] c
// - [ ] d

// **blod** *emphasis* :man: <u>underline</u> <mark>highlight</mark> \`inline code\`~~Delete~~ [Baidu](http://www.baidu.com) http://google.com

// ---

// # foo bar

// foo
// bar
// ===

// > foo
// > bar

// 图片![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592848169049&di=1bf848686f738f8697ec90a2d484a29c&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_pic%2F01%2F54%2F05%2F625746fd5b60878.jpg) bar &gt; *zar* <ruby>北京<rt>Beijing</rt></ruby> foo bar $a \ne b$ 和自己
// `

Muya.use(EmojiPicker)
Muya.use(FormatPicker)
// Muya.use(ImagePicker)
Muya.use(ImageSelector, {
  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY
})
Muya.use(ImageToolBar)
Muya.use(ImageTransformer)
Muya.use(CodePicker)

// Muya.use(FrontButton)
Muya.use(FrontMenu)
// Muya.use(TableColumnTools)
Muya.use(QuickInsert)
// Muya.use(TableDragBar)
Muya.use(TableTools)
// Muya.use(PreviewTools)

const container = document.querySelector('#editor')
// const undoBtn = document.querySelector('#undo')
// const redoBtn = document.querySelector('#redo')
// const searchInput = document.querySelector('#search')
// const previousBtn = document.querySelector('#previous')
// const nextBtn = document.querySelector('#next')
// const replaceInput = document.querySelector('#replace')
// const singleBtn = document.querySelector('#single')
// const allBtn = document.querySelector('#all')
const muya = new Muya(container )

window.muya = muya

muya.init()

// undoBtn.addEventListener('click', () => {
//   muya.undo()
// })
//
// redoBtn.addEventListener('click', () => {
//   muya.redo()
// })
//
// searchInput.addEventListener('input', (event) => {
//   const value = event.target.value
//
//   muya.search(value, { isRegexp: true })
// })
//
// previousBtn.addEventListener('click', () => {
//   muya.find('previous')
// })
//
// nextBtn.addEventListener('click', () => {
//   muya.find('next')
// })
//
// singleBtn.addEventListener('click', () => {
//   muya.replace(replaceInput.value, { isSingle: true, isRegexp: true })
// })
//
// allBtn.addEventListener('click', () => {
//   muya.replace(replaceInput.value, { isSingle: false })
// })

// muya.on('json-change', (changes) => {
  // console.log(JSON.stringify(muya.getState(), null, 2))
  // console.log(muya.getMarkdown())
  // console.log(JSON.stringify(changes, null, 2))
// })

// muya.on('selection-change', changes => {
//   const { anchor, focus, path } = changes
//   console.log(JSON.stringify([anchor.offset, focus.offset, path]))
// })
