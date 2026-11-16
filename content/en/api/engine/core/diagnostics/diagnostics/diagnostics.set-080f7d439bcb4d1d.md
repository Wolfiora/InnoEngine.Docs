---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.080f7d439bcb4d1dfd24dac95a9b5c08450f6e2f88aae6af68cbbf2b88011303
symbol: engine:Inno.Core.Diagnostics:M:Inno.Core.Diagnostics.Diagnostics.Set(System.Guid,System.String,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic},System.String)
title: Diagnostics.Set
kind: api
owners:
- Inno.Core.Diagnostics
apiSurface: source-clr
reviewed: a13284025c6a19920b04fbb68543c3122daa8991be704ed1c5b89f511f6e13fc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetId`:** The stable identity of the asset, scene element, or other dynamic target.

**Parameter `group`:** The non-empty responsibility name scoped to the calling type and target.

**Parameter `diagnostics`:** The complete current diagnostic collection. An empty collection clears the targeted group.

**Parameter `displayName`:** The optional target name presented by diagnostic consumers.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `targetId` is empty, `group` is empty, or the collection contains a null entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.
