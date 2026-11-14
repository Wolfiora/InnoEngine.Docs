---
uid: api.4748c61bc3965d0c6dba8d449334bb480cf1cef8b6df3d88c3f428ff8a9774a8
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.ApplyMixer(Inno.Audio.AudioMixerAsset)"
source: xml
reviewed: 403c5b521e2b652122a0a8620e63152516c5948b555d51c77533eb1a519529c2
title: "AudioRuntime.ApplyMixer"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Builds and atomically installs a mixer graph from reloadable extensions.

## Parameters

**Parameter `asset`:** Mixer asset containing stable extension identifiers and neutral state.

## Returns

`true` when every extension resolved and the candidate became active.
