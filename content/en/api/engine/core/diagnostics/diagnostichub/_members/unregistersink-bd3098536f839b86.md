---
uid: api.bd3098536f839b86e527631b2e20c976a45b90a34bbd442b17d1a13ff6262c46
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.UnregisterSink(Inno.Core.Diagnostics.IDiagnosticSink)"
source: xml
reviewed: d818f31ceb07ec8ec418a70f3927a788c8c60ca62f57d59b09d85bff382f3ff1
title: "UnregisterSink"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Unregisters a sink so it receives no future diagnostic changes.

**Parameter `sink`:** The sink to remove when registered.

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.
