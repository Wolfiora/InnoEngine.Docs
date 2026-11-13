---
uid: api.83dbb99e9ed8c91e1e47c5cf80bd9f45a10513ba7728d644ef1b584920f5cd1c
symbol: "engine:Inno.References:M:Inno.References.ReferenceResolution.#ctor(Inno.References.ReferenceDescriptor,Inno.References.ReferenceResolutionState,System.Nullable{Inno.Core.Identity.RuntimeIdentity},System.String)"
source: xml
reviewed: 59b2c2a04fc6f4eb6c6f9133e941d4835041ce9afe4a604fe710e4f211ddb739
title: "Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates a reference-resolution result.

**Parameter `descriptor`:** The persistent descriptor that was resolved.

**Parameter `state`:** The resulting state.

**Parameter `runtimeIdentity`:** The domain-qualified live target identity when resolved.

**Parameter `diagnostic`:** Optional caller-facing detail for non-resolved states.

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.

**Exception `T:System.ArgumentException`:** Thrown when resolved state and runtime identity are inconsistent.
