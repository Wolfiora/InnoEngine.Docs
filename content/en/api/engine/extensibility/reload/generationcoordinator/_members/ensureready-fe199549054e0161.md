---
uid: api.fe199549054e0161ecfb6aab956ac2aff8ba163040e21659d368830f038a51ce
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.EnsureReady(System.String)"
source: xml
reviewed: 774430de9feb42d45762f7ff20bac3df25e5bf4cc19befe409ac896d0d42bff1
title: "EnsureReady"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Rejects work while a candidate, retained context or terminal failure is pending.

**Parameter `operation`:** The caller's operation name included in rejection diagnostics.

**Exception `T:System.InvalidOperationException`:** Admission is blocked or the host requires restart.
