---
uid: api.03ade405bb0355457a9817c31a42435194ad52d58169f5d73a76a64eb5c4eaa2
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.PrepareSourceMounts(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount})"
source: xml
reviewed: 682488a160c612c2487bf776dd798fc05ff8fa5084d970253bce5886a413c5d4
title: "PrepareSourceMounts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Builds and validates an isolated source-mount candidate without changing active AssetPipeline state.

**Parameter `mounts`:** A writable project source followed by zero or more read-only sources.

**Returns:** A transaction that can be inspected, activated, completed, or rolled back.
