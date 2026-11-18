---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.24c7492e774ba0b1d1e44969d860dff320bb551b96fa18cda628b8d62ed1cb0d
symbol: engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get``1(Inno.Core.Identity.RuntimeIdentity)
title: IdentityAllocator.Get
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: f3ad7853c7a42cc9f42d8018ffb8de547e36d1e0996635dc358540e58bc24d49
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TIdentity`:** The required identity object contract.

## Parameters

**Parameter `identity`:** The transient identity containing both its owner domain and runtime identifier.

## Returns

The live compatible object, or `null` when the domain, generation, or type does not match.
