---
uid: api.47e21acfc819996050fcb138662357ce5cfad5489692680f592efabaa62a4975
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSubsystemPipeline.Dispose"
source: xml
reviewed: 1dae7725bf8b21b0f0e0d16376e699b4290f7c656cef601c638171512aac2509
title: "Dispose"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Detaches and disposes every subsystem in reverse dependency order.

**Exception `T:System.AggregateException`:** Thrown after every release stage is attempted when one or more subsystems fail to detach or dispose.
