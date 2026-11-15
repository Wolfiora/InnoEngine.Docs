---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d7f38fbe0f5fb6f6934527ac7ee9e95a0baccce7aefed27b44e67913fb200782
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.RetentionScope.Retain``1(``0)
title: RetentionScope.Retain
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: fd9d8d7b94ae11b133861dba6e8666a3288ca01771c4086a30b61fcf4183b49d
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TLease`:** Disposable lease type.

## Parameters

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

## Returns

The same lease for convenient initialization.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.
