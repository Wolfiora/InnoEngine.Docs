---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.14473e7e10aeeee459beaa39fe6f43ae4bd4c5a68d060259e4fbb006d66cbf49
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.EnterScope
title: IdentityAllocator.EnterScope
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: 9eadbee398d06b436172c30f01e5b0cec3412f4e02ec117833f7aff2a95f5f1f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A strict last-in-first-out scope owned by the caller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when scopes are disposed out of order.
