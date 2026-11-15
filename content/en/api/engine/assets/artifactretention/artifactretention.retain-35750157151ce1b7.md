---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.35750157151ce1b721a40b6f0bf28cd4e6e614736c7429af9a81860d7d7cddc7
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactRetention.Retain(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream})
title: ArtifactRetention.Retain
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 2f71bffa13c2d51b6fd742832b35e456a2d9c347dc70b73109426ab12105c8b6

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Retains a verified output before its owner permits cache collection.

## Parameters

**Parameter `artifact`:** Verified immutable metadata; the provider must serialize acquisition with collection.

**Parameter `openRead`:** Opens immutable bytes; this retention owner adds an independent stream pin before invoking it.

## Returns

A lease that releases exactly one reference, including when disposed from another thread.
