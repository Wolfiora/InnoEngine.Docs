---
uid: api.core-identity.identitydomainid
symbol: engine:Inno.Core.Identity:T:Inno.Core.Identity.IdentityDomainId
source: manual
reviewed: d812c2a94ab6e94dafae9d4801bc6a3d0fc32e1013b9e11fbcf89c40244bf6d8
title: IdentityDomainId
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
aliases: []
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---

Identifies one isolated runtime identity namespace within the current process.

Domain identifiers are runtime-only values. They must never be serialized or used as persistent object identity.

[Register and release an identity object](../../../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../../../../architecture/projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.
