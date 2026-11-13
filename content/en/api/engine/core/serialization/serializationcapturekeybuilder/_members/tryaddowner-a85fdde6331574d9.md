---
uid: api.a85fdde6331574d9cfbf45e629ca4bed7e4ba11a85543d4801a05184c048e090
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(Inno.Core.Identity.IdentityObject,System.Nullable{System.UInt64})"
source: xml
reviewed: 0760016cb323c076b8841a3bf9ce289e1b6146d89e6493adbdf8e38b4d898a47
title: "TryAddOwner"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Adds an owner revision through its current Core identity; a null revision or detached source invalidates the key.

**Parameter `source`:** The current owner, never retained in the completed key.

**Parameter `revision`:** A complete revision for the producer-owned state, or null when reuse cannot be certified.

**Returns:** True when an identity and revision were available; false invalidates the complete key.

**Exception `T:System.ArgumentNullException`:** Source is null.

**Exception `T:System.InvalidOperationException`:** The callback has retired or is accessed from another thread.
