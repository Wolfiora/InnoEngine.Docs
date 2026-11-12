---
title: Inno.Text
description: Imported fonts, neutral shaping values, text service contracts and the runtime script facade.
uid: project.inno-text
kind: project
owners:
  - Inno.Text
---
# Inno.Text

This project supplies backend-neutral text shaping and glyph rasterization. Its public values contain fonts, glyphs, metrics and coverage; they contain no Scene, GPU or RmlUi objects. Start with [shape text and rasterize glyphs](../../manual/text/shape-text.md).

## Shaping and glyph contract

`FontAsset` preserves recoverable asset identity and imported runtime metadata. Metadata describes the encoded source length and face count; an unloaded payload yields null metadata. `FontMetadataCodec` validates the exact compact payload size and marker rather than accepting arbitrary serialized data.

`TextStyle` validates finite positive size, nonnegative face index, weight from 1 through 1000, a known slant and finite letter spacing. Construct it explicitly or use `defaultValue`; the zero-initialized struct does not represent a valid positive font size. `TextShapingOptions` validates direction and normalizes blank language/script hints to null. Backend capability determines how these requests are implemented.

`TextLayout` captures glyph values and metrics. `GlyphBitmap` copies exactly `width * height` coverage bytes and rejects invalid dimensions or nonfinite horizontal advance. Treat their exposed buffers and collections as read-only. They do not retain a font backend or grant permission to reuse a glyph ID with another face.

The static `Text` facade borrows the current `ITextService`. `TextExecutionContext.EnterScope` returns a caller-owned, strictly last-in-first-out binding scope; disposing it restores context and does not dispose the service. Normal sessions bind this scope for a complete frame.

## Host and script surfaces

The real Runtime script projection exports the facade, font and text value types under `InnoEngine.Text`. `ITextService`, `ITextBackend`, execution scopes, metadata codec and native face handles remain host-side contracts. Do not infer script availability from the source CLR reference.

`ITextBackend.LoadFont` returns a backend-local face handle. Its owner releases the face before backend disposal and never serializes that handle. [Backend extensions](../../extending/text-backends.md) explain creation and release responsibilities.

## Reference

[Browse text types and exact members](../types/text/index.md). [Runtime ownership](inno-text-runtime.md) and [font importing](inno-text-assets.md) describe the cooperating projects.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../runtime-script/inno-text/index.md)
