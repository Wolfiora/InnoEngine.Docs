---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fbc0ea2d2ccc6b576e676ddfe24444731a2242c9220f905cf5a9f89815aff4bf
symbol: engine:Inno.References:M:Inno.References.ContentReadScope.GetValues``1
title: ContentReadScope.GetValues
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 7ac1b7f676ac4b96b6ffe12258f38c5ea3d9dc1bf0d5903f4fe8379151435a84

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Type parameters

**Type parameter `TValue`:** The identity-backed content type understood by the consumer.

## Returns

A read-only operation snapshot; stale or incompatible roots are omitted.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
