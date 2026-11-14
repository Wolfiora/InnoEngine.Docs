---
uid: api.9fb917f2b14828f741c61cbec332ebb198fa050031b46411805119e8d87c9256
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.GenerationCoordinator.AcquireRead(System.String)"
source: xml
reviewed: 2d0aec383792a7d4835b648e461d6a6929ce63e700d8704ad54711163fc26490
title: "GenerationCoordinator.AcquireRead"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Pins generation admission for a Build or Export operation, including asynchronous snapshot consumers.

**Parameter `operation`:** The diagnostic operation name.

**Returns:** A lease that must be disposed after every snapshot and asynchronous consumer has retired.

**Exception `T:System.InvalidOperationException`:** Admission is blocked by another operation or a retirement.
