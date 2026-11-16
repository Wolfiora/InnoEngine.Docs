---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4032b4afe8db10aa023cdd1e5e11061e82f89cdd7b4f15b97cca443357c6cbbe
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.DiagnosticHub.RegisterSink(Inno.Core.Diagnostics.IDiagnosticSink)
title: DiagnosticHub.RegisterSink
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 257b19c97c3dad7db2fd3f58ccb646383f04363659feee2c00d6168884dd7a3e
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
