---
uid: api.aa10761f3892d4eb539adf23d13c9e1c673495f6879f04a4be185682d5261914
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorShaderArtifactValidator.Request(System.Guid,System.UInt64,Inno.Rendering.Assets.RenderShaderArtifact)"
source: xml
reviewed: 86e54118017590a4b5bce9dcbeedd50f5df761bd6ef7b21e6f6bf81d5132356b
title: "Request"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Requests or reads validation for an exact document revision and immutable artifact.

**Parameter `documentId`:** Stable Editor document identity.

**Parameter `revision`:** Exact document revision that produced the artifact.

**Parameter `artifact`:** Complete immutable candidate compiled for the active device.

**Returns:** Current detached validation state.
