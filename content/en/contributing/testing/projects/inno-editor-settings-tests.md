---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-settings-tests
symbol: project:Inno.Editor.Settings.Tests
title: Inno.Editor.Settings.Tests
kind: project
owners:
- Inno.Editor.Settings.Tests
sourceFingerprint: e92fb782b7c9595daa6279c0113d92f71b66ff5a604a821b36b040588d8f035c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify Console module discovery, persistent Editor settings, shared history and failure events.
outdated: false
---
# Inno.Editor.Settings.Tests

`Inno.Editor.Settings.Tests` owns Editor settings behavior.

## Behavior covered

`EditorSettingsTests` retains actual Console module discovery, persistent settings, shared history and failure-event assertions. A metadata-only fake would not verify the same behavior.

## Environment and execution

Inspect [the actual plan](../../validate-change.md) for the dependencies this owner selects. Fixtures own their directories and modules. No production visibility or script surface is widened for these tests.

[Browse the pinned settings owner](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/framework/Inno.Editor.Settings.Tests).
