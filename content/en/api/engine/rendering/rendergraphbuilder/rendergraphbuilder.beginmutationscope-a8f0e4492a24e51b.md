---
uid: api.a8f0e4492a24e51bd5be27d8e9d7dacc68ff392734ddd7b980010d6918acdbf0
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphBuilder.BeginMutationScope"
source: xml
reviewed: fc07c7b4b3cf637b7326f2077c9c17cb0b7d2636a96a85f322d1d180551cf014
title: "RenderGraphBuilder.BeginMutationScope"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Begins an isolated graph mutation that rolls back every added pass and resource unless committed.

**Returns:** A mutation scope used by reloadable features and other failure-isolated producers.
