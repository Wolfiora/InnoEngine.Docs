---
uid: api.44a996c7749ef7c54d64b1093aa0405afa1b2e6ed5676570173eb2dd6025f1aa
symbol: "scripting:Inno.Editor.Shaders:M:InnoEditor.Shaders.MaterialDocuments.Presentation(InnoEngine.Rendering.ShaderAsset,InnoEngine.Rendering.ShaderPropertyId,System.String@)"
source: xml
reviewed: b738a72b7f1f76caf00164c2438be71c88ecf3ab247efa8c14304d715a4e7170
title: "Presentation"
kind: api
owners: [Inno.Editor.Shaders]
apiSurface: editor-script
apiScope: Editor
---

Reads parameter presentation from the current authoring Shader graph.

**Parameter `shader`:** The canonical Shader used by the Material.

**Parameter `propertyId`:** The stable binding identity.

**Parameter `error`:** Receives the source diagnostic, or an empty string when presentation is available.

**Returns:** Detached presentation values; an unavailable graph uses the ordinary presentation defaults.
