---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.787f5ee531161e1e2d26abd6e9c5aad8d889720f46791d41217f62a56c0787c3
symbol: engine:Inno.Rendering:M:Inno.Rendering.IRenderDevice.CreateTexture(Inno.Rendering.RenderTextureContainer,System.ReadOnlySpan{System.Byte},System.Boolean,System.String)
title: IRenderDevice.CreateTexture
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: f1b7c979e5cf22e8d102d477372597b58f887402bd59163717843aee41dec85b
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
