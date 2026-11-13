---
uid: api.9db3f90d6fb213b1a3391f27952190b44a1a5981c426f13ceff9af15ba7d35a3
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.#ctor(System.Func{Inno.Core.Events.EventHub})"
source: xml
reviewed: 9495849ead2c10e29e01ac00e389aa4bd65cf379297098cad8eb6946570ebfe3
title: "Constructor"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Creates a layer stack that obtains one event scope for each attachment.

**Parameter `eventHubFactory`:** The factory used to create a distinct event hub for every attached layer.

**Exception `T:System.ArgumentNullException`:** Thrown when `eventHubFactory` is `null`.
