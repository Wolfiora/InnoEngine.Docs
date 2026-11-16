---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.38996519f7f9e95e8817e0937f697ff7f28e51499a297adaaca33c667fe0fb1f
symbol: engine:Inno.Audio.Assets:M:Inno.Audio.Assets.AudioClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Audio.AudioClipAsset},System.Threading.CancellationToken)
title: AudioClipImporter.ImportAsync
kind: api
owners:
- Inno.Audio.Assets
apiSurface: source-clr
reviewed: 2b081739ad12fa9f6b680d98c59b7033e55f8eca7e8e760774cf31badc214c43
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Source bytes and normalized source extension for the current import.

**Parameter `output`:** Writer that receives the audio asset and its two runtime artifacts.

**Parameter `cancellationToken`:** Token used to cancel artifact writes.

## Returns

A task that completes after both artifacts have been committed.
