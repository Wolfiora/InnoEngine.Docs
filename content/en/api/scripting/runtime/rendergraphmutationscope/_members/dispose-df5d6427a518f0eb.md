---
uid: api.df5d6427a518f0eb1f96eade39fe22e83c54ad3167939278ce5465797fb5cd5f
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphMutationScope.Dispose"
source: xml
reviewed: e8c449454e3bea634962886faed5ddb7d74d219fd4c80a5bbc5fd4f27f14e74b
title: "Dispose"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Ends the current scope and removes all uncommitted additions, including output and name declarations.

**Exception `T:System.InvalidOperationException`:** A nested mutation scope must be ended first.
