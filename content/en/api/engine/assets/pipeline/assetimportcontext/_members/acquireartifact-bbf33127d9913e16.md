---
uid: api.bbf33127d9913e1623bb40bf03e527e06e639f6b0bcad2fc92b02f9615c5bfaa
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportContext.AcquireArtifact(System.Guid,System.String)"
source: xml
reviewed: dc88c5822d3014973d91438db7cbbbffa94d9354080845508d0fdb169c005c48
title: "AcquireArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Acquires an immutable dependency output and records its invalidation dependency automatically.

**Parameter `assetId`:** Persistent dependency identity.

**Parameter `outputName`:** Stable named output protocol.

**Returns:** A caller-owned lease that must be disposed after reading.
