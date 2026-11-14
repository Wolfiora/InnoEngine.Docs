---
uid: api.8039e5fb715d6ab3bce00374c618d69ef14ddda4c1eb76ff737829c10921a0b5
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource})"
source: xml
reviewed: 665b257205409a8ea3530e564b6817cc6e7b332ec89a85377279c47468bc7c22
title: "ModuleHost.BeginReload"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Stages a dependency-ordered set of module additions or replacements as one atomic transaction. Existing modules are matched by their stable module names; an unknown name creates a new module.

**Parameter `requests`:** The complete reverse-dependency reload closure.

**Returns:** A session that publishes or rolls back every candidate together.

**Exception `T:System.ArgumentNullException`:** Thrown when `requests` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when the request set is empty or contains duplicate module names.
