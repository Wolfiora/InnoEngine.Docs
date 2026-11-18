---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d7f38fbe0f5fb6f6934527ac7ee9e95a0baccce7aefed27b44e67913fb200782
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.RetentionScope.Retain``1(``0)
title: RetentionScope.Retain
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 73e6f54c65395d6f4b12cca9a78d4e7c5eedb5e25ae16a41db444b05544b48be
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
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
