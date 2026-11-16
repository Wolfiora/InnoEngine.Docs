---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9a1ec32b1c6e847a99d4396d14913e491084a946c75edc685fb2603851dc680c
symbol: engine:Inno.Editor.Audio:M:Inno.Editor.Audio.IEditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions})
title: IEditorAudioHost.PlayPreview
kind: api
owners:
- Inno.Editor.Audio
apiSurface: source-clr
reviewed: da5b4795d71cd21b6a517aa0cebcbf751793443bf3048c213e630d65c5712272
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

## Returns

The preview voice handle, initially in the preparing state.
