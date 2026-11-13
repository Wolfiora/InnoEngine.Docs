---
uid: api.9fb917f2b14828f741c61cbec332ebb198fa050031b46411805119e8d87c9256
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireRead(System.String)"
source: xml
reviewed: df904f72f23aa7a573b27e2d049096e91e767fe333d08ac5242ea3b8faea44c3
title: "AcquireRead"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Pins generation admission for a Build or Export operation, including asynchronous snapshot consumers.

**Parameter `operation`:** The diagnostic operation name.

**Returns:** A lease that must be disposed after every snapshot and asynchronous consumer has retired.

**Exception `T:System.InvalidOperationException`:** Admission is blocked by another operation or a retirement.
