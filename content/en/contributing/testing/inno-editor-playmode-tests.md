---
title: "Play Mode and Console behavior tests"
description: "Verify compilation transitions, captured input, retained diagnostics and native layout."
uid: project.inno-editor-playmode-tests
kind: project
owners:
  - Inno.Editor.PlayMode.Tests
---
# Play Mode and Console behavior tests

`Inno.Editor.PlayMode.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Play entry waits for compilation and can be canceled before scripts are ready. Failure returns to Edit without replacing scenes; pending stop retains history and blocks a new generation until work drains. Exit restores editing history.

Input tests preserve pointer bounds even after consumption, keep captured input isolated by window, disarm on window exit and route game input only after Editor consumption. Console tests preserve distinct native card identities and uniform spacing. Popup tests cover content-width search, downward selectors and panel bounds.

Clear-on-Play and manual history clear preserve current diagnostics until their causes resolve. Completed sessions retain every runtime severity; failed entry keeps preparation diagnostics because simulation never started.

Daily native behavior and lifecycle contracts belong here; ten-thousand-row scale measurements belong to [Editor performance tests](inno-editor-performance-tests.md). Both use the same Inno.Testing.Editor.Native fixture rather than copied lifecycle implementations.

## Environment and execution

The project declares the `contract` layer. Prepare the selected Editor native product and deployment through the plan. This owner declares successful results non-reusable across runs. Disable automatic imgui.ini output; persistence scenarios own temporary state rather than writing into compilation output.

Generate and inspect [one validation plan](../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/Inno.Editor.PlayMode.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Console Entry Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/ConsoleEntryLayoutTests.cs). Representative entry points:

- `DistinctEntryDomainsDoNotReuseImGuiCardIdentity`
- `CollapsedCardsUseOneUniformNativeItemSpacing`

### Console Panel Native Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/ConsolePanelNativeLayoutTests.cs).

### Editor Game Input Capture

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/EditorGameInputCaptureTests.cs). Representative entry points:

- `ConsumedMouseMovementStillUpdatesPointerBounds`
- `ConsumedMouseMovementDoesNotReleaseCapturedInputOrChangeOtherWindows`
- `WindowExitDisarmsCaptureBeforeItsFirstDeliveredInput`
- `DispatcherRoutesInputOnlyAfterEditorConsumption`

### Editor Play Mode

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/EditorPlayModeTests.cs). Representative entry points:

- `EntryWaitsForCompilationAndExitRestoresEditingHistory`
- `PendingStopRetainsHistoryAndBlocksNewGenerationUntilWorkDrains`
- `CompilationFailureReturnsToEditWithoutReplacingScenes`
- `EnteringPlayCanBeCancelledBeforeScriptsBecomeReady`

### Editor Popup Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/EditorPopupLayoutTests.cs). Representative entry points:

- `ContextMenuSearchUsesCompletePopupContentWidth`
- `TwoItemSelectorOpensBelowControlWithoutOverflow`
- `LongSelectorNearWindowBottomScrollsWithoutOpeningUpward`
- `SelectorInsideLayoutChildUsesContainingPanelBounds`

### Play Mode Log Retention

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/editor/Inno.Editor.PlayMode.Tests/PlayModeLogRetentionTests.cs). Representative entry points:

- `ClearOnPlayRemovesOldLogsButRetainsCurrentDiagnostics`
- `ManualClearRemovesHistoryButKeepsCurrentIssuesUntilResolved`
- `CompletedPlaySessionRetainsEveryRuntimeSeverity`
- `FailedEntryRetainsPreparationDiagnosticsBecauseSimulationNeverStarted`

## Extend safely

Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
