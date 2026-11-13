---
uid: api.475d2c76f0067046e4f03716de55c9a05c6041127c043f71bb42dfbe36b6d15f
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.ReplaceSourceMounts(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount})"
source: xml
reviewed: 650b2220af28d22d4eb03e3b762117b778dbdd4ed583f76b9a460338f5097625
title: "AssetPipeline.ReplaceSourceMounts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Validates and atomically replaces the complete source-mount generation while preserving the active generation after any candidate failure.

**Parameter `mounts`:** A writable project source followed by zero or more read-only sources.
