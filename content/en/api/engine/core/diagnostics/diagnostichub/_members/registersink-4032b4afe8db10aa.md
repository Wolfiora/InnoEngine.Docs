---
uid: api.4032b4afe8db10aa023cdd1e5e11061e82f89cdd7b4f15b97cca443357c6cbbe
symbol: "engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.RegisterSink(Inno.Core.Diagnostics.IDiagnosticSink)"
source: xml
reviewed: 0a6481ee849dd9436f1616f0c252aa66dd92eef3af21e81f264f7de6ff659fe3
title: "RegisterSink"
kind: api
owners: [Inno.Core.Diagnostics]
apiSurface: source-clr
---

Registers a sink and synchronously replays every active report before registration completes.

**Parameter `sink`:** The sink that receives current and future reports.

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the sink cannot accept the current diagnostic snapshot.
