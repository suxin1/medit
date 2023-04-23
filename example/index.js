import Muya from '../lib'
import EmojiPicker from '../lib/ui/emojiPicker'
import FormatPicker from '../lib/ui/formatPicker'
import ImagePicker from '../lib/ui/imagePicker'
import ImageSelector from '../lib/ui/imageSelector'
import ImageToolBar from '../lib/ui/imageToolbar'
import ImageTransformer from '../lib/ui/transformer'
import CodePicker from '../lib/ui/codePicker'
import QuickInsert from '../lib/ui/quickInsert'
import TableTools from '../lib/ui/tableTools'
import FrontMenu from '../lib/ui/frontMenu'
import TablePicker from '../lib/ui/tablePicker'
import Emoji from '../lib/ui/emojis'

import "../themes/default.css";
import "../themes/main.theme.css";

import sample from "./sample";


Muya.use(EmojiPicker)
Muya.use(Emoji)
Muya.use(FormatPicker)
Muya.use(ImagePicker)
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
Muya.use(TablePicker)
// Muya.use(PreviewTools)

const container = document.querySelector('#editor')

const undoBtn = document.querySelector('#undo')
const redoBtn = document.querySelector('#redo')
const searchInput = document.querySelector('#search')
const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')
const replaceInput = document.querySelector('#replace')
const singleBtn = document.querySelector('#single')
const allBtn = document.querySelector('#all')

const muya = new Muya(container, {markdown: sample, disableHtml: false});

window.muya = muya

muya.init()

undoBtn.addEventListener('click', () => {
  muya.undo()
})

redoBtn.addEventListener('click', () => {
  muya.redo()
})

searchInput.addEventListener('input', (event) => {
  const value = event.target.value

  muya.search(value, { isRegexp: true })
})

previousBtn.addEventListener('click', () => {
  muya.find('previous')
})

nextBtn.addEventListener('click', () => {
  muya.find('next')
})

singleBtn.addEventListener('click', () => {
  muya.replace(replaceInput.value, { isSingle: true, isRegexp: true })
})

allBtn.addEventListener('click', () => {
  muya.replace(replaceInput.value, { isSingle: false })
})

muya.on('json-change', (changes) => {
  console.log(JSON.stringify(muya.getState(), null, 2))
  console.log(muya.getMarkdown())
  console.log(JSON.stringify(changes, null, 2))
})

muya.on('selection-change', changes => {
  const { anchor, focus, path } = changes
  console.log(JSON.stringify([anchor.offset, focus.offset, path]))
})
