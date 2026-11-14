---
uid: api.89e103224fae60b4a646836729d8161c3b75b1d1a814663f14fa11f415f0ab09
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.AcquireOperation(System.String)"
source: xml
reviewed: 7ee04d9d64f8e0db4031ce905e718f68a9c2791b2a2624feaa80f9a0414cbdf5
title: "TypeCatalog.AcquireOperation"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Defers automatic assembly publication until a synchronous typed operation releases its current owners.

## Parameters

**Parameter `operation`:** The operation name used for admission diagnostics.

## Returns

A scope held across every access to the captured generation; publication may borrow it on its own thread.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The catalog is inactive, another thread is publishing, or the shared generation owner is Faulted.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Generation retirement has failed while dependent resources remain owned.
