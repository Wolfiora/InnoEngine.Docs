---
title: "AssetBrowserRoot"
description: "Reference for AssetBrowserRoot in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.4060d5db1ea38275
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-assets-imgui
---
# `AssetBrowserRoot`

This reference describes `AssetBrowserRoot` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Assets`](#api-3fcc8f6c568aa259) | Field |
| [`Plugins`](#api-edde93decfaa0387) | Field |

## Type declaration

<a id="api-4060d5db1ea38275"></a>
<!-- api: T:Inno.Editor.Assets.ImGui.AssetBrowserRoot 538163c13e69c1a4ec1e03e3e284dad2523590c85321e79d3188040f58ee6b27 -->

```csharp
public enum Inno.Editor.Assets.ImGui.AssetBrowserRoot : int
```

Identifies the authoring or installed-content root displayed by the Asset Browser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L14).

## `Assets`

<a id="api-3fcc8f6c568aa259"></a>
<!-- api: F:Inno.Editor.Assets.ImGui.AssetBrowserRoot.Assets 86229f740944f550948c8d0de52f150743ff25806d386e3a8c3db394a1da944f -->

```csharp
Inno.Editor.Assets.ImGui.AssetBrowserRoot.Assets = 0
```

The writable project `Assets` authoring root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L19).

## `Plugins`

<a id="api-edde93decfaa0387"></a>
<!-- api: F:Inno.Editor.Assets.ImGui.AssetBrowserRoot.Plugins 520a0c7977a8024e68c5a8e3ea185d5ab4e4cb2549d0d9dc9930d1acd5422903 -->

```csharp
Inno.Editor.Assets.ImGui.AssetBrowserRoot.Plugins = 1
```

The read-only `Plugins` installation root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L23).
