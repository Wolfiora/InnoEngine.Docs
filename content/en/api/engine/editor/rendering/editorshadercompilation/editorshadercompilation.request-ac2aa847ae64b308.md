---
uid: api.ac2aa847ae64b308aaa2e1df821c44c84893214b91958e1e2f35316cc166b1cc
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.EditorShaderCompilation.Request(Inno.Rendering.Assets.ShaderAsset,Inno.Rendering.Assets.RenderShaderVariant)"
source: xml
reviewed: 37b9ae13979d2b87f46be283ae7a5610644a54387dfa12de2ade1db78db8182d
title: "EditorShaderCompilation.Request"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Requests current compilation and reads its explicit last-good status.

## Parameters

**Parameter `shader`:** Current generation shader asset, not retained by the service.

**Parameter `variant`:** Exact static keyword selection.

## Returns

A detached status snapshot.
