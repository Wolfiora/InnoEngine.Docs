---
uid: api.core-identity.runtimeidentity
symbol: engine:Inno.Core.Identity:T:Inno.Core.Identity.RuntimeIdentity
source: manual
reviewed: a50ea281e9e34ba651cdc2dd5d2e9936c45be05e42414bbb8aef136c055841a2
title: RuntimeIdentity
kind: api
owners:
  - Inno.Core.Identity
apiSurface: source-clr
aliases: []
contracts:
  - api.projects.inno-core-identity#lifecycle-and-failure-contracts
---

Addresses a live identity object within one explicitly identified runtime domain.

This value is suitable for transient interaction payloads only and must never be persisted. Equality compares the stored domain and runtime identifier; it does not verify that an object is still live.

[Register and release an identity object](../../../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../../../../architecture/projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.
