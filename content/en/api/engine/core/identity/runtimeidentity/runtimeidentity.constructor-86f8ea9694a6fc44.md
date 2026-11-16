---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.86f8ea9694a6fc4411b4970798b9fb4f273610d379dacc3124ee548ff9bd16c8
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.RuntimeIdentity.#ctor(Inno.Core.Identity.IdentityDomainId,System.Int32)
title: RuntimeIdentity.Constructor
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: f9c2dedd58530096838d451f77b682821c11574e323f3d72ed46f265536ae6c8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `domainId`:** The identity domain that owns the runtime identifier.

**Parameter `runtimeId`:** The generation-safe runtime identifier allocated inside the domain.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when either value is invalid.
