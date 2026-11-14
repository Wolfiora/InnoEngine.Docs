---
uid: api.4d9cca1a6c961ac570263955d5c8107fd0556abd289accd18fcb98f5ced18a6a
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad\u0060\u00601(System.Guid,\u0060\u00600@)"
source: xml
reviewed: bc9c4422bbf0e90e7da22d91b8987a5ac751b552f4517f95a3faf0e4103d1256
title: "IAssetLookup.TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset with a persistent identity.

## Type parameters

**Type parameter `TAsset`:** The required asset contract.

## Parameters

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

## Returns

`true` when the lookup contains a compatible asset; otherwise, `false`.
