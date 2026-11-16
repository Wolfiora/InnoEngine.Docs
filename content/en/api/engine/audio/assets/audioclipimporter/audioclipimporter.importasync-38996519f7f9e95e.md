---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.38996519f7f9e95e8817e0937f697ff7f28e51499a297adaaca33c667fe0fb1f
symbol: engine:Inno.Audio.Assets:M:Inno.Audio.Assets.AudioClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Audio.AudioClipAsset},System.Threading.CancellationToken)
title: AudioClipImporter.ImportAsync
kind: api
owners:
- Inno.Audio.Assets
apiSurface: source-clr
reviewed: 2f0e672562eaf439762e7fa12a2776db2f5c5ca474c29e998b98985bd2d9325f
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
