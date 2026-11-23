---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-editor-panels-native-tests
symbol: project:Inno.Editor.Panels.Native.Tests
title: Inno.Editor.Panels.Native.Tests
kind: project
owners:
- Inno.Editor.Panels.Native.Tests
sourceFingerprint: aa6536b3b12e5a3fc3081c960d76feb927c1ae92d005ce9945d7df35675c12b7
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify native Console layout, popup placement and panel presentation against the real Editor ImGui context.
outdated: false
---
# Inno.Editor.Panels.Native.Tests

`Inno.Editor.Panels.Native.Tests` owns the behavior described below. Use this guide to find relevant assertions and their environment; the scenario list is not a current passing result.

## Behavior covered

Console tests preserve distinct native card identities and uniform spacing. Popup tests cover content-width search, downward selectors and panel bounds.

Daily native panel behavior belongs here; Play Mode transitions and captured game input belong to [Play Mode tests](inno-editor-playmode-native-tests.md). Both use the shared Inno.Testing.Editor.Native fixture rather than copied lifecycle implementations.

## Environment and execution

Prepare the selected Editor native product and deployment through the plan. Disable automatic imgui.ini output; persistence scenarios own temporary state rather than writing into compilation output.

Generate and inspect [one validation plan](../../validate-change.md), then execute that plan with its evaluated target, product and output properties. A focused test filter helps diagnosis; it does not replace required owner evidence. [The pinned project file](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/panels/Inno.Editor.Panels.Native.Tests/Inno.Editor.Panels.Native.Tests.csproj) contains the actual references and metadata.

## Scenario reference

Representative entry points are checked against the pinned source. The linked files retain all assertions and parameterized cases.

### Console Entry Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/panels/Inno.Editor.Panels.Native.Tests/ConsoleEntryLayoutTests.cs). Representative entry points:

- `DistinctEntryDomainsDoNotReuseImGuiCardIdentity`
- `CollapsedCardsUseOneUniformNativeItemSpacing`

### Console Panel Native Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/panels/Inno.Editor.Panels.Native.Tests/ConsolePanelNativeLayoutTests.cs).

### Editor Popup Layout

[Read the complete assertions](https://github.com/Wolfiora/InnoEngine/blob/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/composition/editor/panels/Inno.Editor.Panels.Native.Tests/EditorPopupLayoutTests.cs). Representative entry points:

- `ContextMenuSearchUsesCompletePopupContentWidth`
- `TwoItemSelectorOpensBelowControlWithoutOverflow`
- `LongSelectorNearWindowBottomScrollsWithoutOpeningUpward`
- `SelectorInsideLayoutChildUsesContainingPanelBounds`


## Extend safely

Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely). Fixtures own their own sessions, temporary files and processes. Preserve thread, release and failure ordering; do not remove another owner’s lock or widen production visibility.
