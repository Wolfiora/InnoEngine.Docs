---
uid: api.5c64ac7d4059f2da9685b25538a675a5570070ccebcc4c3ca1e52ecafec34fff
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.Advance"
source: xml
reviewed: c815428bb7aed2a0e1d4d7f905f8748afb532132e189f36f5f7ff77586c48cf2
title: "GenerationCoordinator.Advance"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Runs a due Full GC/finalizer/Full GC cycle only after candidate stack frames have unwound.

**Returns:** True only when every tracked context is unreachable and admission is ready.

**Exception `T:System.InvalidOperationException`:** The gate is terminally Faulted.

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** A retained context exceeded the configured deadline.
