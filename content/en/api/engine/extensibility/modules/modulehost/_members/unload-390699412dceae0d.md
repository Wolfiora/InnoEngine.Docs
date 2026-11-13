---
uid: api.390699412dceae0d516db2319a4c2a059e6bb270acbad9fe05ff452368e6a029
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.Unload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.AssemblyModuleHandle})"
source: xml
reviewed: 97647f8c1f17f9baacff9b302af795e8198f06999a066089984fa888ab3a4f49
title: "Unload"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Removes several active modules in one catalog transaction, then requests unload in reverse dependency order.

**Parameter `modules`:** The distinct active module handles to remove.

**Returns:** A monitor that completes after every collectible context becomes unreachable.

**Exception `T:System.ArgumentNullException`:** Thrown when `modules` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when a handle is duplicated or is not active.
