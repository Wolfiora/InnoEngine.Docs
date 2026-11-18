---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.787f5ee531161e1e2d26abd6e9c5aad8d889720f46791d41217f62a56c0787c3
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureContainer,System.ReadOnlySpan{System.Byte},System.Boolean,System.String)
title: IRenderDevice.CreateTexture
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: c9dbf5be95319ea6bff3aea0bac0e8fd4e879291b9ccf8d6c1f9dea664b7e980
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `container`:** Portable texture container kind.

**Parameter `data`:** Complete encoded container bytes.

**Parameter `sRgb`:** Whether sampling decodes the stored color from sRGB.

**Parameter `name`:** Debug and diagnostic name.

## Returns

An opaque device-generation handle.

## Exceptions

**Exception `T:System.NotSupportedException`:** Thrown when the device cannot consume encoded containers.
