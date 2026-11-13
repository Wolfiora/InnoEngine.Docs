---
uid: api.9a1ec32b1c6e847a99d4396d14913e491084a946c75edc685fb2603851dc680c
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.IEditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions})"
source: xml
reviewed: 6e0e1fd62dd77943c04e576851663b9b062448d7bfad453ad017deed0c403253
title: "PlayPreview"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Starts an Editor-owned preview voice through an active Edit session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

**Returns:** The preview voice handle, initially in the preparing state.
