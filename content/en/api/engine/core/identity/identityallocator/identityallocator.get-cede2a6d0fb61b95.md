---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cede2a6d0fb61b9503994a89aea458d90579ce4b32b1a42616be9fc5bdc2170f
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get``1(System.Guid)
title: IdentityAllocator.Get
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: 088e8bd0c6d6e55abbc306d259cedd6560d3b09d671f3c17b174672f1e59c057
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TIdentity`:** The required identity object contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent identity to resolve.

## Returns

The live compatible object, or `null` when no matching object exists.
