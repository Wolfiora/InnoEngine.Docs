---
uid: api.bd3098536f839b86e527631b2e20c976a45b90a34bbd442b17d1a13ff6262c46
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.UnregisterSink(Inno.Core.Diagnostics.IDiagnosticSink)"
source: xml
reviewed: 938d550575d74eff4d61a70562863f5f76ee4b6ff87b26331671748185631a7e
title: "DiagnosticHub.UnregisterSink"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Unregisters a sink so it receives no future diagnostic changes.

## Parameters

**Parameter `sink`:** The sink to remove when registered.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.
