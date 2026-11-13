---
uid: api.f321735955ea3e56d72410242f33fbf4620f6ba602f2b13f78eec7a6dc1026f6
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OnActivationRolledBack(\u00600,\u00600)"
source: xml
reviewed: 4049b21350a20a1620c395047abf85efe7c8462249266c2d6e6b4370b8096a73
title: "OnActivationRolledBack"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Reverses lifecycle work performed while activating a candidate snapshot.

**Parameter `previous`:** The restored active snapshot, or `null` when none existed.

**Parameter `candidate`:** The rejected candidate snapshot.

## Remarks

Ordinary failures are reported through ``M:Inno.Extensibility.Types.TypeRegistry`1.OnCleanupFailed(System.String,System.Exception)`` and aggregated across registries. Unfinished retirement retains dependencies and stops further rollback until the host is restarted.
