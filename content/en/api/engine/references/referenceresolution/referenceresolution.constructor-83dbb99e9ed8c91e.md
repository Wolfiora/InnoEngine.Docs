---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.83dbb99e9ed8c91e1e47c5cf80bd9f45a10513ba7728d644ef1b584920f5cd1c
symbol: engine:Inno.References:M:Inno.References.ReferenceResolution.#ctor(Inno.References.ReferenceDescriptor,Inno.References.ReferenceResolutionState,System.Nullable{Inno.Core.Identity.RuntimeIdentity},System.String)
title: ReferenceResolution.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: e316d5b742b35ea5e55c94133f87c7d820eb65cdc121bc01a3b4f61765e3c365
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `descriptor`:** The persistent descriptor that was resolved.

**Parameter `state`:** The resulting state.

**Parameter `runtimeIdentity`:** The domain-qualified live target identity when resolved.

**Parameter `diagnostic`:** Optional caller-facing detail for non-resolved states.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.

**Exception `T:System.ArgumentException`:** Thrown when resolved state and runtime identity are inconsistent.
