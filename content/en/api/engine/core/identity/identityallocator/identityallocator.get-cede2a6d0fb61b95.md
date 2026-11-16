---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cede2a6d0fb61b9503994a89aea458d90579ce4b32b1a42616be9fc5bdc2170f
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get``1(System.Guid)
title: IdentityAllocator.Get
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: f13aa94a417b0c341ba6c680964ce47eb11d94b2d031cdb9d92375c755f75aeb
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
