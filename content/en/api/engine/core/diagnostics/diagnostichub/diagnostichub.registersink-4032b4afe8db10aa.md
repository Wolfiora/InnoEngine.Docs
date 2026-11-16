---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4032b4afe8db10aa023cdd1e5e11061e82f89cdd7b4f15b97cca443357c6cbbe
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.RegisterSink(Inno.Core.Diagnostics.IDiagnosticSink)
title: DiagnosticHub.RegisterSink
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: da69df30f6a01b1df05b903238b9c83d81899c6fe53ce7c4a763f43927e47463
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
