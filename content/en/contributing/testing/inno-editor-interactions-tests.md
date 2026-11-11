---
title: "Editor history and navigation tests"
description: "Verify atomic undo, retryable transitions and pointer ownership."
uid: project.inno-editor-interactions-tests
kind: project
owners:
  - Inno.Editor.Interactions.Tests
---
# Editor history and navigation tests

`Inno.Editor.Interactions.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

History cases move neutral changes between stacks, retain failed transitions for retry, merge adjacent changes using stable keys and commit or revert transactions atomically. Scene history restores the affected properties on the existing graph, including sibling mutations made by a setter, complete local transform state and the corresponding world result.

Planar navigation retains pan capture outside the canvas, releases it without relying on a local release event, and prevents orbit from stealing it. Zoom preserves the pointer anchor independently of display density.

This domain owner excludes native preparation from transitive dependencies. Panel, Workbench, asset-browser and Console settings-discovery lifetimes remain with [presentation tests](inno-editor-presentation-tests.md).

## Environment and execution

The project declares the `domain` layer. Run the managed domain contracts through their actual dependencies. Keep resource, capture and failure cleanup even when a focused case uses no real window.

Generate and inspect [one validation plan](../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Interactions.Tests/Inno.Editor.Interactions.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Editor History

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Interactions.Tests/EditorHistoryTests.cs). Representative entry points:

- `ExecuteUndoAndRedoMoveNeutralChangeBetweenStacks`
- `FailedTransitionRemainsAvailableForRetry`
- `AdjacentChangesWithTheSameStableMergeKeyCoalesce`
- `TransactionCommitsAndRevertsAtomically`

### Editor Planar Navigation

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Interactions.Tests/EditorPlanarNavigationTests.cs). Representative entry points:

- `PanOwnsPointerOutsideCanvasAndReleasesWithoutLocalReleaseEvent`
- `AltOrbitDoesNotStealPanAndCancelReleasesCapture`
- `ZoomPreservesPointerAnchorAndIsIndependentOfDisplayDensity`

### Scene History

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.Interactions.Tests/SceneHistoryTests.cs). Representative entry points:

- `PropertyUndoRestoresOnlyThePropertyOnTheExistingSceneGraph`
- `PropertyUndoRestoresEverySiblingChangedByThePrimarySetter`
- `TransformManipulationTransactionUndoesAllLocalValuesAtomically`
- `WorldPositionEditRestoresLocalStorageAndWorldResultThroughHistory`

## Extend safely

Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
