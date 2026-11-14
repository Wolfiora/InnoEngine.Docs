---
uid: api.aa0d840172651516a25614d5b3131fc7f25238b7cba18f952a8c05390aab3ad8
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Register(Inno.Core.Identity.IdentityObject,System.Nullable{System.Guid})"
source: xml
reviewed: 200568c0d29df57211872fc5b08dd5fd3ae80d7e7f559489f8987ffe5f9ede00
title: "IdentityAllocator.Register"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Registers an object and assigns its session-local runtime identity.

## Parameters

**Parameter `obj`:** The identity object owned by this runtime session.

**Parameter `persistentId`:** An optional persistent identity override. When omitted, the object's existing persistent identity is retained. An empty resolved identity is replaced with a newly generated identity.

## Returns

`true` when the object was newly registered; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when a different live object is already registered with the resolved persistent identity.
