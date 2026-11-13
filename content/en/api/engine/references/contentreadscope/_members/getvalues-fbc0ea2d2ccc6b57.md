---
uid: api.fbc0ea2d2ccc6b576e676ddfe24444731a2242c9220f905cf5a9f89815aff4bf
symbol: "engine:Inno.References:M:Inno.References.ContentReadScope.GetValues\u0060\u00601"
source: xml
reviewed: 6ce51294725c0997f70e9e0d41f73a860ec6076fa6f40e7b99317f9b66d1948d
title: "GetValues"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Resolves all live roots matching the requested content contract.

**Type parameter `TValue`:** The identity-backed content type understood by the consumer.

**Returns:** A read-only operation snapshot; stale or incompatible roots are omitted.

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
