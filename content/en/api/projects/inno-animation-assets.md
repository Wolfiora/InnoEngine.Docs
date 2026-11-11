---
title: Inno.Animation.Assets
description: Import and export validated structured animation sources through shared serialization.
uid: project.inno-animation-assets
kind: project
owners:
  - Inno.Animation.Assets
---
# Inno.Animation.Assets

The animation importer reads and writes the current `.ianim` structured source format. It belongs to authoring; player composition consumes the neutral animation contract, runtime and frozen artifacts without this importer.

## Structured source workflow

`AnimationClipImporter` is discovered through its asset-importer declaration. Import uses the generation-bound serialization services supplied by the asset context, constructs the clip, validates it and stages an immutable artifact named `runtime`. Export validates the clip and serializes the corresponding source through the same context.

This is the shared structured serialization system, not a separate JSON side channel. Do not hand-author a second wire format simply because the extension is a text-like name. Source writing still requires an appropriate writable source mount and asset export context.

## Import and export contract

Invalid duration, unordered keyframes or markers, duplicate binding tracks, incompatible value kinds and empty marker event IDs cause explicit validation failure. A failed candidate is not a valid imported clip. Export observes cancellation before returning complete source bytes; import passes cancellation to artifact staging.

An authoring clip is mutable configuration. Playback validates it again and freezes its own arrays and marker payloads. A later source edit therefore requires a new playback snapshot rather than mutating the current one implicitly.

## API reference

The importer reference retains its public type and protected import/export extension contracts. [Play clips](../../manual/animation/play-clips.md) explains the runtime side of the same data model.

[Browse animation importer types](../types/animation-assets/index.md).
