---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.83dbb99e9ed8c91e1e47c5cf80bd9f45a10513ba7728d644ef1b584920f5cd1c
symbol: engine:Inno.References:M:Inno.References.ReferenceResolution.#ctor(Inno.References.ReferenceDescriptor,Inno.References.ReferenceResolutionState,System.Nullable{Inno.Core.Identity.RuntimeIdentity},System.String)
title: ReferenceResolution.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: ea68ceebfd325faae41b6c66f30cca1fbf7d4b14421a509ebf62556e8cca123c
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
