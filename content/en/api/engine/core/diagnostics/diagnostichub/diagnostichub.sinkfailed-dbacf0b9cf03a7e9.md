---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dbacf0b9cf03a7e907d6015f72fad6c3253eae04d936a28c28d51f4c99e0c077
symbol: engine:Inno.Core.Diagnostics:E:Inno.Core.Diagnostics.DiagnosticHub.sinkFailed
title: DiagnosticHub.sinkFailed
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 8d8365e86bd87fa772b85036dd583fce9242914fa997e0487b087d16aec7360e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Observers execute synchronously during publication. Without an observer, or when an observer throws, the current implementation reports to standard error; a failure of that secondary writer can propagate. Unregistration or quarantine does not dispose the presentation sink.
