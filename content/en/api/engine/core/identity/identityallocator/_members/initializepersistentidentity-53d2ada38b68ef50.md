---
uid: api.53d2ada38b68ef50f3200f9653e4b626f3c1c474cdd81ecb429b200366fbb6a6
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.InitializePersistentIdentity(Inno.Core.Identity.IdentityObject,System.Guid)"
source: xml
reviewed: c9ae7d0e35ff59aa8f2f316bdd62b4c2b7adf30fd47d4bec2e969eb53762744e
title: "InitializePersistentIdentity"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Assigns a persistent identity to a detached object without allocating a runtime identity.

**Parameter `obj`:** The detached identity object to initialize.

**Parameter `persistentId`:** The non-empty persistent identity to assign.

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.ArgumentException`:** Thrown when `persistentId` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the object already has a live runtime identity.
