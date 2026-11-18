---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.02442c934b36deabde4eb74c2e32b4b06b8039d632f9c3f8be4ee2d786d4ff04
symbol: engine:Inno.References:M:Inno.References.ReferenceCatalog.Resolve(Inno.References.ReferenceDescriptor)
title: ReferenceCatalog.Resolve
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: b408b439cc4f1a42f3addae15ac6e474d2bbe6337461c985631014368a9a4350
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
