---
uid: api.inno.text.027e94403f7bec65
symbol: "engine:Inno.Text:T:Inno.Text.TextGlyph"
source: xml
reviewed: 3e51b997799bb9c3c96e229276f74d7ed5ef6f2cfd45c2bbd8a9cc883e6494f1
title: "TextGlyph"
kind: api
owners: [Inno.Text]
apiSurface: source-clr
contracts:
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
