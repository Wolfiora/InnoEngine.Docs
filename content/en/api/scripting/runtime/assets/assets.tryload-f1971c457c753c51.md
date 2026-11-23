---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f1971c457c753c519fdeb0a4aa0b2e31b4eb0a7c36e80e80850d9cb374b25c1f
symbol: scripting:Inno.Assets:M:InnoEngine.Assets.Assets.TryLoad``1(System.Guid,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: editor-script
sourceFingerprint: 2da6ed6e5e239284c434728c15636cf18de1d5a843958896446b8c8a1324e36e
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

**Parameter `persistentID`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the current lookup contains a compatible asset; otherwise, `false`.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
