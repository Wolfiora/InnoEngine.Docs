---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.aa0d840172651516a25614d5b3131fc7f25238b7cba18f952a8c05390aab3ad8
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Register(Inno.Core.Identity.IdentityObject,System.Nullable{System.Guid})
title: IdentityAllocator.Register
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: 913376c67e30bffe0bb99e0f3e788f653e10d7b4027441ccabb2fe970a7890e7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `obj`:** The identity object owned by this runtime session.

**Parameter `persistentId`:** An optional persistent identity override. When omitted, the object's existing persistent identity is retained. An empty resolved identity is replaced with a newly generated identity.

## Returns

`true` when the object was newly registered; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when a different live object is already registered with the resolved persistent identity.
