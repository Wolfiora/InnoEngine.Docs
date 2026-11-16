---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6af43c582868cf2875ff7b7a08307732e97e2b9369c991d06c9a8f49e67daf16
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)
title: IRenderTargetArtifactProvider.GetShaderArtifact
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 9190264a64b1d332c6de399e40c3eb93fb03e52cf5c6012c19aafdc6f957c722
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
