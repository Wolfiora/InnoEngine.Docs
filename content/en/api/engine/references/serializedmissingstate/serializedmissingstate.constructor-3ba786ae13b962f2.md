---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.3ba786ae13b962f2aaa571ebbd78a115bc87ce756a4c994fe33a89b9d9e34bfe
symbol: engine:Inno.References:M:Inno.References.SerializedMissingState.#ctor(Inno.References.ReferenceKey,Inno.References.ReferenceDescriptor,System.ReadOnlySpan{System.Byte})
title: SerializedMissingState.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: ee78ff07efa8d073af9776ec23c64aa392d069a0230137e1c990bf64e63e76d4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The persistent owner slot represented by this record.

**Parameter `descriptor`:** The persistent target intent that must survive unavailability.

**Parameter `payload`:** The neutral serialized owner state required for reconstruction.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.
