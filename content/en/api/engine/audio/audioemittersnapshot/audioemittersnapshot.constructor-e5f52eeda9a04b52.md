---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e5f52eeda9a04b52e5a261ccdf2982d8e657249266bb476ad17b53984da91237
symbol: engine:Inno.Audio:M:Inno.Audio.AudioEmitterSnapshot.#ctor(System.Guid,Inno.Audio.AudioClipAsset,Inno.Audio.AudioPlayOptions,System.Boolean,System.UInt64)
title: AudioEmitterSnapshot.Constructor
kind: api
owners:
- Inno.Audio
apiSurface: source-clr
sourceFingerprint: b331f76d4cc6fae0256daf026f79c724fac2d10ee94acc919d59f83c1bb6967d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable emitter identity across updates.

**Parameter `clip`:** Imported clip requested by the emitter.

**Parameter `options`:** Current playback and spatial parameters.

**Parameter `shouldPlay`:** Whether the runtime should retain active playback for this emitter.

**Parameter `playbackRevision`:** Monotonic source-owned revision used to request a fresh voice for the same emitter.
