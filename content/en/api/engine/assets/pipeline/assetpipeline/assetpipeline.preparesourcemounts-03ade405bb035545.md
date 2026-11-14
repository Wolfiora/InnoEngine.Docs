---
uid: api.03ade405bb0355457a9817c31a42435194ad52d58169f5d73a76a64eb5c4eaa2
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.PrepareSourceMounts(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount})"
source: xml
reviewed: dd9385fded74299f2065309d2233ee99cef5fafd4040e2c9764fb270138ff72c
title: "AssetPipeline.PrepareSourceMounts"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Builds and validates an isolated source-mount candidate without changing active AssetPipeline state.

**Parameter `mounts`:** A writable project source followed by zero or more read-only sources.

**Returns:** A transaction that can be inspected, activated, completed, or rolled back.
