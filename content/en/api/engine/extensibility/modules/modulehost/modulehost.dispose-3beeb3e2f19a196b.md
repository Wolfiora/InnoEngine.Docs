---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3beeb3e2f19a196b20dc7535b38abaf941be85d4c2ad0b5dcccbb0ba920cc02c
symbol: engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Dispose
title: ModuleHost.Dispose
kind: api
owners:
- Inno.Extensibility.Modules
apiSurface: source-clr
reviewed: 68d5dc08a750e56b190d0cda0270fc195272ae95d80ab52e444afadf1a43548d

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Unsubscribes assembly discovery and begins unload of every module owned by this host.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A generation still owns live work. Discovery stops, but modules are not unloaded or forgotten.
