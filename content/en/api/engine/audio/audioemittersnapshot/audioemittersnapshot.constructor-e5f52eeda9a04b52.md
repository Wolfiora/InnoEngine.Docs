---
uid: api.e5f52eeda9a04b52e5a261ccdf2982d8e657249266bb476ad17b53984da91237
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioEmitterSnapshot.#ctor(System.Guid,Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions,System.Boolean,System.UInt64)"
source: xml
reviewed: 5e213f3e6d87cbe6fa416ed89d60fa51876829c539b72e3b8da8a6c9082264c8
title: "AudioEmitterSnapshot.Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates an immutable emitter snapshot.

## Parameters

**Parameter `id`:** Stable emitter identity across updates.

**Parameter `clip`:** Imported clip requested by the emitter.

**Parameter `options`:** Current playback and spatial parameters.

**Parameter `shouldPlay`:** Whether the runtime should retain active playback for this emitter.

**Parameter `playbackRevision`:** Monotonic source-owned revision used to request a fresh voice for the same emitter.
