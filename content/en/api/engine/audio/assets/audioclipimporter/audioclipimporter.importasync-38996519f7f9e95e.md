---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.38996519f7f9e95e8817e0937f697ff7f28e51499a297adaaca33c667fe0fb1f
symbol: engine:Inno.Audio.Assets:M:Inno.Audio.Assets.AudioClipImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.Audio.AudioClipAsset},System.Threading.CancellationToken)
title: AudioClipImporter.ImportAsync
kind: api
owners:
- Inno.Audio.Assets
apiSurface: source-clr
sourceFingerprint: db3913dbde94da8e28773fc6ea22f8ff5b94f88d090cd244c7cfbf39f9119995
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
