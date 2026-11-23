---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.core-identity.runtimeidentity
symbol: engine:Inno.Core.Identity:T:Inno.Core.Identity.RuntimeIdentity
title: RuntimeIdentity
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: fcbfe9b5b43a927e9c2507e8789fbf7636e896b697e125cb7abd96e318a26ab6
outdatedFor: a9f0efc790b1e93a62569c977d5b2a21603c8654c4ff9e22d3b405c554d57d5f
contracts:
- api.projects.inno-core-identity#lifecycle-and-failure-contracts

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description: null
outdated: false
aliases: []
---

This value is suitable for transient interaction payloads only and must never be persisted. Equality compares the stored domain and runtime identifier; it does not verify that an object is still live.

[Register and release an identity object](../../../../../manual/register-identity.md) shows the owner and lifetime sequence. Read the [shared lifecycle and failure contracts](../../../../../architecture/projects/inno-core-identity.md#lifecycle-and-failure-contracts) before using these members.
