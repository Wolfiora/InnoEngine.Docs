---
title: Inno.Audio.Assets
description: Import encoded audio into runtime metadata and immutable audio-data artifacts.
uid: project.inno-audio-assets
kind: project
owners:
  - Inno.Audio.Assets
---
# Inno.Audio.Assets

The standard audio importer turns supported encoded source files into a small runtime description and an immutable encoded-data artifact. It belongs to authoring and the asset pipeline; playback uses the resulting artifacts without an Editor dependency.

## Import supported audio

`AudioClipImporter` is discovered through the asset-importer declaration and handles `.wav`, `.flac` and `.mp3`. It does not require a companion source file. Place supported source content in the project's configured asset source mounts and let the asset pipeline import it. The resulting `AudioClipAsset` is the clip passed to playback.

The importer reads WAV chunks, FLAC STREAMINFO or MP3 frame metadata. Invalid headers, truncated structures and inconsistent metadata handled by these readers fail import with diagnostics. Metadata validation is not a promise to decode every possible codec variant successfully on every device; playback preparation can still fail.

## Artifact and ownership contract

The `runtime` artifact encodes codec, channel count, sample rate, frame count and encoded length. `audio-data` contains the original encoded bytes in the immutable artifact store. Large encoded data is not copied into the runtime payload.

`IAssetArtifactLookup.TryGetArtifact` can locate artifact metadata for a persistent asset identity. It does not by itself grant a byte-reading lifetime. Actual reads acquire an artifact lease and retain it until the reader and any dependent device work finish. The runtime passes a source lease to the device, not a physical cache path.

The same artifact contract supports an authoring asset pipeline and a player asset database. Cache selection uses persistent identity and content revision; it does not keep a mutable asset object alive across frames. See [audio artifact lifetime](../../architecture/audio-lifetime.md#clips-and-preloads).

## Current limits

The built-in importer does not claim Ogg/Opus support or automatic transcoding. Additional import formats and gameplay-specific audio assets belong in explicit extensions. BGM, dialogue policy and scene audio components are not responsibilities of this importer.

## API reference

The source reference includes the importer and its protected extension contract. [Play and control audio](../../manual/audio/play-audio.md) starts from an already imported clip.

[Browse audio importer types](../types/audio-assets/index.md).
