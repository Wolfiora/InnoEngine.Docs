---
title: Inno.Adapter.Text.FreeTypeHarfBuzz
description: Convert the narrow native text bridge into neutral shaping and coverage results.
uid: project.inno-adapter-text-freetypeharfbuzz
kind: project
owners:
  - Inno.Adapter.Text.FreeTypeHarfBuzz
---
# Inno.Adapter.Text.FreeTypeHarfBuzz

This adapter implements `ITextBackend` using the pinned FreeType and HarfBuzz sources behind `Inno.Native.Text`. It owns one native text context, converts results into managed values and keeps pointers out of the script surface.

## Backend lifetime contract

Construction creates and validates a native context. `LoadFont` rejects empty bytes and negative face indices, and the native runtime copies the source before returning a local face handle. `ReleaseFont` treats the zero handle as a no-op; an unknown nonzero handle is a native failure. Never transfer handles between backend instances, even if their numeric values coincide.

Calls check that the backend is active. The owner serializes operations; there is no internal concurrency protection around a face's mutable size. `Dispose` is idempotent after its disposed flag is set and destroys all remaining faces with the context. It does not promise recovery or retry after native destruction throws.

## Shaping and rasterization

Shape encodes text and hints as UTF-8, queries the required glyph count, fills caller-owned storage and converts glyphs and metrics. Clusters are UTF-8 byte offsets. Letter spacing is added to horizontal or vertical advances according to direction. Weight/slant fields do not select or synthesize another face in this implementation.

Rasterize first queries bitmap size, allocates exact managed storage and fills 8-bit coverage. It returns no texture or atlas. Invalid handles, unsupported font data and native failures become explicit exceptions; bridge errors are released after their messages are read.

`FreeTypeHarfBuzzTextBackendProvider` registers the built-in backend ID without initializing the native service. Each creation returns a new caller-owned backend. See the [backend guide](../../backends/text.md) and [exact members](../types/adapter-text-freetypeharfbuzz/index.md).
