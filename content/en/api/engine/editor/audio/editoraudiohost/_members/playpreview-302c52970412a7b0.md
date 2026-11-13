---
uid: api.302c52970412a7b095ef100775772dea746321d841baeeb2f202aee3c72d0474
symbol: "engine:Inno.Editor.Audio:M:Inno.Editor.Audio.EditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions})"
source: xml
reviewed: 11f14fc4d934055b4d1427e5cc85db5490e257141169deac6705c3267a6a8143
title: "PlayPreview"
kind: api
owners: [Inno.Editor.Audio]
apiSurface: source-clr
---

Starts an Editor-owned preview voice through an active Edit Mode session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

**Returns:** The preview voice handle, initially in the preparing state.
