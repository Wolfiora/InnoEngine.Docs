---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fbc0ea2d2ccc6b576e676ddfe24444731a2242c9220f905cf5a9f89815aff4bf
symbol: engine:Inno.References:M:Inno.References.ContentReadScope.GetValues``1
title: ContentReadScope.GetValues
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: d0bd9555efc64ba20fd02f98be8378192f6ab248b8170e66567b61ffc789480f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The identity-backed content type understood by the consumer.

## Returns

A read-only operation snapshot; stale or incompatible roots are omitted.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
