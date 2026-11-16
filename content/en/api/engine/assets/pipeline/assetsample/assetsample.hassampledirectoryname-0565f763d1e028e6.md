---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0565f763d1e028e65d7e92148568191fcd0c3756fea8268ce8d478ffb264ff78
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.HasSampleDirectoryName(Inno.Assets.AssetPath)
title: AssetSample.HasSampleDirectoryName
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: c755b638a0537bfc30d708c5f0954de4366315b006f92f30095b68b4e4b3ced4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `path`:** The isolated source path to inspect.

## Returns

`true` when the final segment starts with `~`, regardless of whether the path belongs to the writable Project source or an installed Plugin source.
