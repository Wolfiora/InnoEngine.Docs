---
uid: api.ac2aa847ae64b308aaa2e1df821c44c84893214b91958e1e2f35316cc166b1cc
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.Request(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant)"
source: xml
reviewed: 66e1394dd36a833560850136b6f44c8c3387799f53bae5757179ad43ba9890d8
title: "Request"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Requests current compilation and reads its explicit last-good status.

**Parameter `shader`:** Current generation shader asset, not retained by the service.

**Parameter `variant`:** Exact static keyword selection.

**Returns:** A detached status snapshot.
