---
uid: api.4bf399c7286a928ba038cd2505423f7e6082f0169a9fca8132afde7d4e8eb0a7
symbol: "engine:Inno.Text:M:Inno.Text.TextGlyph.#ctor(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single)"
source: xml
reviewed: 0db7d1148a7d74817d902bcdf45b7f7e512da90e22a8c419723e78d7a5032f48
title: "Constructor"
kind: api
owners: [Inno.Text]
apiSurface: source-clr
---

Describes one positioned glyph emitted by Unicode shaping.

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.
