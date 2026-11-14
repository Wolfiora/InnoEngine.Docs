---
uid: api.directory.engine.text
title: "Text"
kind: landing
owners: []
---

# Text

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [Assets](assets/index.md) | Import OpenType containers into compact runtime metadata and immutable encoded font data. |
| [Runtime](runtime/index.md) | Session-owned font faces, immutable artifact leases and text execution scopes. |

## Types

| Type | Purpose |
| --- | --- |
| [FontAsset](fontasset/index.md) | Represents one imported OpenType font file or collection. |
| [FontMetadata](fontmetadata/index.md) | Describes immutable metadata for an imported OpenType font source. |
| [FontMetadataCodec](fontmetadatacodec/index.md) | Encodes the compact runtime payload shared by the font importer and text runtime. |
| [GlyphBitmap](glyphbitmap/index.md) | Contains one rasterized glyph as tightly packed 8-bit coverage. |
| [ITextBackend](itextbackend/index.md) | Defines the replaceable native shaping and glyph-rasterization boundary. |
| [ITextService](itextservice/index.md) | Provides backend-neutral Unicode shaping and glyph rasterization for imported fonts. |
| [Text](text/index.md) | Provides script-friendly access to Unicode shaping and glyph rasterization. |
| [TextDirection](textdirection/index.md) | Selects the logical direction used by the shaping engine. |
| [TextExecutionContext](textexecutioncontext/index.md) | Binds one text service to the current asynchronous execution context. |
| [TextFontHandle](textfonthandle/index.md) | Identifies one font face loaded into a text backend generation. |
| [TextFontStyle](textfontstyle/index.md) | Selects the typographic slant requested from a font face. |
| [TextGlyph](textglyph/index.md) | Describes one positioned glyph emitted by Unicode shaping. |
| [TextLayout](textlayout/index.md) | Contains immutable positioned glyphs and aggregate bounds for one shaped string. |
| [TextMetrics](textmetrics/index.md) | Describes scalable metrics for one font face and logical size. |
| [TextShapingOptions](textshapingoptions/index.md) | Defines language and script hints for one shaping operation. |
| [TextStyle](textstyle/index.md) | Defines immutable font selection and sizing for one shaping operation. |

