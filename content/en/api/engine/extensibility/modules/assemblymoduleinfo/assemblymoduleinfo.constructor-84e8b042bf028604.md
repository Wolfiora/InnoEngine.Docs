---
uid: api.84e8b042bf0286045bb5ef7ed2ee2b128f860ce76df563dab962b2813678dda4
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyModuleInfo.#ctor(Inno.Extensibility.Modules.AssemblyModuleHandle,System.String,System.Int32,System.Boolean,System.Boolean,Inno.Extensibility.Modules.AssemblyDomain,Inno.Extensibility.Modules.AssemblyScope,Inno.Extensibility.Modules.AssemblyModuleStatus,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 83e9c65a32046ec270aa9797b5916b3a8dec92be5dfd059514160c4953dc094f
title: "AssemblyModuleInfo.Constructor"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Provides non-owning diagnostic information about an active assembly module.

**Parameter `handle`:** The opaque handle validated by this operation.

**Parameter `moduleName`:** The string value used to initialize this instance.

**Parameter `generation`:** The owner generation used to reject stale handles or snapshots.

**Parameter `collectible`:** The bool value used to initialize this instance.

**Parameter `externallyOwned`:** The bool value used to initialize this instance.

**Parameter `domain`:** The assembly domain value used to initialize this instance.

**Parameter `scope`:** The assembly scope value used to initialize this instance.

**Parameter `status`:** The assembly module status value used to initialize this instance.

**Parameter `assemblyNames`:** The immutable assembly names exposed for this active module generation.
