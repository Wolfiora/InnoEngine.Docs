---
uid: api.f7989abd16c4fc043e2b33534fe2248a06165b5fb84f87c0917f6c59b9944fa4
symbol: "engine:Inno.Core.Layers:M:Inno.Core.Layers.Layer.OnDetach"
source: xml
reviewed: 9b42f898252c257bc026e7879760f8f59b42b3fbf20f44b1daa38c0e6da37b57
title: "OnDetach"
kind: api
owners: [Inno.Core.Layers]
apiSurface: source-clr
---

Runs while the layer is leaving its stack and before its event scope is released.

## Remarks

This callback also compensates a partially failed attachment. Throwing `T:Inno.Core.Execution.RetirementPendingException` retains ownership and permits a later cleanup retry. Completed cleanup steps must not be repeated on that retry.
