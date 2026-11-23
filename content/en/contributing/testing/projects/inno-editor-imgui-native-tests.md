---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-imgui-native-tests
symbol: project:Inno.Editor.ImGui.Native.Tests
title: Inno.Editor.ImGui.Native.Tests
kind: project
owners:
- Inno.Editor.ImGui.Native.Tests
sourceFingerprint: 7c2a9e8429b5c4ecefe455e9c716e8365332343fc8801c801bcdb19c4b867794
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify real window metrics, font contexts and acknowledged retirement.
outdated: false
---
# Inno.Editor.ImGui.Native.Tests

`Inno.Editor.ImGui.Native.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Interaction options are explicit immutable product conventions; wheel direction cannot silently disable or amplify input. Viewport tests reconcile drawable metrics and requested geometry, keep the prior logical DPI scale until the next ImGui frame, and apply detached-window requests after platform events.

Retirement retains window, renderer, application and context owners until rendering acknowledges destruction. Incomplete drains can finish at the next safety point; creation failures surface at managed safety points after cleanup. Faulted retirement exits through its isolated case instead of forcibly releasing still-retained owners.

Widget assertions cover bounded property rows, downward selectors, scrolling near the window edge and full-width menu search. Font coverage checks four default styles' English and icons. Custom font registration does not append language supplements automatically; callers provide font files and required glyphs.

Font retirement compares live memory from one full GC snapshot (heap size minus fragmentation), checking sequence, highest generation and compacting/concurrent state. The existing 2 MiB growth threshold, weak retirement references and independent surviving context/window assertions remain required. These private measurements are not production APIs.

## Environment and execution

The project declares the `native` layer. This native suite requires the selected Editor deployment. Win32/Cocoa surface kinds come from the real host and agree with its SDL main window. macOS window cases execute from the test assembly's main-thread process entry; an ordinary xUnit worker cannot assume Cocoa ownership. Required cases remain isolated. Disable automatic imgui.ini persistence; explicit file scenarios own their own temporary roots. These tests do not certify subjective focus, dragging or visual quality.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/presentation/Inno.Editor.ImGui.Native.Tests/Inno.Editor.ImGui.Native.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Im Gui Interaction Options

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/presentation/Inno.Editor.ImGui.Native.Tests/ImGuiInteractionOptionsTests.cs). Representative entry points:

- `ProductInteractionConventionsAreExplicitAndImmutable`
- `WheelDirectionCannotSilentlyDisableOrAmplifyInput`

### Viewport Metrics

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/presentation/Inno.Editor.ImGui.Native.Tests/ViewportMetricsTests.cs). Representative entry points:

- `FrameRefreshesDrawableMetricsWithoutAPlatformScaleCallback`
- `MetricRefreshPreservesRequestedViewportGeometry`
- `DetachedWindowAppliesRequestsAfterPlatformEventReconciliation`
- `LogicalDpiTransitionRetainsThePreviousScaleUntilImGuiStartsItsFrame`

### Viewport Retirement

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/presentation/Inno.Editor.ImGui.Native.Tests/ViewportRetirementTests.cs). Representative entry points:

- `FaultedRetirementRetainsWindowRendererAndApplicationOwners`
- `DetachedWindowRemainsAliveUntilRenderingAcknowledgesRetirement`
- `IncompleteDrainRetainsContextOwnershipAndCanFinishAtTheNextSafetyPoint`
- `CreationFailureIsReportedAtAManagedSafetyPointAfterCleanup`

### Widget Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/presentation/Inno.Editor.ImGui.Native.Tests/WidgetLayoutTests.cs). Representative entry points:

- `PropertyRowsWrapWithinTwoToThreeColumnsWithoutScrollbars`
- `BoundedSelectorsOpenDownwardAndScrollOnlyWhenRequired`
- `SelectorsNearWindowBottomUseOnlyRemainingDownwardSpace`
- `ContextMenuSearchFillsItsActualContentWidthWithoutScrollbars`

## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
