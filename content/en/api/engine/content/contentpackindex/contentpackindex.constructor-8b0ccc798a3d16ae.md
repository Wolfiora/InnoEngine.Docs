---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8b0ccc798a3d16aed9ffda48c889cdb6379feccdd947254385a50483dd7d5a63
symbol: engine:Inno.Content:M:Inno.Content.ContentPackIndex.#ctor(System.Collections.Generic.IEnumerable{Inno.Content.ContentEntry})
title: ContentPackIndex.Constructor
kind: api
owners:
- Inno.Content
apiSurface: source-clr
sourceFingerprint: fce34aa9018d75bd87a1af4a46e08a008b30e269e191520d37bc6909ac0d600a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `entries`:** Immutable payload descriptions; ownership of the input enumeration remains with the caller.

## Exceptions

**Exception `T:System.ArgumentException`:** An entry is null, repeats a folded key, or uses the reserved index identity.
