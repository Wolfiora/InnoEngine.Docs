---
uid: api.14473e7e10aeeee459beaa39fe6f43ae4bd4c5a68d060259e4fbb006d66cbf49
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.EnterScope"
source: xml
reviewed: 32ca6a2a7e8100a95093967c43647d96f23a415ddcf4186db8f6602bdcc5eeb1
title: "EnterScope"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Binds this allocator to the current asynchronous execution context until the returned scope is disposed.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Exception `T:System.InvalidOperationException`:** Thrown when scopes are disposed out of order.
