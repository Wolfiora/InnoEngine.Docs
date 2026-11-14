---
uid: api.6af43c582868cf2875ff7b7a08307732e97e2b9369c991d06c9a8f49e67daf16
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)"
source: xml
reviewed: 8c98e0113cee2fa8fbf4b8f8f7fdde3a1cd1ae1e1a69a4e77b116186376361df
title: "IRenderTargetArtifactProvider.GetShaderArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves the target shader matching one runtime asset, variant, and device capability snapshot.

## Parameters

**Parameter `shader`:** The imported runtime shader description.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active device capabilities used to select a packaged backend target.

**Parameter `artifact`:** Receives the validated source-free artifact when it exists.

## Returns

The current artifact availability. `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that `artifact` is non-null.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `shader` or `capabilities` is `null`.
