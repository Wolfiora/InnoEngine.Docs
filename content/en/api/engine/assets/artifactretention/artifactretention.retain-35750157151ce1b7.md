---
uid: api.35750157151ce1b721a40b6f0bf28cd4e6e614736c7429af9a81860d7d7cddc7
symbol: "engine:Inno.Assets:M:Inno.Assets.ArtifactRetention.Retain(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream})"
source: xml
reviewed: 2f71bffa13c2d51b6fd742832b35e456a2d9c347dc70b73109426ab12105c8b6
title: "ArtifactRetention.Retain"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Retains a verified output before its owner permits cache collection.

**Parameter `artifact`:** Verified immutable metadata; the provider must serialize acquisition with collection.

**Returns:** A lease that releases exactly one reference, including when disposed from another thread.

**Parameter `openRead`:** Opens immutable bytes; this retention owner adds an independent stream pin before invoking it.
