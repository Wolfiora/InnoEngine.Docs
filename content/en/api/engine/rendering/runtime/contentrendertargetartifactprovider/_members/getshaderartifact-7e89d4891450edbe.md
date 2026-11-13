---
uid: api.7e89d4891450edbe1d68a50f4daeae916f923a3937b7b8a3c49bc18f26e8f2a2
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.ContentRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)"
source: xml
reviewed: d12b3fa239485d1b14d9931195e974255dfb066c29d1b68cdc7322b8cea18f9e
title: "GetShaderArtifact"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Loads and validates one packaged shader target artifact when it exists.

**Parameter `shader`:** The imported backend-neutral shader asset.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active graphics capability snapshot.

**Parameter `artifact`:** Receives the decoded artifact when present.

**Returns:** `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when the deployed artifact exists; otherwise, `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Unavailable`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when a deployed artifact exists but is corrupt or mismatched.

**Exception `T:System.ArgumentNullException`:** Thrown when `shader` or `capabilities` is `null`.
