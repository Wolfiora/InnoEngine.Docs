---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.89e103224fae60b4a646836729d8161c3b75b1d1a814663f14fa11f415f0ab09
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.AcquireOperation(System.String)
title: TypeCatalog.AcquireOperation
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: df94dbc633561c1c97bfced9f155a663e38deb165f6f197ac8e88600543b1288
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `operation`:** The operation name used for admission diagnostics.

## Returns

A scope held across every access to the captured generation; publication may borrow it on its own thread.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The catalog is inactive, another thread is publishing, or the shared generation owner is Faulted.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Generation retirement has failed while dependent resources remain owned.
