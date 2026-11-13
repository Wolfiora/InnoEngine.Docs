---
uid: api.3ba786ae13b962f2aaa571ebbd78a115bc87ce756a4c994fe33a89b9d9e34bfe
symbol: "engine:Inno.References:M:Inno.References.SerializedMissingState.#ctor(Inno.References.ReferenceKey,Inno.References.ReferenceDescriptor,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: fae3d9ccab6794f0a4628c13d4109f0f4c5a7148259650532552475beb35e38d
title: "Constructor"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Creates an immutable missing-state record.

**Parameter `key`:** The persistent owner slot represented by this record.

**Parameter `descriptor`:** The persistent target intent that must survive unavailability.

**Parameter `payload`:** The neutral serialized owner state required for reconstruction.

**Exception `T:System.ArgumentNullException`:** Thrown when `descriptor` is null.
