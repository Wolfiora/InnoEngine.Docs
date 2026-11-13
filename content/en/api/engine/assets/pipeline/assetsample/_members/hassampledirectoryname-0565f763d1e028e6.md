---
uid: api.0565f763d1e028e65d7e92148568191fcd0c3756fea8268ce8d478ffb264ff78
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetSample.HasSampleDirectoryName(Inno.Assets.AssetPath)"
source: xml
reviewed: 76489a2025e340234f45bd0b285dcb509a06e90ac276ea171ce7814b8fce485b
title: "HasSampleDirectoryName"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Determines whether the final path segment uses the sample-directory naming convention.

**Parameter `path`:** The isolated source path to inspect.

**Returns:** `true` when the final segment starts with `~`, regardless of whether the path belongs to the writable Project source or an installed Plugin source.
