---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.050050ab72852130d18e101f842d6c8a7319ec42317c82b8cf79baba23f6c298
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.RuntimeIdentity.#ctor(Inno.Core.Identity.IdentityDomainID,System.Int32)
title: RuntimeIdentity.Constructor
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: 9742c8e5a3998a6034a19bb2bbc1db126b7ed7bfba3dd592ba511fe52f66f30b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `domainID`:** The identity domain that owns the runtime identifier.

**Parameter `runtimeID`:** The generation-safe runtime identifier allocated inside the domain.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when either value is invalid.
