---
uid: api.e83dc15a575ca81684710232a0d5f7510d4c0cf1d9aea13f73358b13120deda6
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange)"
source: xml
reviewed: eb273a3f6b985c2027cbb1eef3e89ee5ffe2050f5db54f1bb827c87f9bbf2f12
title: "Execute"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Applies one prepared assembly reload together with every registered editor feature migration.

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Content recovery prepared before type publication, applied before Editor recovery, and restored before old values.

**Returns:** A monitor that observes cooperative unloading of assemblies retired by the committed reload.

**Exception `T:System.ArgumentNullException`:** Thrown when `reload` is `null`.

**Exception `T:System.AggregateException`:** Thrown when activation fails and one or more feature or assembly rollback stages also fail.
