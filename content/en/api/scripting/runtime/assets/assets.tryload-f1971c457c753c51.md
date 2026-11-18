---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f1971c457c753c519fdeb0a4aa0b2e31b4eb0a7c36e80e80850d9cb374b25c1f
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.TryLoad``1(System.Guid,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 9d5829aec7177b7a881f1a659e6e81faaa1b2362a0e9a05d37c780425ea6949e
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
