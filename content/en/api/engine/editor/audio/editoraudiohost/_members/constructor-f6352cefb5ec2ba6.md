---
uid: api.f6352cefb5ec2ba6b6bb2363d7a9df463f1cf49d0fbf86b1eae67e1a785ea1d5
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Assets.IAssetArtifactLookup,Inno.Core.Diagnostics.DiagnosticHub,System.Func{Inno.Audio.IAudioDevice},System.Func{Inno.Audio.AudioProjectSettings})"
source: xml
reviewed: 9dda61d6eefe2a7d30b5468b6317f3bb9b0579ba5620bb50995288c41cb3617a
title: "Constructor"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Creates the Editor audio host over the active authoring artifact lookup and settings source.

**Parameter `types`:** Active type catalog used for provider and mixer extension generations.

**Parameter `artifacts`:** Authoring artifact lookup shared by Edit and isolated Play sessions.

**Parameter `diagnostics`:** Shared Editor diagnostic hub that owns current audio issues.

**Parameter `deviceFactory`:** Required host-owned backend-neutral device factory.

**Parameter `settingsProvider`:** Optional host-owned callback that returns the latest isolated audio project settings snapshot.
