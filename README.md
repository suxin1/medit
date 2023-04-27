<h1 align="center">Medit</h1>

<p align="center">This libray is extracted from <a href="https://github.com/marktext/marktext">Marktext</a>. </p>

## Simple usage
```javascript
import Markdown from "medit";

import CodePicker from "./dist/lib/codePicker";
// this need to be imported or else the language icon will not show
import "./dist/lib/codePicker/index.min.css";  
import EmojiPicker from "./dist/lib/emojiPicker";
import QuickInsert from "./dist/lib/quickInsert";

import "./dist/index.min.css";
import "./dist/themes/default.css";
import "./dist/themes/main.theme.css";

Markdown.use(CodePicker);
Markdown.use(EmojiPicker);
Markdown.use(QuickInsert);

const element = document.querySelector("#editor");
const md = new Markdown(element);
md.init();
```

for a more detailed use case, see example in this repository or dig in marktext source code.