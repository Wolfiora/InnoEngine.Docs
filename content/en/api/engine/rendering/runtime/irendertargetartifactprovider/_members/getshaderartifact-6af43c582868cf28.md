---
uid: api.6af43c582868cf2875ff7b7a08307732e97e2b9369c991d06c9a8f49e67daf16
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.IRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)"
source: xml
reviewed: 6421c5f1f283b9dd218ddeb80c4674e1c024944ee0a8e66e6f0fb210672bb74c
title: "GetShaderArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Resolves the target shader matching one runtime asset, variant, and device capability snapshot.

**Parameter `shader`:** The imported runtime shader description.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active device capabilities used to select a packaged backend target.

**Parameter `artifact`:** Receives the validated source-free artifact when it exists.

**Returns:** The current artifact availability. `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` guarantees that `artifact` is non-null.

**Exception `T:System.ArgumentException`:** Thrown when `shader` or `capabilities` is `null`.
