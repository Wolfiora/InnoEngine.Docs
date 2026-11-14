---
uid: api.fe199549054e0161ecfb6aab956ac2aff8ba163040e21659d368830f038a51ce
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureReady(System.String)"
source: xml
reviewed: 555d2ed1a0c272b48de3450ac7a5047ff420db7bff8e3c8225758ad01743c3c9
title: "GenerationCoordinator.EnsureReady"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Rejects work while a candidate, retained context or terminal failure is pending.

## Parameters

**Parameter `operation`:** The caller's operation name included in rejection diagnostics.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Admission is blocked or the host requires restart.
