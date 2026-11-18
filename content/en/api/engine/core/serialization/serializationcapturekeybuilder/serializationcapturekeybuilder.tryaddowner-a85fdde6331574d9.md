---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a85fdde6331574d9cfbf45e629ca4bed7e4ba11a85543d4801a05184c048e090
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(Inno.Core.Identity.IdentityObject,System.Nullable{System.UInt64})
title: SerializationCaptureKeyBuilder.TryAddOwner
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: f8820d0c34fd117235f6348816fcf49973fb9c8241e0e9a5040fe7105c5530ac
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** The current owner, never retained in the completed key.

**Parameter `revision`:** A complete revision for the producer-owned state, or null when reuse cannot be certified.

## Returns

True when an identity and revision were available; false invalidates the complete key.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
