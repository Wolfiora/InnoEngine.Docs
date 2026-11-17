---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1caa37c38a43bff2566a03f4dab731d98362a9347fb5bcbd5aba4960e196f648
symbol: scripting:Inno.Core.Serialization:M:InnoEngine.Serialization.SerializationCaptureKeyBuilder.TryAddOwner(InnoEngine.Core.IdentityObject,System.Nullable{System.UInt64})
title: SerializationCaptureKeyBuilder.TryAddOwner
kind: api
owners:
- Inno.Core.Serialization
apiSurface: editor-script
reviewed: fe3ae9826e6d0095e1c07db0e061a20a56c811bb182df8cd3f836bb4f283bc45
apiScope: Runtime
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
