---
title: MiniAudio backend
description: Choose audible or hardwareless native audio and understand its preparation and deployment boundaries.
uid: backends.miniaudio
kind: explanation
owners:
  - Inno.Adapter.Audio.MiniAudio
  - Inno.Native.MiniAudio
  - Inno.Build.Toolchains.MiniAudio
---
# MiniAudio backend

The MiniAudio backend implements the neutral audio device using miniaudio's engine, resource manager and node graph. Game code uses [audio playback](../manual/audio/play-audio.md); host composition chooses the backend and owns its device generation.

## Choose the operating mode

| Mode | What runs | What it demonstrates |
| --- | --- | --- |
| Ordinary output | Native graph and the selected operating-system output device | Playback through that device when initialization succeeds |
| `noDevice` | Native graph advanced by explicit PCM reads during updates | Native preparation, clock, scheduling and completion without opening audio hardware |
| Neutral muted device | The separate managed muted implementation | Neutral runtime behavior without claiming native execution |

Hardwareless MiniAudio is not a skipped native test. It still requires matching native binaries, creates native clips and advances the native graph. Conversely, success in this mode does not establish that a physical output device works.

## Supported adapter behavior

The adapter supplies WAV/FLAC/MP3 preparation, decoded and streamed loading, independent voice cursors, scheduled playback, two-dimensional pan and basic three-dimensional distance/cone/doppler behavior. It supports one to four listeners, bus routing and the eight standard filter/delay processor families. Actual product/target composition and successful device creation determine availability.

Use [the device project](../api/projects/inno-adapter-audio-miniaudio.md) for options and disposal. The [native reference](../api/projects/inno-native-miniaudio.md) is for backend authors, not an expanded gameplay API. Native library production belongs to [the component toolchain](../api/projects/inno-build-toolchains-miniaudio.md).

## Upstream and provenance

The inspected engine source pins [miniaudio revision 9634bed](https://github.com/mackron/miniaudio/tree/9634bedb5b5a2ca38c1ee7108a9358a4e233f14d), corresponding to its 0.11.25 header. Bindings and native source must move together. An upstream feature does not become an InnoEngine promise merely because a raw symbol exists.

The original [miniaudio license](../../../public/licenses/miniaudio.txt) is preserved without translation. Platform providers own target SDK selection; this shared backend does not maintain a second target-selection table. Current declarations and a buildable target are separate from completed hardware or platform acceptance.
