---
uid: api.1caa37c38a43bff2566a03f4dab731d98362a9347fb5bcbd5aba4960e196f648
symbol: "scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(InnoEngine.Core.IdentityObject,System.Nullable{System.UInt64})"
source: xml
reviewed: 870dbf8e9ccc4ee816b12b100ff63bfa9b98e0fc6ec6ca591589302bcdfd384e
title: "SerializationCaptureKeyBuilder.TryAddOwner"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: editor-script
apiScope: Runtime
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
