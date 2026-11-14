---
uid: api.9a1ec32b1c6e847a99d4396d14913e491084a946c75edc685fb2603851dc680c
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.IEditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions})"
source: xml
reviewed: 48be6f84194407b1e8bb55a12416fd9b674cfcd8bf872149b4577c9b5f9c3e80
title: "IEditorAudioHost.PlayPreview"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Starts an Editor-owned preview voice through an active Edit session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

**Returns:** The preview voice handle, initially in the preparing state.
