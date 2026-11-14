---
uid: api.fac897e7e1af4260b018561f33fee0c51e0771193e6db279ed7b68d943a22e2c
symbol: "engine:Inno.Core.Settings:M:Inno.Core.Settings.ProjectSettingsStore.EnterExecutionScope"
source: xml
reviewed: 8d345099439447de65d297ad5e201f534bd3189efe9f33dda45f154b418797fe
title: "ProjectSettingsStore.EnterExecutionScope"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Binds this settings store to the current asynchronous script execution context.

## Returns

A strict last-in-first-out execution scope owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown after this settings store has been disposed.
