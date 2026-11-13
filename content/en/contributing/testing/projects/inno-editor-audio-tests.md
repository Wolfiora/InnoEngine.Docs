---
title: "Editor audio preview tests"
description: "Verify independent Edit and Play audio owners and preview admission."
uid: project.inno-editor-audio-tests
kind: project
owners:
  - Inno.Editor.Audio.Tests
---
# Editor audio preview tests

`Inno.Editor.Audio.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Edit and Play sessions have independent execution scopes and lifetimes. Preview uses the real audio service and rejects attempts to preview through the Play session. The suite checks the Editor audio host boundary rather than certifying every physical playback device.

## Environment and execution

The project declares the `contract` layer. Use the actual project references and selected environment. A managed host fixture is not evidence of native device output; preserve the service and session ownership assertions.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Audio.Tests/Inno.Editor.Audio.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Editor Audio Host

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Audio.Tests/EditorAudioHostTests.cs). Representative entry points:

- `EditAndPlaySessionsOwnIndependentExecutionScopesAndLifetimes`
- `PreviewUsesTheRealAudioServiceAndRejectsPlaySessionPreview`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
