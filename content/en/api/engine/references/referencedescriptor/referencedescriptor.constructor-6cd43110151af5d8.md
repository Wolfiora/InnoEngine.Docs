---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6cd43110151af5d81ea7936b34489d49ee108b7e882a50b642f1324720b56ee9
symbol: engine:Inno.References:M:Inno.References.ReferenceDescriptor.#ctor(Inno.References.ReferenceKindID,System.Guid,System.Guid,System.String,System.String)
title: ReferenceDescriptor.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
sourceFingerprint: 8a92856aeddd0b9399702e8b128e42249e9a50dacfb7f3a1515eb761745ad881
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `kindID`:** The open protocol used to resolve the target.

**Parameter `targetPersistentID`:** The target object's persistent identity, or an empty value for an explicitly unassigned slot.

**Parameter `expectedStableTypeID`:** An optional stable type constraint interpreted by the resolver.

**Parameter `lastKnownName`:** Optional non-authoritative display text retained while the target is missing.

**Parameter `lastKnownPath`:** Optional non-authoritative source path retained for diagnostics.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `kindID` is invalid.
