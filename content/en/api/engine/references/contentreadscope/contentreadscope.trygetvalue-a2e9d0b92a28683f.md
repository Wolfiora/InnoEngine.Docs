---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a2e9d0b92a28683f9d545722610153c341368842643a2f92f15c1d87b0e24eed
symbol: engine:Inno.References:M:Inno.References.ContentReadScope.TryGetValue``1(System.Guid,``0@)
title: ContentReadScope.TryGetValue
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 5bbe7467d752c9977fa31b7d0a03802daa9f00078b99772ce0efb28930551273
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The required identity-backed root type.

## Parameters

**Parameter `id`:** The persistent identity selecting a root already captured by this scope.

**Parameter `value`:** The live compatible object, or null when unavailable.

## Returns

True only when the captured runtime identity is still live and compatible.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
