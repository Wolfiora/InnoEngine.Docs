---
uid: api.3beeb3e2f19a196b20dc7535b38abaf941be85d4c2ad0b5dcccbb0ba920cc02c
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Dispose"
source: xml
reviewed: 1ef8259f35fede16f6f10262d1919a7fe2ea4b026d8d92720158876c8c95b0be
title: "Dispose"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Unsubscribes assembly discovery and begins unload of every module owned by this host.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A generation still owns live work. Discovery stops, but modules are not unloaded or forgotten.
