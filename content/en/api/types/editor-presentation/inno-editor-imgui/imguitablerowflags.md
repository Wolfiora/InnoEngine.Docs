---
title: "ImGuiTableRowFlags"
description: "Reference for ImGuiTableRowFlags in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.108e473241b01a85
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiTableRowFlags`

This reference describes `ImGuiTableRowFlags` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Headers`](#api-160c945875bfc708) | Field |
| [`None`](#api-2972a2b1aa0b7a62) | Field |

## Type declaration

<a id="api-108e473241b01a85"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiTableRowFlags 439dfba627a4f9f208fd887d20464f94a313b9c6c2e20437fd95c4c896b645b7 -->

```csharp
public enum Inno.Editor.ImGui.ImGuiTableRowFlags : int
```

Defines the supported table row flags choices at the Editor presentation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableRowFlags.cs#L8).

## `Headers`

<a id="api-160c945875bfc708"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableRowFlags.Headers 7d937c42bd76d153e72434f52b359925339f07e2a0582a1f0687e1b3145167c1 -->

```csharp
Inno.Editor.ImGui.ImGuiTableRowFlags.Headers = 1
```

Identify header row (set default background color + width of its contents accounted differently for auto column width)


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableRowFlags.cs#L17).

## `None`

<a id="api-2972a2b1aa0b7a62"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiTableRowFlags.None 35ca01577ad557eb4d69503d42304229019e2fadf7ee3493cdc807e58bdb0cd5 -->

```csharp
Inno.Editor.ImGui.ImGuiTableRowFlags.None = 0
```

Uses the ordinary behavior without additional options.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/Options/ImGuiTableRowFlags.cs#L13).
