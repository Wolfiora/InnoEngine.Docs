---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2bc602ecdd0fe93d557013f65171df07618a7b4c164c1a296a2365784faec4ac
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.ReadOnlyMemory{System.Byte}@)
title: ContentRenderTargetArtifactProvider.GetTextureArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: a4da83d9c29bdc17c5368130098afc51402e62973dd8473de076dd415824d16c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** The imported texture description.

**Parameter `artifact`:** Receives immutable KTX bytes when present.

## Returns

`F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when the deployed artifact exists; otherwise, `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable`.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when a deployed texture artifact is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `texture` is `null`.
