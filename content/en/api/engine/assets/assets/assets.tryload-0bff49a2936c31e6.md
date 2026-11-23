---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.0bff49a2936c31e6a8d62e79cce1728d9362194cd97fd13b48bd5f74bcd20f51
symbol: engine:Inno.Assets:M:Inno.Assets.Assets.TryLoad``1(System.Guid,``0@)
title: Assets.TryLoad
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 3c96200beb360132a2b32c4a4caea5e7dc1270afca68d59cba870deecc1464e2
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
