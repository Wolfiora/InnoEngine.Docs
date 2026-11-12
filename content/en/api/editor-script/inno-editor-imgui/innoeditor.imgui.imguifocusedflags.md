---
title: "ImGuiFocusedFlags"
description: "Reference for ImGuiFocusedFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.08d8575bf104fc46
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiFocusedFlags`

This reference describes `ImGuiFocusedFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`AnyWindow`](#api-0002e76642a24c9c) | Field |
| [`ChildWindows`](#api-102d23319532a8fb) | Field |
| [`DockHierarchy`](#api-5eb6b321863d3474) | Field |
| [`None`](#api-275fcec85a979af6) | Field |
| [`NoPopupHierarchy`](#api-9791a0c66c42da09) | Field |
| [`RootAndChildWindows`](#api-e2eb7af7905fafb2) | Field |
| [`RootWindow`](#api-bb617d7916f69242) | Field |

## Type declaration

<a id="api-08d8575bf104fc46"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiFocusedFlags 0097c77ecd8962a3b4a1465ca17d15adb190a23912027f355459da28b1393d0c -->

```csharp
public enum InnoEditor.ImGui.ImGuiFocusedFlags : int
```

Defines the supported focused flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L8).

## `AnyWindow`

<a id="api-0002e76642a24c9c"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.AnyWindow 845a912f68a887d12eeeed145f6ea266dd374097dcbfa9b54b9bd41d95328130 -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.AnyWindow = 4
```

Return true if any window is focused. Important: If you are trying to tell how to dispatch your low-level inputs, do NOT use this. Use 'io.WantCaptureMouse' instead! Please read the FAQ!


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L25).

## `ChildWindows`

<a id="api-102d23319532a8fb"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.ChildWindows 5f419427dc48ad87dbf08e7f8f952636ed1e89a940ecf6c6f88d7255712e864b -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.ChildWindows = 1
```

Return true if any children of the window is focused


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L17).

## `DockHierarchy`

<a id="api-5eb6b321863d3474"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.DockHierarchy 6ff6e18f07ef02f6093d1f5883f3d18a944a7eb9b622b061dca06a285cdb73c5 -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.DockHierarchy = 16
```

Consider docking hierarchy (treat dockspace host as parent of docked window) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L33).

## `None`

<a id="api-275fcec85a979af6"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.None 42e63328687806e7a177d14c066326674fa2e7d2a51b3b4fe99f496ddb4a7027 -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L13).

## `NoPopupHierarchy`

<a id="api-9791a0c66c42da09"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.NoPopupHierarchy 2c7aa907f49c4aa3adbbe1b3336b386d0266d861c988b87d2fae7486da108560 -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.NoPopupHierarchy = 8
```

Do not consider popup hierarchy (do not treat popup emitter as parent of popup) (when used with _ChildWindows or _RootWindow)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L29).

## `RootAndChildWindows`

<a id="api-e2eb7af7905fafb2"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.RootAndChildWindows c1f29c2b1dee0493e8861409cba69d5ed7554e91ee37d37d9cce31e8146880d8 -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.RootAndChildWindows = 3
```

Selects the root and child windows presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L37).

## `RootWindow`

<a id="api-bb617d7916f69242"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiFocusedFlags.RootWindow fa772f9f67ffae22e7e9455039588cce0fa4021cc28cd7e51e4d21060e4401ee -->

```csharp
InnoEditor.ImGui.ImGuiFocusedFlags.RootWindow = 2
```

Test from root window (top most parent of the current hierarchy)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiFocusedFlags.cs#L21).
