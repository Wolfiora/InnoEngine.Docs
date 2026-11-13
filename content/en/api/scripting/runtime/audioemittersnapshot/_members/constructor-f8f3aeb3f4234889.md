---
uid: api.f8f3aeb3f42348895b8ed0062cb7f00248eebb113e4a4e6f9e843fa0fcf5da96
symbol: "scripting:Inno.Audio:M:InnoEngine.Audio.AudioEmitterSnapshot.#ctor(System.Guid,InnoEngine.Audio.AudioClipAsset,InnoEngine.Audio.AudioPlayOptions,System.Boolean,System.UInt64)"
source: xml
reviewed: fc8a68ebcc2e70b8dbf1b428e3d4376dd56e42f95db59ff2ea5bdc5eb0c48aa2
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
