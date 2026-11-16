---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.02442c934b36deabde4eb74c2e32b4b06b8039d632f9c3f8be4ee2d786d4ff04
symbol: engine:Inno.References:M:Inno.References.ReferenceCatalog.Resolve(Inno.References.ReferenceDescriptor)
title: ReferenceCatalog.Resolve
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: a217989adb5cfbc3eaa4b82e7130f37d9e36c500c86a080a8c02c8c031a8c389
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
