---
uid: api.20c5b8f0f5646d0da8679c901539670acbea67214df4f5a85aeb851c80df38e1
symbol: "engine:Inno.References:M:Inno.References.ReferenceDescriptor.#ctor(Inno.References.ReferenceKindId,System.Guid,System.Guid,System.String,System.String)"
source: xml
reviewed: fbc9afabebb027013ed66b8399749d36f6c71c626bf406c713e70a89b5ef97ca
title: "ReferenceDescriptor.Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates a persistent reference descriptor.

## Parameters

**Parameter `kindId`:** The open protocol used to resolve the target.

**Parameter `targetPersistentId`:** The target object's persistent identity, or an empty value for an explicitly unassigned slot.

**Parameter `expectedStableTypeId`:** An optional stable type constraint interpreted by the resolver.

**Parameter `lastKnownName`:** Optional non-authoritative display text retained while the target is missing.

**Parameter `lastKnownPath`:** Optional non-authoritative source path retained for diagnostics.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `kindId` is invalid.
