---
title: "ImGuiFontStyle"
description: "Reference for ImGuiFontStyle in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.e3de92e697741de2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiFontStyle`

This reference describes `ImGuiFontStyle` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Bold`](#api-63717b1e97d315e4) | Field |
| [`Italic`](#api-4e518548d6e71113) | Field |
| [`Regular`](#api-29bbf3868f8c9b60) | Field |

## Type declaration

<a id="api-e3de92e697741de2"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiFontStyle 6ed83cb4a46b86e3fda18348edeb18cb649b166f67f7becd3b21893de762d742 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiFontStyle : int
```

Chooses composable font emphasis while leaving actual font ownership with the presentation host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L11).

## `Bold`

<a id="api-63717b1e97d315e4"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFontStyle.Bold 9ac9b4f5c298f69f92c854002566b3b174025a9745440ad410ae65ccb8ff20f8 -->

```csharp
Inno.Editor.ImGui.ImGuiFontStyle.Bold = 1
```

Emphasizes text with the bold face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L20).

## `Italic`

<a id="api-4e518548d6e71113"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFontStyle.Italic a7c06ae022bd9889082a906e07b6782a02d9752e7197013bb57c984858638b14 -->

```csharp
Inno.Editor.ImGui.ImGuiFontStyle.Italic = 2
```

Emphasizes text with the italic face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L24).

## `Regular`

<a id="api-29bbf3868f8c9b60"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiFontStyle.Regular b5cb0006b5bbcb35f2bf5d22da005c3ce7ee72a1373d8a140127ea4954c44fbb -->

```csharp
Inno.Editor.ImGui.ImGuiFontStyle.Regular = 0
```

Uses the ordinary face.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/TextInput/ImGuiFont.cs#L16).
