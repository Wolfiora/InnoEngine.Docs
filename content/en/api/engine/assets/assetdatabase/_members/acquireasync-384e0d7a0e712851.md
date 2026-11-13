---
uid: api.384e0d7a0e7128513872ede380374c230a0b2a880cec2034aa2754f7a06e6d01
symbol: "engine:Inno.Assets:M:Inno.Assets.AssetDatabase.AcquireAsync\u0060\u00601(Inno.Assets.AssetPath,System.Threading.CancellationToken)"
source: xml
reviewed: 79c850b3617adfbd051b0410968efc1a825faa738ac4110d0ada3e1e6103acde
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
