---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c6614ccda69797a5ef129403f4a7fcc4234f81d52be5187babfec2ffa246a2c7
symbol: engine:Inno.Rendering:M:Inno.Rendering.GraphicsProgramArtifactCodec.Decode(System.ReadOnlySpan{System.Byte},Inno.Rendering.RenderVertexLayout)
title: GraphicsProgramArtifactCodec.Decode
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 7a318fe19c2f197427f26e530617b78e5f75d54216766dd954b3ecfc2d120853
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `bytes`:** The complete current artifact, including its strict magic header.

**Parameter `vertexLayout`:** The caller's vertex layout, or null for a procedural pipeline.

## Returns

A detached descriptor containing the validated binaries, bindings, and raster state.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The input is truncated, oversized, malformed, or contains trailing data.
