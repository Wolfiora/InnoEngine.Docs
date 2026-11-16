---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f1971c457c753c519fdeb0a4aa0b2e31b4eb0a7c36e80e80850d9cb374b25c1f
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.TryLoad``1(System.Guid,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
reviewed: 9039877790e0ab33032d814626f697608deed0bd9a1eb71e7a38756f0ac3f13f
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the current lookup contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
