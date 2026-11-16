---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8c12acf852126ec945229e738b8d0249c78e1911ff2b82a2c440ff897df03b21
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.String,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic})
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: 29c4f2645a0508b21fafe78545dd74ee1ef7006b80f420cd0f573cc7abf2f9c9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `group`:** The non-empty responsibility name scoped to the calling type.

**Parameter `diagnostics`:** The complete current diagnostic collection. An empty collection clears the group.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `group` is empty or the collection contains a null entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.
