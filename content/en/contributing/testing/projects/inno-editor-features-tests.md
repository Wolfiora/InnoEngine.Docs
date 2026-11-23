---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-features-tests
symbol: project:Inno.Editor.Features.Tests
title: Inno.Editor.Features.Tests
kind: project
owners:
- Inno.Editor.Features.Tests
sourceFingerprint: e6b4321deaeae467483c2bd748646e40bc4b6e42a86a80031132da13562be402
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: InnoEngine contributors
description:
- Verify asset history, independent Edit and Play audio owners and preview admission.
outdated: false
---
# Inno.Editor.Features.Tests

`Inno.Editor.Features.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Edit and Play sessions have independent execution scopes and lifetimes. Preview uses the real audio service and rejects attempts to preview through the Play session. The suite checks the Editor audio host boundary rather than certifying every physical playback device.

Asset history covers file/directory undo and redo, identity metadata, FileBrowser drag/drop and failure rollback.

## Environment and execution

The project declares the `contract` layer. Use the actual project references and selected environment. A managed host fixture is not evidence of native device output; preserve the service and session ownership assertions.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/features/Inno.Editor.Features.Tests/Inno.Editor.Features.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Editor Audio Host

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/features/Inno.Editor.Features.Tests/EditorAudioHostTests.cs). Representative entry points:

- `EditAndPlaySessionsOwnIndependentExecutionScopesAndLifetimes`
- `PreviewUsesTheRealAudioServiceAndRejectsPlaySessionPreview`

### Asset History

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/features/Inno.Editor.Features.Tests/AssetHistoryTests.cs).

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
