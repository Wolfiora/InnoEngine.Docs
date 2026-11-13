---
uid: api.0bff49a2936c31e6a8d62e79cce1728d9362194cd97fd13b48bd5f74bcd20f51
symbol: "engine:Inno.Assets:M:Inno.Assets.Assets.TryLoad\u0060\u00601(System.Guid,\u0060\u00600@)"
source: xml
reviewed: 7aa779ff98c763306dd8cadd43fd1e7b0c5d4b78e486826b188eb79a9e905854
title: "TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Tries to load the canonical asset with a persistent identity in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `persistentId`:** The non-empty persistent asset identity.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the current lookup contains a compatible asset; otherwise, `false`.

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
