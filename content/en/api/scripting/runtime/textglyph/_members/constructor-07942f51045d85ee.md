---
uid: api.07942f51045d85eeb006226c43576d9aafd19145bb334560dc7bb5b8ee7d0643
symbol: "scripting:Inno.Text:M:InnoEngine.Text.TextGlyph.#ctor(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: e583d6f774ad801e6cb72d82f0c26ac8d4f3742184a0a2b0c29c6d12f6823db4
title: "Constructor"
kind: api
owners: [Inno.Text]
apiSurface: editor-script
apiScope: Runtime
---

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.
