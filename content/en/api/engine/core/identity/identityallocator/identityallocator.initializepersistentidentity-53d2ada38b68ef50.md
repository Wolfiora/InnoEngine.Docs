---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.53d2ada38b68ef50f3200f9653e4b626f3c1c474cdd81ecb429b200366fbb6a6
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.InitializePersistentIdentity(Inno.Core.Identity.IdentityObject,System.Guid)
title: IdentityAllocator.InitializePersistentIdentity
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: 6791536d684e5f5df1b8ddecc6085ecd3723276f1a8bcdd7555a36ba22084dd6
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `obj`:** The detached identity object to initialize.

**Parameter `persistentId`:** The non-empty persistent identity to assign.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `obj` is null.

**Exception `T:System.ArgumentException`:** Thrown when `persistentId` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the object already has a live runtime identity.
