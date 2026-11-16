---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.07942f51045d85eeb006226c43576d9aafd19145bb334560dc7bb5b8ee7d0643
symbol: scripting:Inno.Text:M:InnoEngine.Text.TextGlyph.#ctor(System.UInt32,System.UInt32,System.Single,System.Single,System.Single,System.Single)
title: TextGlyph.Constructor
kind: api
owners:
- Inno.Text
apiSurface: editor-script
reviewed: 6827316839307b32487183f4bc3390bcdbacef3eb8dad2ab983953675743293f
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `glyphId`:** The glyph identifier in the font face that produced this layout.

**Parameter `cluster`:** The source cluster index reported by the backend. The FreeType/HarfBuzz backend reports a UTF-8 byte offset, not a UTF-16 character index.

**Parameter `advanceX`:** The horizontal pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `advanceY`:** The vertical pen advance in logical pixels, including backend-applied letter spacing.

**Parameter `offsetX`:** The horizontal placement offset from the pen position in logical pixels.

**Parameter `offsetY`:** The vertical placement offset from the pen position in logical pixels.
