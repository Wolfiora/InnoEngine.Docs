---
uid: api.5787d1478d59b517883e883c3affc9347d7d0d3e4d0845bdbf46d33800fef395
symbol: "engine:Inno.Core.Identity:P:Inno.Core.Identity.IdentityAllocator.current"
source: xml
reviewed: 8ffff4c8671e4bd308a1f1d7cdd95e9fcdc8b24cc86b58738340c8aaf7d3be46
title: "IdentityAllocator.current"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Gets the allocator bound to the current asynchronous execution context.

**Exception `T:System.InvalidOperationException`:** Thrown when the caller is outside a runtime session execution scope.
