---
uid: api.fcc17cfbc95b862237f99d998d10a61de18a7449bab0d7fc84400c644aa006a6
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.GetShaderArtifact(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities,Inno.Rendering.Assets.RenderShaderArtifact@)"
source: xml
reviewed: 6e5a0b26df4c6b3f54c71fa43f2d6344d007213fb65881df58ecb4f878b578c8
title: "GetShaderArtifact"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Returns a matching compiled shader when available and schedules a new candidate when source state changed.

**Parameter `shader`:** The imported backend-neutral shader asset.

**Parameter `variant`:** The exact material keyword selection.

**Parameter `capabilities`:** The active device capability snapshot used to select the target compiler profile.

**Parameter `artifact`:** Receives the current candidate or the last-good artifact while a replacement is compiling.

**Returns:** `F:Inno.Rendering.Runtime.RenderTargetArtifactStatus.Ready` when a current or last-good artifact is usable; otherwise, the exact pending or failed state of the first candidate.

**Exception `T:System.ObjectDisposedException`:** Thrown when this provider has been disposed.

**Exception `T:System.ArgumentNullException`:** Thrown when `shader` or `capabilities` is `null`.
