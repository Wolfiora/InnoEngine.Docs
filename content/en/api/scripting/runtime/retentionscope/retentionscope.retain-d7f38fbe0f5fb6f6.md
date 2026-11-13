---
uid: api.d7f38fbe0f5fb6f6934527ac7ee9e95a0baccce7aefed27b44e67913fb200782
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.RetentionScope.Retain\u0060\u00601(\u0060\u00600)"
source: xml
reviewed: fd9d8d7b94ae11b133861dba6e8666a3288ca01771c4086a30b61fcf4183b49d
title: "RetentionScope.Retain"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Transfers one lease into this scope.

**Type parameter `TLease`:** Disposable lease type.

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

**Returns:** The same lease for convenient initialization.

**Exception `T:System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.
