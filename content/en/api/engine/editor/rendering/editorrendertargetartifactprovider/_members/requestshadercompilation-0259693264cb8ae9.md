---
uid: api.0259693264cb8ae9a615bc71e012d421bd25acd41e824e1a5a67d587ff5edb5b
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorRenderTargetArtifactProvider.RequestShaderCompilation(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant,Inno.Rendering.GraphicsCapabilities)"
source: xml
reviewed: 33cdcbef62b1d3b76c43ee600355443aa7ae501a35085f6622ec2450c7f45566
title: "RequestShaderCompilation"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Schedules compilation if required and reports saving-independent state for the exact shader, variant and device target.

**Parameter `shader`:** Current imported shader.

**Parameter `variant`:** Selected keyword variant.

**Parameter `capabilities`:** Current device capabilities.

**Returns:** A detached status and diagnostic snapshot; last-good is explicit and never implies current-source success.
