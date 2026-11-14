---
uid: api.e3bafa5591ec8a0ad86729b8b391a961ec5a1978a6c7dcce65553122dd8d558a
symbol: "engine:Inno.Assets:M:Inno.Assets.RetentionScope.Retain\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: 80264475e0999a62464f7f66633727863769928b9db94f877ea2b4d16675a2be
title: "RetentionScope.Retain"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Transfers one lease into this scope.

**Type parameter `TLease`:** Disposable lease type.

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

**Returns:** The same lease for convenient initialization.

**Exception `T:System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.
