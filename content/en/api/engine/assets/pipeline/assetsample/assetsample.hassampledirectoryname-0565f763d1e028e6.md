---
uid: api.0565f763d1e028e65d7e92148568191fcd0c3756fea8268ce8d478ffb264ff78
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.HasSampleDirectoryName(Inno.Assets.AssetPath)"
source: xml
reviewed: 0ca3c1e15a50153c304a8af0b9444c0c8898abce29c9ac46336fe2b16fc6bb3a
title: "AssetSample.HasSampleDirectoryName"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Determines whether the final path segment uses the sample-directory naming convention.

**Parameter `path`:** The isolated source path to inspect.

**Returns:** `true` when the final segment starts with `~`, regardless of whether the path belongs to the writable Project source or an installed Plugin source.
