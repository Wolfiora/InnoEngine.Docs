---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.53d2ada38b68ef50f3200f9653e4b626f3c1c474cdd81ecb429b200366fbb6a6
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.InitializePersistentIdentity(Inno.Core.Identity.IdentityObject,System.Guid)
title: IdentityAllocator.InitializePersistentIdentity
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: a87b9e961dd4f0932c4bc9c4ddc68fe97310a6f4d82377a325bff2142772f325
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `obj`:** The detached identity object to initialize.

**Parameter `persistentID`:** The non-empty persistent identity to assign.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.ArgumentException`:** Thrown when `persistentID` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the object already has a live runtime identity.
