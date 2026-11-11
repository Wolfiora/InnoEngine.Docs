---
title: Audio import tests
description: Encoded audio metadata, separate artifacts and rejection of corrupt source content.
uid: project.inno-audio-assets-tests
kind: project
owners:
  - Inno.Audio.Assets.Tests
---
# Audio import tests

`Inno.Audio.Assets.Tests` checks the managed audio importer through the actual asset pipeline. Import success establishes metadata and artifact publication; it does not establish native decoding, playback or an available audio device.

## Behavior covered

`AudioClipImporterTests.ImportsWavFlacAndMp3IntoMetadataAndSeparateEncodedArtifacts` verifies supported encoded inputs and the separation between runtime metadata and encoded payloads. `CorruptEncodedSourceFailsWithoutCommittingAnAsset` checks the failure boundary: rejected input must not publish a completed asset.

Read [the importer contract](../../api/projects/inno-audio-assets.md) for source and runtime artifact responsibilities. Native content preparation is covered by [MiniAudio adapter tests](inno-adapter-audio-miniaudio-tests.md).

## Run and maintain

Use [the shared validation workflow](../validate-change.md). A focused diagnostic is:

```powershell
dotnet test tests/audio/Inno.Audio.Assets.Tests/Inno.Audio.Assets.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

Keep failed-publication assertions and release the fixture-owned asset session and temporary files. The xUnit methods do not define a stable product API.

[Read the complete importer scenarios and project references](https://github.com/Wolfiora/InnoEngine/tree/80fbbb550f0de634b04605b31abc4d96b3d526f6/tests/audio/Inno.Audio.Assets.Tests).
