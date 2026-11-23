---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.080f7d439bcb4d1dfd24dac95a9b5c08450f6e2f88aae6af68cbbf2b88011303
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic},System.String)
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
sourceFingerprint: 6cd1117e45c93afa42b8b1183036de00a70cd6ecd66d9dda27a2e67c9560d267
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetID`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostics`:** The complete current diagnostic collection. An empty collection clears the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `targetID` is empty, `group` is empty, or the collection contains a null entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.
