---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.35750157151ce1b721a40b6f0bf28cd4e6e614736c7429af9a81860d7d7cddc7
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactRetention.Retain(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream})
title: ArtifactRetention.Retain
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: 4fd8c4d9ea530a831e112ee1df04689668ce3f5ce13303cd4592a7234c148a0a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `artifact`:** Verified immutable metadata; the provider must serialize acquisition with collection.

**Parameter `openRead`:** Opens immutable bytes; this retention owner adds an independent stream pin before invoking it.

## Returns

A lease that releases exactly one reference, including when disposed from another thread.
