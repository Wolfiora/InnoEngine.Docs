---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.text.027e94403f7bec65
symbol: engine:Inno.Text:T:Inno.Text.TextGlyph
title: TextGlyph
kind: api
owners:
- Inno.Text
apiSurface: source-clr
sourceFingerprint: b148578dbf4ff4a723234f2c437adf2fef12d4915073f652286c09a1235f2d3f
contracts:
- project.inno-text#shaping-and-glyph-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.
