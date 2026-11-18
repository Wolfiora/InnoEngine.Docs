---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f6352cefb5ec2ba6b6bb2363d7a9df463f1cf49d0fbf86b1eae67e1a785ea1d5
symbol: engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Assets.IAssetArtifactLookup,Inno.Core.Diagnostics.DiagnosticHub,System.Func{Inno.Audio.IAudioDevice},System.Func{Inno.Audio.AudioProjectSettings})
title: EditorAudioHost.Constructor
kind: api
owners:
- Inno.Editor.Audio
apiSurface: source-clr
sourceFingerprint: bdcc00dcb114412825c0d6709a26e4b0d078adfab7de8c498eab44365092a372
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `types`:** Active type catalog used for provider and mixer extension generations.

**Parameter `artifacts`:** Authoring artifact lookup shared by Edit and isolated Play sessions.

**Parameter `diagnostics`:** Shared Editor diagnostic hub that owns current audio issues.

**Parameter `deviceFactory`:** Required host-owned backend-neutral device factory.

**Parameter `settingsProvider`:** Optional host-owned callback that returns the latest isolated audio project settings snapshot.
