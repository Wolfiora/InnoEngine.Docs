---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8b0ccc798a3d16aed9ffda48c889cdb6379feccdd947254385a50483dd7d5a63
symbol: engine:Inno.Content:M:Inno.Content.ContentPackIndex.#ctor(System.Collections.Generic.IEnumerable{Inno.Content.ContentEntry})
title: ContentPackIndex.Constructor
kind: api
owners:
- Inno.Content
apiSurface: source-clr
reviewed: 35ffa724a793954ac3365cb516450f2651e7255eef3a503aa50c998251465711

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Copies and sorts a complete payload inventory.

## Parameters

**Parameter `entries`:** Immutable payload descriptions; ownership of the input enumeration remains with the caller.

## Exceptions

**Exception `T:System.ArgumentException`:** An entry is null, repeats a folded key, or uses the reserved index identity.
