---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7e89d4891450edbe1d68a50f4daeae916f923a3937b7b8a3c49bc18f26e8f2a2
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)
title: ContentRenderTargetArtifactProvider.GetShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: d11894db57dc064a2ffc2daac6ec5d3f315fe1c5ea4fd77c7f6661ab05073b26
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `shader`:** The imported backend-neutral shader asset.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active graphics capability snapshot.

**Parameter `artifact`:** Receives the decoded artifact when present.

## Returns

`F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when the deployed artifact exists; otherwise, `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable`.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Thrown when a deployed artifact exists but is corrupt or mismatched.

**Exception `T:System.ArgumentNullException`:** Thrown when `shader` or `capabilities` is `null`.
