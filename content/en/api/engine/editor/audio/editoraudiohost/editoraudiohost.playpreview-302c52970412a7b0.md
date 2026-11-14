---
uid: api.302c52970412a7b095ef100775772dea746321d841baeeb2f202aee3c72d0474
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions})"
source: xml
reviewed: 71ed67b4a377118e35d4c76c3f57b6f4552523d99c1045a7eeeada3985c94190
title: "EditorAudioHost.PlayPreview"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Starts an Editor-owned preview voice through an active Edit Mode session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

**Returns:** The preview voice handle, initially in the preparing state.
