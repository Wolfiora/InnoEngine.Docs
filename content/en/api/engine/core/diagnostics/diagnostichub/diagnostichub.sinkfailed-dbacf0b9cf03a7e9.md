---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dbacf0b9cf03a7e907d6015f72fad6c3253eae04d936a28c28d51f4c99e0c077
symbol: engine:Inno.Core.Diagnostics:E:Inno.Core.Diagnostics.DiagnosticHub.sinkFailed
title: DiagnosticHub.sinkFailed
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: a1d08adebee82d5aaeb562574e813c9d7484912026ad0b5ab859bb33b12c16a4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Observers execute synchronously during publication. Without an observer, or when an observer throws, the current implementation reports to standard error; a failure of that secondary writer can propagate. Unregistration or quarantine does not dispose the presentation sink.
