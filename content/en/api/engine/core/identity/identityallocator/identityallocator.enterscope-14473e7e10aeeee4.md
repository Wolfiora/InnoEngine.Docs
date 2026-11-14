---
uid: api.14473e7e10aeeee459beaa39fe6f43ae4bd4c5a68d060259e4fbb006d66cbf49
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.EnterScope"
source: xml
reviewed: 9eadbee398d06b436172c30f01e5b0cec3412f4e02ec117833f7aff2a95f5f1f
title: "IdentityAllocator.EnterScope"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Binds this allocator to the current asynchronous execution context until the returned scope is disposed.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Exception `T:System.InvalidOperationException`:** Thrown when scopes are disposed out of order.
