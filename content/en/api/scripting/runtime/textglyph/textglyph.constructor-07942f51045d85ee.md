---
uid: api.07942f51045d85eeb006226c43576d9aafd19145bb334560dc7bb5b8ee7d0643
symbol: "scripting:Inno.Text:M:InnoEngine.Text.TextGlyph.#ctor(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: 58c9aad450d5dc03d999a618c48c6a8c5ce497f5851639777d46c3374abd90f9
title: "TextGlyph.Constructor"
kind: api
owners: [Inno.Text]
apiSurface: editor-script
apiScope: Runtime
---

Describes one positioned glyph emitted by Unicode shaping.

## Parameters

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.
