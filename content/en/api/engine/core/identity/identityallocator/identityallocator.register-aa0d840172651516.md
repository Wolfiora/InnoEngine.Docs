---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aa0d840172651516a25614d5b3131fc7f25238b7cba18f952a8c05390aab3ad8
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Register(Inno.Core.Identity.IdentityObject,System.Nullable{System.Guid})
title: IdentityAllocator.Register
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: c7efd499f0391c7bea7787f2e5621f3c5e843f6c23c07e676ceef8a29058ac35
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
