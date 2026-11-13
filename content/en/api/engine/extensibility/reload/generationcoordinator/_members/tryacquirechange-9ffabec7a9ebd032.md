---
uid: api.9ffabec7a9ebd03244bc4056ee45945aba8c22f71e6262be3add13d5c360165f
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.TryAcquireChange(System.String,System.IDisposable@)"
source: xml
reviewed: 9083479332e1c1d807c96cef47a355ed02779a75a32042f5dfcfb598f370e51e
title: "TryAcquireChange"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Tries to reserve exclusive owner-controlled publication without disturbing active read leases.

**Parameter `operation`:** The operation name used when a terminal failure rejects admission.

**Parameter `reservation`:** Receives the exclusive reservation, or null when the caller must defer mutation.

**Returns:** True only when no reader, generation change or retirement is active.

**Exception `T:System.InvalidOperationException`:** The generation owner is Faulted and requires a host restart.
