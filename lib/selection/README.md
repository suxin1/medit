## Some Knowledge to know before you start 

### Node Type
- 1: Element node
- 2: Attribute node
- 3: Text node
- 4: CDATA section node
- 5: Entity Reference node
- 6: Entity node
- 7: Processing Instruction node
- 8: Comment node
- 9: Document node
- 10: Document Type node
- 11: Document Fragment node
- 12: Notation node

### Range.setStart() and Range.setEnd()
If the `node` argument passed to `setStart()` is a text node, the `startOffset` value is the index of the first
character in the text node that should be included in the range. For example, if `node` is a text node containing
the string "Hello, world", and `startOffset` is 3, then the range would start with the fourth character in the
text node, which is the letter "l"

If the `node` argument is an element node, the `startOffset` value is the index of the child node within the
element that should be the start of the range. For example, if `node` is an unordered list (`<ul>`) element with
three list items (`<li>`), and `startOffset` is 2, then the range would start with the third `<li>` child element
within the `<ul>`. translate this to chinese