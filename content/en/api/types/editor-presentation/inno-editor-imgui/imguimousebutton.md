---
title: "ImGuiMouseButton"
description: "Reference for ImGuiMouseButton in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.dbf688c120cbaf2b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiMouseButton`

This reference describes `ImGuiMouseButton` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Count`](#api-16f374753cd72b29) | Field |
| [`Left`](#api-a7a709d9f445c670) | Field |
| [`Middle`](#api-03e443a82e900666) | Field |
| [`Right`](#api-eae445804959daae) | Field |

## Type declaration

<a id="api-dbf688c120cbaf2b"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiMouseButton 344f391dc78ed99ee1bca3daf0fde334496bff66270a74dd1a2af6da1500f0f3 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiMouseButton : int
```

Defines the supported mouse button choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L7).

## `Count`

<a id="api-16f374753cd72b29"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseButton.Count 0c71411ab1539650784dfa72f6f48cbd427f46548e91c424305000f5c2d5d39c -->

```csharp
Inno.Editor.ImGui.ImGuiMouseButton.Count = 5
```

Marks the exclusive end of the valid option range.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L24).

## `Left`

<a id="api-a7a709d9f445c670"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseButton.Left d7da8cc939d705d57958bf9bb96ac3f766ae50888719a258107d887c027c7312 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseButton.Left = 0
```

Selects the left presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L12).

## `Middle`

<a id="api-03e443a82e900666"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseButton.Middle 6cfb97bbf3c00bc33cc96a5954d5d5b0c4d2f5bd0e5c9869eb7a6c70cae6aafc -->

```csharp
Inno.Editor.ImGui.ImGuiMouseButton.Middle = 2
```

Selects the middle presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L20).

## `Right`

<a id="api-eae445804959daae"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiMouseButton.Right b75f50a0489510b32aab3a013d4e83a6094dc5593f06594e49703df600689583 -->

```csharp
Inno.Editor.ImGui.ImGuiMouseButton.Right = 1
```

Selects the right presentation behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiMouseButton.cs#L16).
