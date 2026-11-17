---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2894684f38db00c6fd4f0c4b16ae952a0978506fe8bb90727a5d15af13eca904
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderFrameUploadProvider.CreateBufferSlice(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32,Inno.Rendering.RenderBufferUsage,System.UInt64)
title: RenderFrameUploadProvider.CreateBufferSlice
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 368bd8bfcd3e71a0ccf0f1a68874b196271c6342fb1891f11c67c89f7571f8fd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `buffer`:** The persistent upload page backing the slice.

**Parameter `firstElement`:** The zero-based first uploaded element.

**Parameter `elementCount`:** The positive number of uploaded elements.

**Parameter `usage`:** The GPU uses supported by the uploaded range.

**Parameter `frameIndex`:** The render frame during which the slice remains valid.

## Returns

An opaque frame-scoped buffer slice.
