---
uid: api.89e103224fae60b4a646836729d8161c3b75b1d1a814663f14fa11f415f0ab09
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.AcquireOperation(System.String)"
source: xml
reviewed: 3042fef00177bd3b8dffc9463dd4dcfd847c5e6fe63d72fd5f31af416278ae6e
title: "AcquireOperation"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Defers automatic assembly publication until a synchronous typed operation releases its current owners.

**Parameter `operation`:** The operation name used for admission diagnostics.

**Returns:** A scope held across every access to the captured generation; publication may borrow it on its own thread.

**Exception `T:System.InvalidOperationException`:** The catalog is inactive, another thread is publishing, or the shared generation owner is Faulted.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Generation retirement has failed while dependent resources remain owned.
