---
uid: api.384e0d7a0e7128513872ede380374c230a0b2a880cec2034aa2754f7a06e6d01
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.AcquireAsync\u0060\u00601(Inno.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: 2de2bb9058f23549c8a22c79b9cb182087489df3923b16be37c1e79b374ab66a
title: "AcquireAsync"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Acquires a canonical runtime asset by path for an explicit residency lifetime.

**Type parameter `TAsset`:** Required runtime asset contract.

**Parameter `path`:** Mount-qualified logical asset path.

**Parameter `cancellationToken`:** Cancellation observed during preparation and before owner-thread materialization.

**Returns:** A lease completed after verified preparation and owner-thread publication.
