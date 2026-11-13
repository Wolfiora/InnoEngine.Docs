---
uid: api.df5d6427a518f0eb1f96eade39fe22e83c54ad3167939278ce5465797fb5cd5f
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphMutationScope.Dispose"
source: xml
reviewed: edcc88bb7755b3fc9e387cb3fc3ab04525b6d295a1568b3a79202e3fa861e97f
title: "Dispose"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Ends the current scope and removes all uncommitted additions, including output and name declarations.

**Exception `T:System.InvalidOperationException`:** A nested mutation scope must be ended first.
