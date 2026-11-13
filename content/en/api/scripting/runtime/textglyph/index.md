---
uid: api.inno.text.runtime-script.f5cf530460164940
symbol: "scripting:Inno.Text:T:InnoEngine.Text.TextGlyph"
source: xml
reviewed: 5f628fdfc3b8a631fbeb67657cedd0bd2a9a674666c5d4800b563a98a3b0dadf
title: "TextGlyph"
kind: api
owners: [Inno.Text]
apiSurface: editor-script
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
- project.inno-text#shaping-and-glyph-contract
aliases: []
---

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.
