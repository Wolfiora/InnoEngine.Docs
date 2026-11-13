---
uid: api.dbacf0b9cf03a7e907d6015f72fad6c3253eae04d936a28c28d51f4c99e0c077
symbol: "engine:Inno.Core.Diagnostics:E:Inno.Core.Diagnostics.DiagnosticHub.sinkFailed"
source: xml
reviewed: 8ebd55b7b4e843c96294b0f12035bc3ce39dff6b55fc674ffbb1003b7a8365e2
title: "sinkFailed"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Occurs when a diagnostic presentation sink fails and is quarantined.

## Remarks

Observers execute synchronously during publication. Without an observer, or when an observer throws, the current implementation reports to standard error; a failure of that secondary writer can propagate. Unregistration or quarantine does not dispose the presentation sink.
