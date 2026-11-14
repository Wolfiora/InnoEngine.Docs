---
uid: api.e4aa258a643c974e06d903bc1a3f6744b82b191a7ad052117d6593d452be5387
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.Audio.TryGetVoiceState(InnoEngine.Audio.AudioVoiceHandle,InnoEngine.Audio.AudioPlaybackState@)"
source: xml
reviewed: abbdf4e8fda86f98667255aff5a0adbaf79e85c4f4fec5b87a1e3c7f9adaa886
title: "Audio.TryGetVoiceState"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Queries the current state of a voice.

**Parameter `voice`:** Voice handle to query.

**Parameter `playbackState`:** Receives the current state when the handle is known.

**Returns:** `true` when the handle belongs to a known voice.
