---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.729cac3ce6bc6246f87a253b8d849cdb02d9b9bc760c0305f626669e9ae00b77
symbol: scripting:Inno.Core.Identity:M:InnoEngine.Core.RuntimeIdentity.#ctor(InnoEngine.Core.IdentityDomainId,System.Int32)
title: RuntimeIdentity.Constructor
kind: api
owners:
- Inno.Core.Identity
apiSurface: editor-script
reviewed: 41edc9625c9d51f679a2ded5b097697a2585704aa40a29fe8a5dae501c030438
apiScope: Runtime
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
