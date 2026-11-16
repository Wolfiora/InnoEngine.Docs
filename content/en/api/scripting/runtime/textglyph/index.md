---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.text.runtime-script.f5cf530460164940
symbol: scripting:Inno.Text:T:InnoEngine.Text.TextGlyph
title: TextGlyph
kind: api
owners:
- Inno.Text
apiSurface: editor-script
reviewed: b584a1516a160db000c7e8a4e0a90b41a4177242796f8b0486fa389f4bd8b1ec
apiScope: Runtime
contracts:
- manual.scripting.use-script-api
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
