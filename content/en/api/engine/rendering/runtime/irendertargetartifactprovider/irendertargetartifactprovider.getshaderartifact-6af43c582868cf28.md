---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6af43c582868cf2875ff7b7a08307732e97e2b9369c991d06c9a8f49e67daf16
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)
title: IRenderTargetArtifactProvider.GetShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: e3ad1affb8d3c0b698f9e90b5bd118d41d90b113b8a4cc231987f13e20b5cd3f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `shader`:** The imported runtime shader description.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active device capabilities used to select a packaged backend target.

**Parameter `artifact`:** Receives the validated source-free artifact when it exists.

## Returns

The current artifact availability. `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that `artifact` is non-null.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `shader` or `capabilities` is `null`.
