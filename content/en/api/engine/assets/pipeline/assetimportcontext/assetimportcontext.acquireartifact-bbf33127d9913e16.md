---
uid: api.bbf33127d9913e1623bb40bf03e527e06e639f6b0bcad2fc92b02f9615c5bfaa
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: 34e57743a20edeb397e214ae8f19d7a89304bcf8c05d454c442c8ef0ebf3b3cb
title: "AssetImportContext.AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Acquires an immutable dependency output and records its invalidation dependency automatically.

## Parameters

**Parameter `assetId`:** Persistent dependency identity.

**Parameter `outputName`:** Stable named output protocol.

## Returns

A caller-owned lease that must be disposed after reading.
