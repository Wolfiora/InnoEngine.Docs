---
uid: api.inno.extensibility.modules.19cf03aa2fb1cee4
symbol: "engine:Inno.Extensibility.Modules:T:Inno.Extensibility.Modules.AssemblyModuleInfo"
source: xml
reviewed: 24d061d41810dec11e5f00334ebe27c43948a632fa062d6b4e344d30f04ef13d
title: "AssemblyModuleInfo"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
contracts:
- project.inno-extensibility-modules#source-and-publication-contract
aliases: []
---

Provides non-owning diagnostic information about an active assembly module.

## Parameters

**Parameter `handle`:** The opaque handle validated by this operation.

**Parameter `moduleName`:** The string value used to initialize this instance.

**Parameter `generation`:** The owner generation used to reject stale handles or snapshots.

**Parameter `collectible`:** The bool value used to initialize this instance.

**Parameter `externallyOwned`:** The bool value used to initialize this instance.

**Parameter `domain`:** The assembly domain value used to initialize this instance.

**Parameter `scope`:** The assembly scope value used to initialize this instance.

**Parameter `status`:** The assembly module status value used to initialize this instance.

**Parameter `assemblyNames`:** The immutable assembly names exposed for this active module generation.
