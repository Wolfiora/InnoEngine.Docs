---
title: "ImGuiCond"
description: "Reference for ImGuiCond in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.0462d4ab8e64455d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiCond`

This reference describes `ImGuiCond` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Always`](#api-68b2a9704c9c2033) | Field |
| [`Appearing`](#api-a65d62c60226a0f9) | Field |
| [`FirstUseEver`](#api-50fc05d9b627b6f3) | Field |
| [`None`](#api-c6e10408c343dd59) | Field |
| [`Once`](#api-bd65256b4f9ff4ca) | Field |

## Type declaration

<a id="api-0462d4ab8e64455d"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiCond 8cf60ba9d2b7cce8f1f02c7125dbd1d8c965b2fc921118ba01d20012d39e012b -->

```csharp
public enum InnoEditor.ImGui.ImGuiCond : int
```

Defines the supported cond choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L8).

## `Always`

<a id="api-68b2a9704c9c2033"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCond.Always d23c5f2d0a70467ff5dd586f5e91616804707acbcaa24700c1d956956d7f733a -->

```csharp
InnoEditor.ImGui.ImGuiCond.Always = 1
```

No condition (always set the variable), same as _None


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L17).

## `Appearing`

<a id="api-a65d62c60226a0f9"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCond.Appearing 9613fbdb23ef78a300afc246fef56aeb1dfddca16633a26a8f95cf029fdde527 -->

```csharp
InnoEditor.ImGui.ImGuiCond.Appearing = 8
```

Set the variable if the object/window is appearing after being hidden/inactive (or the first time)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L29).

## `FirstUseEver`

<a id="api-50fc05d9b627b6f3"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCond.FirstUseEver 399ada906869730137d7332cc02838710467777c9abffaaccfcd0254c0e5f243 -->

```csharp
InnoEditor.ImGui.ImGuiCond.FirstUseEver = 4
```

Set the variable if the object/window has no persistently saved data (no entry in .ini file)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L25).

## `None`

<a id="api-c6e10408c343dd59"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCond.None f9e5656237ad0fc4d5978802abeed3a06b607135c736e80770647e30c985da9c -->

```csharp
InnoEditor.ImGui.ImGuiCond.None = 0
```

No condition (always set the variable), same as _Always


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L13).

## `Once`

<a id="api-bd65256b4f9ff4ca"></a>
<!-- api: F:InnoEditor.ImGui.ImGuiCond.Once 7bcd71c182ddb95e00c7ca9e1642e430d465fd0aefbd2dbd9e65e5f4eb9a1c38 -->

```csharp
InnoEditor.ImGui.ImGuiCond.Once = 2
```

Set the variable once per runtime session (only the first call will succeed)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiCond.cs#L21).
