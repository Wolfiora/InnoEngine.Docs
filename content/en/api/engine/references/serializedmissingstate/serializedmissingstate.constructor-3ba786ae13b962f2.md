---
uid: api.3ba786ae13b962f2aaa571ebbd78a115bc87ce756a4c994fe33a89b9d9e34bfe
symbol: "engine:Inno.References:M:Inno.References.SerializedMissingState.#ctor(Inno.References.ReferenceKey,Inno.References.ReferenceDescriptor,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 53192d64c3ebdd3504f7bc925b69d0814bcc716f0541b27536554c8242f90fa6
title: "SerializedMissingState.Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates an immutable missing-state record.

**Parameter `key`:** The persistent owner slot represented by this record.

**Parameter `descriptor`:** The persistent target intent that must survive unavailability.

**Parameter `payload`:** The neutral serialized owner state required for reconstruction.

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.
