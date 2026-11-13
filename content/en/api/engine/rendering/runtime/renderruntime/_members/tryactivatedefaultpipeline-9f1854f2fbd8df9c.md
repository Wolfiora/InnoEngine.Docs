---
uid: api.9f1854f2fbd8df9c982f382da4466200df4653fd6953ccc7273b73bc534ec12d
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.TryActivateDefaultPipeline(Inno.Rendering.Assets.RenderPipelineAsset)"
source: xml
reviewed: 95a2ebbba22fbf016df0aaeeab43d359bfef6e9a78888f3c5314a64276441e21
title: "TryActivateDefaultPipeline"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Validates and selects a project default while preserving its last-good generation.

**Parameter `pipelineAsset`:** Candidate project default pipeline asset.

**Returns:** `true` when a usable generation exists for the candidate.

**Exception `T:System.InvalidOperationException`:** Thrown during an open graphics frame, during retirement, or after generation cleanup faults the owner.
