---
uid: api.66f15e15c0652a80e795a484f80a6c0cdef8df17313e0fd9d555f70c7642eb3a
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildExecution.Dispose"
source: xml
reviewed: df81037bdcbd126c4093b8380bb20dd67ac8b11543e3ac0585afc85a6531291e
title: "ManagedBuildExecution.Dispose"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Releases exclusive workspace ownership after every compiler and source consumer has finished. Repeated disposal has no effect; reusable owned files remain available for the next operation.

## Exceptions

**Exception `T:System.IO.IOException`:** Completed workspace ownership metadata cannot be recorded; the execution lease is still released.
