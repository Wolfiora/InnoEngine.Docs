---
uid: api.f8f3aeb3f42348895b8ed0062cb7f00248eebb113e4a4e6f9e843fa0fcf5da96
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioEmitterSnapshot.#ctor(System.Guid,InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioPlayOptions,System.Boolean,System.UInt64)"
source: xml
reviewed: d97c447e75d749b1732a6396c14ba970cdc2cc7037f7fd2e05f1a2ffb7a04ebe
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: editor-script
apiScope: Runtime
---

Creates an immutable emitter snapshot.

**Parameter `id`:** Stable emitter identity across updates.

**Parameter `clip`:** Imported clip requested by the emitter.

**Parameter `options`:** Current playback and spatial parameters.

**Parameter `shouldPlay`:** Whether the runtime should retain active playback for this emitter.

**Parameter `playbackRevision`:** Monotonic source-owned revision used to request a fresh voice for the same emitter.
