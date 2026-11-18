---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8d7728f43b139ac0c0cc47eeb0c51035e766fc54f544f366d89a89828078ef95
symbol: scripting:Inno.References:M:InnoEngine.References.ContentReadScope.GetValues``1
title: ContentReadScope.GetValues
kind: api
owners:
- Inno.References
apiSurface: editor-script
sourceFingerprint: 6dcd50eca27e96004dc26ac1281f8618103d43b8f5dc14d1361283444689ba28
apiScope: Runtime
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
