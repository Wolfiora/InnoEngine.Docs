---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.20c5b8f0f5646d0da8679c901539670acbea67214df4f5a85aeb851c80df38e1
symbol: engine:Inno.References:M:Inno.References.ReferenceDescriptor.#ctor(Inno.References.ReferenceKindId,System.Guid,System.Guid,System.String,System.String)
title: ReferenceDescriptor.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 51238b833eabaaeeba1ed28acfa7b66c581abc0810b96d868053d16221835be5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kindId`:** The open protocol used to resolve the target.

**Parameter `targetPersistentId`:** The target object's persistent identity, or an empty value for an explicitly unassigned slot.

**Parameter `expectedStableTypeId`:** An optional stable type constraint interpreted by the resolver.

**Parameter `lastKnownName`:** Optional non-authoritative display text retained while the target is missing.

**Parameter `lastKnownPath`:** Optional non-authoritative source path retained for diagnostics.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `kindId` is invalid.
