---
uid: api.4d9cca1a6c961ac570263955d5c8107fd0556abd289accd18fcb98f5ced18a6a
symbol: "engine:Inno.Assets:M:Inno.Assets.IAssetLookup.TryLoad\u0060\u00601(System.Guid,\u0060\u00600@)"
source: xml
reviewed: 3ce603a7d2b9b47e485b6967ce61bf297fa28310f32e20cc5fa28a192f0f31a5
title: "TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset with a persistent identity.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the lookup contains a compatible asset; otherwise, `false`.
