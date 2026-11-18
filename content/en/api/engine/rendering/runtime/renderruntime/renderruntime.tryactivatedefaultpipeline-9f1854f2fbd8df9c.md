---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9f1854f2fbd8df9c982f382da4466200df4653fd6953ccc7273b73bc534ec12d
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.TryActivateDefaultPipeline(Inno.Rendering.Assets.RenderPipelineAsset)
title: RenderRuntime.TryActivateDefaultPipeline
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
sourceFingerprint: 215d81722289f58d450a70168f2d5aeb22ccf21c451148e6b9b8d775ce0ccf48
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `pipelineAsset`:** Candidate project default pipeline asset.

## Returns

`true` when a usable generation exists for the candidate.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown during an open graphics frame, during retirement, or after generation cleanup faults the owner.
