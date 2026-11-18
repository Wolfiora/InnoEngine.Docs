---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4032b4afe8db10aa023cdd1e5e11061e82f89cdd7b4f15b97cca443357c6cbbe
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.RegisterSink(Inno.Core.Diagnostics.IDiagnosticSink)
title: DiagnosticHub.RegisterSink
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 3b9a505d782b5d81972414775055abd437993bd6025035cacc1057636e9a55c3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `sink`:** The sink that receives current and future reports.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `sink` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when the sink cannot accept the current diagnostic snapshot.
