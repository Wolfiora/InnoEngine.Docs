---
uid: api.94ad020651dfd50ec25dcff8b219cacf1a18ac5a6cb990aa7b4e5bb9a95c1175
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.Dispose"
source: xml
reviewed: be8edff3d8f918cba0c8e9a39edc52494f7dee9f85465274a69989ee049d8a65
title: "Dispose"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Unregisters type discovery and releases all active type-registry snapshots.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A generation still owns live work. Type discovery and unfinished snapshots remain owned until host restart.
