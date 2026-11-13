---
uid: api.050998e8bad9c7508171f80555d4f777b2e4475012da75d8779249b88950de7f
symbol: "engine:Inno.Extensibility.Modules:M:Inno.Extensibility.Modules.AssemblyReloadSession.Complete"
source: xml
reviewed: 90a3cc57e565911850310752b6f3de38f6bf433b1f523fb02ba20720bbbad065
title: "Complete"
kind: api
owners: [Inno.Extensibility.Modules]
apiSurface: source-clr
---

Commits an activated reload and begins cooperative unload of the old generation.

**Returns:** The validated assembly unload monitor that represents the completed operation.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A participant still uses its dependencies. Contexts remain owned and no unload monitor is issued.
