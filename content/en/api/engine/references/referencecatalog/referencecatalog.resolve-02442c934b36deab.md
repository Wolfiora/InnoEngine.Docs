---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.02442c934b36deabde4eb74c2e32b4b06b8039d632f9c3f8be4ee2d786d4ff04
symbol: engine:Inno.References:M:Inno.References.ReferenceCatalog.Resolve(Inno.References.ReferenceDescriptor)
title: ReferenceCatalog.Resolve
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: def6de0fa6edf17aba2de4f5029a355cbcc066d1b03b36aa46505cdefac0ee70
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** The descriptor to resolve.

## Returns

The resolver result, an unassigned result for an empty target, or a missing result when no resolver is installed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.

**Exception `T:System.InvalidOperationException`:** Thrown when a resolver returns a result for a different descriptor.
