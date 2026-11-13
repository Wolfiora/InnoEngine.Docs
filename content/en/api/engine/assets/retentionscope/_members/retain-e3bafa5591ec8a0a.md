---
uid: api.e3bafa5591ec8a0ad86729b8b391a961ec5a1978a6c7dcce65553122dd8d558a
symbol: "engine:Inno.Assets:M:Inno.Assets.RetentionScope.Retain\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: ce4ce1e908a515311df8143e853a44628c09fc539164188ab27353910d192822
title: "Retain"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Transfers one lease into this scope.

**Type parameter `TLease`:** Disposable lease type.

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

**Returns:** The same lease for convenient initialization.

**Exception `T:System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.
