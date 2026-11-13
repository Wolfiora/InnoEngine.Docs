---
uid: api.fac897e7e1af4260b018561f33fee0c51e0771193e6db279ed7b68d943a22e2c
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.EnterExecutionScope"
source: xml
reviewed: f5bf4f31e5bf168d8b2ea4c54a55c0ce8abf43b438cdd98518f55ac3eea836d2
title: "EnterExecutionScope"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Binds this settings store to the current asynchronous script execution context.

**Returns:** A strict last-in-first-out execution scope owned by the caller.

**Exception `T:System.InvalidOperationException`:** Thrown after this settings store has been disposed.
