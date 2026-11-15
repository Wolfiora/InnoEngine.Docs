---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.24c7492e774ba0b1d1e44969d860dff320bb551b96fa18cda628b8d62ed1cb0d
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get``1(Inno.Core.Identity.RuntimeIdentity)
title: IdentityAllocator.Get
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: e5c764cb81c515b26349aa44f324be4cff09032b8168c26db7658437b8b0b5fa

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves a domain-qualified runtime identity without allowing cross-session aliasing.

## Type parameters

**Type parameter `TIdentity`:** The required identity object contract.

## Parameters

**Parameter `identity`:** The transient identity containing both its owner domain and runtime identifier.

## Returns

The live compatible object, or `null` when the domain, generation, or type does not match.
