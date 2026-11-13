---
title: "Editor graph transaction tests"
description: "Verify neutral history, atomic document edits and Missing recovery."
uid: project.inno-editor-graph-tests
kind: project
owners:
  - Inno.Editor.Graph.Tests
---
# Editor graph transaction tests

`Inno.Editor.Graph.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Document-controller cases preserve a neutral graph across assembly publication, compensate a later participant failure, recover Missing history without losing dirty state or reusing stale controllers, and replace documents atomically without retaining the caller's mutable document. Node edits record neutral history payloads.

This domain owner excludes native preparation from its transitive build dependencies. Actual canvas projection, hit testing and interaction remain with [presentation tests](inno-editor-presentation-tests.md); a filter does not replace that separation.

## Environment and execution

The project declares the `domain` layer. The managed domain suite does not prepare native products. Keep actual module, serialization and transaction dependencies; do not replace them with test-only production paths.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Graph.Tests/Inno.Editor.Graph.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Graph Document Controller

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Graph.Tests/GraphDocumentControllerTests.cs). Representative entry points:

- `AssemblyPublicationPreservesNeutralGraphAndRollsBackLaterParticipantFailure`
- `MissingGraphHistoryRecoversWithoutLosingDirtyStateOrReusingStaleController`
- `AddNode_RecordsNeutralHistoryPayload`
- `ReplaceDocument_IsAtomicUndoableAndDoesNotRetainTheCallerDocument`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
