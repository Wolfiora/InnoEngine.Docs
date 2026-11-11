---
title: FreeType and HarfBuzz text backend
description: Understand the font backend, native ownership and its current typography boundaries.
uid: backends.text
kind: explanation
owners:
  - Inno.Adapter.Text.FreeTypeHarfBuzz
  - Inno.Native.Text
  - Inno.Build.Toolchains.Text
contracts:
  - project.inno-adapter-text-freetypeharfbuzz#backend-lifetime-contract
  - project.inno-native-text#native-lifetime-contract
---
# FreeType and HarfBuzz text backend

InnoEngine uses HarfBuzz to shape a Unicode run and FreeType to read face metrics and rasterize glyph coverage. A narrow native facade and managed adapter expose neutral Text results. The consumer decides how those results become visible UI or scene content.

## Data flow

An imported `FontAsset` identifies committed encoded font data. A session acquires its artifact lease, loads a native face and reuses it for the same font content version and face index. Shaping produces positions; rasterization produces CPU coverage. Runtime stop releases faces and artifact leases before the backend's final disposal.

The native runtime copies input font bytes and owns each face. Managed code encodes strings as UTF-8 and uses query-then-fill buffers. Returned managed glyphs and bitmaps do not borrow those temporary buffers. Raw native callers retain all pointer, capacity and error-release obligations described in the [ABI contract](../api/projects/inno-native-text.md#native-lifetime-contract).

## Supported scope

The implementation handles explicit collection faces, size, Unicode shaping hints, direction and letter spacing. It supplies 8-bit glyph coverage and metrics. It does not provide font fallback, paragraph wrapping, automatic bidirectional run segmentation, GPU atlases, a Scene text component or synthesized weight/slant. These limitations apply even if an upstream library has additional capabilities.

Cluster indices use UTF-8 byte positions. A glyph can represent several source characters, and character count need not equal glyph count. Preserve that relationship when implementing selection or hit testing instead of indexing strings with glyph IDs.

## Deployment and upstream provenance

The product must deploy a Text native library matching its generated binding and target configuration. Source extraction on a Windows host is not macOS, browser or device validation. Missing library initialization fails explicitly.

The engine's `extern/freetype` and `extern/harfbuzz` gitlinks pin the inputs. Their original license and notice files remain authoritative with the source distribution. Consult [FreeType](https://freetype.org/) and [HarfBuzz](https://harfbuzz.github.io/) for upstream mechanisms; their full feature lists are not promises made by the engine wrapper.

Start with [shape text and rasterize glyphs](../manual/text/shape-text.md), [add a backend](../extending/text-backends.md), or [prepare the native component](../api/projects/inno-build-toolchains-text.md).
