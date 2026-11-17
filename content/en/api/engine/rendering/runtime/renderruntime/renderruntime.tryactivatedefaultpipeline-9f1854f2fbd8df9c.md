---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9f1854f2fbd8df9c982f382da4466200df4653fd6953ccc7273b73bc534ec12d
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRuntime.TryActivateDefaultPipeline(Inno.Rendering.Assets.RenderPipelineAsset)
title: RenderRuntime.TryActivateDefaultPipeline
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: 614690a2a23e3bea87132c3ea0ecb4a573fdb5b9579fe4fbcd34b36d1cd1fe8c
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
