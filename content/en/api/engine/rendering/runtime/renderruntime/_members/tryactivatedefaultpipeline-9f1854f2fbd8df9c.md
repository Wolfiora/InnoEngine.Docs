---
uid: api.9f1854f2fbd8df9c982f382da4466200df4653fd6953ccc7273b73bc534ec12d
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.TryActivateDefaultPipeline(Inno.Rendering.Assets.RenderPipelineAsset)"
source: xml
reviewed: a241de7f45302050a2ebefe62c7f71263bc7b2775efda95b3fa51a766c71126b
title: "TryActivateDefaultPipeline"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Validates and selects a project default while preserving its last-good generation.

**Parameter `pipelineAsset`:** Candidate project default pipeline asset.

**Returns:** `true` when a usable generation exists for the candidate.

**Exception `T:System.InvalidOperationException`:** Thrown during an open graphics frame, during retirement, or after generation cleanup faults the owner.
