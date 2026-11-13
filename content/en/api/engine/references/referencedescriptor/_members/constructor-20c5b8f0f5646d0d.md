---
uid: api.20c5b8f0f5646d0da8679c901539670acbea67214df4f5a85aeb851c80df38e1
symbol: "engine:Inno.References:M:Inno.References.ReferenceDescriptor.#ctor(Inno.References.ReferenceKindId,System.Guid,System.Guid,System.String,System.String)"
source: xml
reviewed: b6b67c03da2cfd54fec279f944f3b7a8be5b31525286c6d90fdbdf70fc270743
title: "Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates a persistent reference descriptor.

**Parameter `kindId`:** The open protocol used to resolve the target.

**Parameter `targetPersistentId`:** The target object's persistent identity, or an empty value for an explicitly unassigned slot.

**Parameter `expectedStableTypeId`:** An optional stable type constraint interpreted by the resolver.

**Parameter `lastKnownName`:** Optional non-authoritative display text retained while the target is missing.

**Parameter `lastKnownPath`:** Optional non-authoritative source path retained for diagnostics.

**Exception `T:System.ArgumentException`:** Thrown when `kindId` is invalid.
