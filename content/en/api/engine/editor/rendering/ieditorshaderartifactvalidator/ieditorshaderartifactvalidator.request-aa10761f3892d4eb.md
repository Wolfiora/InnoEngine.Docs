---
uid: api.aa10761f3892d4eb539adf23d13c9e1c673495f6879f04a4be185682d5261914
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorShaderArtifactValidator.Request(System.Guid,System.UInt64,Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: 0c966ed4d9a6a5859233306976e20dd529950a21d4ac9ef66affae27954dddc6
title: "IEditorShaderArtifactValidator.Request"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Requests or reads validation for an exact document revision and immutable artifact.

## Parameters

**Parameter `documentId`:** Stable Editor document identity.

**Parameter `revision`:** Exact document revision that produced the artifact.

**Parameter `artifact`:** Complete immutable candidate compiled for the active device.

## Returns

Current detached validation state.
