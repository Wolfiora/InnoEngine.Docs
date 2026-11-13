---
uid: api.b30b35932215cbebadba9d599b9a3fa6f90cf2a34479b6a58f6f275d856e7173
symbol: "engine:Inno.Audio:M:Inno.Audio.AudioClipDescriptor.#ctor(Inno.Audio.AudioCodecId,Inno.Audio.AudioClipLoadMode,System.Int32,System.Int32,System.Int64,System.Int64)"
source: xml
reviewed: d58085f39ffd4949895d27fe81877bfa2dc6a8409c701224c1537eaf90410de2
title: "Constructor"
kind: api
owners: [Inno.Audio]
apiSurface: source-clr
---

Creates a backend clip description.

**Parameter `codec`:** Codec protocol used by the artifact.

**Parameter `loadMode`:** Required decoded or streamed storage strategy.

**Parameter `channels`:** Encoded channel count.

**Parameter `sampleRate`:** Encoded sample rate in frames per second.

**Parameter `frameCount`:** Total decoded frame count when known.

**Parameter `encodedByteLength`:** Encoded artifact length in bytes.

**Exception `T:System.ArgumentOutOfRangeException`:** The load mode is undefined or a channel, rate, frame, or byte count is outside its valid range.
