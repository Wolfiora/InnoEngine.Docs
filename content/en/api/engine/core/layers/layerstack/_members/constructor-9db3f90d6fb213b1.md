---
uid: api.9db3f90d6fb213b1a3391f27952190b44a1a5981c426f13ceff9af15ba7d35a3
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.#ctor(System.Func{Inno.Core.Events.EventHub})"
source: xml
reviewed: 83539420a767e56afe5391afffb60dc4a52a67b9d53bf2824318eddb58611104
title: "Constructor"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Creates a layer stack that obtains one event scope for each attachment.

**Parameter `eventHubFactory`:** The factory used to create a distinct event hub for every attached layer.

**Exception `T:System.ArgumentNullException`:** Thrown when `eventHubFactory` is `null`.
