---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b02e2331696c46d41d3ec8a279657012b3d6839fe1c4a40cc520142246a781d6
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@)
title: IRenderTargetArtifactProvider.GetTextureArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: df84fcac7819afdea40aaedcab26ca9ee684c6bbba46348406c869a3f4a0c15e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Stable reference to the imported texture slot.

**Parameter `artifact`:** Receives immutable KTX bytes when the artifact exists and is non-empty.

## Returns

The current artifact availability. `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that `artifact` is non-empty.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `texture` is invalid.
