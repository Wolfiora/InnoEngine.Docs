---
uid: api.a85fdde6331574d9cfbf45e629ca4bed7e4ba11a85543d4801a05184c048e090
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(Inno.Core.Identity.IdentityObject,System.Nullable{System.UInt64})"
source: xml
reviewed: 97ad82a0f9690fad922d2fccdbf665e216fcdc322e8a7d301b029fb2462cec82
title: "SerializationCaptureKeyBuilder.TryAddOwner"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Adds an owner revision through its current Core identity; a null revision or detached source invalidates the key.

## Parameters

**Parameter `source`:** The current owner, never retained in the completed key.

**Parameter `revision`:** A complete revision for the producer-owned state, or null when reuse cannot be certified.

## Returns

True when an identity and revision were available; false invalidates the complete key.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
