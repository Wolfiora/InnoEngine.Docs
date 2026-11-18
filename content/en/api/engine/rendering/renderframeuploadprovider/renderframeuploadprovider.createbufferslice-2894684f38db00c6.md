---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2894684f38db00c6fd4f0c4b16ae952a0978506fe8bb90727a5d15af13eca904
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderFrameUploadProvider.CreateBufferSlice(Inno.Rendering.PersistentBufferHandle,System.Int32,System.Int32,Inno.Rendering.RenderBufferUsage,System.UInt64)
title: RenderFrameUploadProvider.CreateBufferSlice
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: 6dc9668cbc1dc21a79a24de4fdc2e8efc2415a330da1e5aca1a91a98bb78f558
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
