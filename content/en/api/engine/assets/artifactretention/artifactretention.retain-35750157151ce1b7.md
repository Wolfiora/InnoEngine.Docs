---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.35750157151ce1b721a40b6f0bf28cd4e6e614736c7429af9a81860d7d7cddc7
symbol: engine:Inno.Assets:M:Inno.Assets.ArtifactRetention.Retain(Inno.Assets.AssetArtifactInfo,System.Func{System.IO.Stream})
title: ArtifactRetention.Retain
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: ed72d431bde6e6963bfc5fe38178dfd88bd27eda3c4fcb804fb8a4889ffb2ab6
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
