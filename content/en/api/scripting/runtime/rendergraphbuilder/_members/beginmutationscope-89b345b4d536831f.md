---
uid: api.89b345b4d536831f9c290c1ebad071baa1437bb34c87c57ce5cb6368466e6136
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderGraphBuilder.BeginMutationScope"
source: xml
reviewed: 8654d69c49f86513b0663f24a01079b55d25238f858816d113ce7239551c4e7b
title: "BeginMutationScope"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Begins an isolated graph mutation that rolls back every added pass and resource unless committed.

**Returns:** A mutation scope used by reloadable features and other failure-isolated producers.
