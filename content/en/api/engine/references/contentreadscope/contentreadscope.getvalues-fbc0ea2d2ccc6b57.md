---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fbc0ea2d2ccc6b576e676ddfe24444731a2242c9220f905cf5a9f89815aff4bf
symbol: engine:Inno.References:M:Inno.References.ContentReadScope.GetValues``1
title: ContentReadScope.GetValues
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 74b90e1403e3955e83fc99e1ad749ac01a6bb72fb82610b46c63e5b96ebe436b
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
