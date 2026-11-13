---
title: Inno.Text.Assets
description: Import OpenType containers into compact runtime metadata and immutable encoded font data.
uid: project.inno-text-assets
kind: project
owners:
  - Inno.Text.Assets
---
# Inno.Text.Assets

`FontImporter`, registered as `inno.text.font`, integrates `.ttf`, `.otf`, `.ttc` and `.otc` sources with the existing asset pipeline. Runtime scripts consume `FontAsset`; they do not reference this authoring project.

## Import contract

Import reads the supplied source bytes, validates an sfnt/OpenType signature or a collection header and stages two artifacts: `runtime` metadata and the original encoded `font-data`. Collection count must be positive, at most 65,535, and fit in the supplied header. Truncated or unrecognized containers fail with `InvalidDataException`.

Header acceptance does not validate every font table or guarantee that the native backend will accept a face. Runtime loading remains a separate failure boundary. The importer does not invent a blank fallback face when input is invalid.

Artifact writes observe cancellation through the pipeline's writer. The enclosing asset transaction owns publication, identity, Missing transitions and deployment. Runtime loads use committed artifacts instead of rereading mutable project source files.

## Use and reference

Place a supported source under the project's assets, let normal import complete and resolve its `FontAsset` inside the asset execution scope. Follow [shape text and rasterize glyphs](../../manual/text/shape-text.md) after the artifact is available.

[FontImporter members](../../api/engine/text/assets/index.md) include the supported extension list and protected import implementation.
