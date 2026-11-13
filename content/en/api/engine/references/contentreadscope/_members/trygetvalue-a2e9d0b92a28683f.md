---
uid: api.a2e9d0b92a28683f9d545722610153c341368842643a2f92f15c1d87b0e24eed
symbol: "engine:Inno.References:M:Inno.References.ContentReadScope.TryGetValue\u0060\u00601(System.Guid,\u0060\u00600@)"
source: xml
reviewed: c51d6a8e3dc9339d7806ee6dfda16135bd400321b72023598b2d1d543f1fe154
title: "TryGetValue"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Resolves a selected root without rebinding a stale snapshot to a replacement generation.

**Type parameter `TValue`:** The required identity-backed root type.

**Parameter `id`:** The persistent identity selecting a root already captured by this scope.

**Parameter `value`:** The live compatible object, or null when unavailable.

**Returns:** True only when the captured runtime identity is still live and compatible.

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
