---
uid: api.94ad020651dfd50ec25dcff8b219cacf1a18ac5a6cb990aa7b4e5bb9a95c1175
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.Dispose"
source: xml
reviewed: 5cb43c70ceac39e4ca960f5d7134fd41ee30be3d755cf872493a2c03ac87a54d
title: "TypeCatalog.Dispose"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Unregisters type discovery and releases all active type-registry snapshots.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A generation still owns live work. Type discovery and unfinished snapshots remain owned until host restart.
