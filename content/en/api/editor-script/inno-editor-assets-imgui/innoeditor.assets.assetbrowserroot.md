---
title: "AssetBrowserRoot"
description: "Reference for AssetBrowserRoot in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.editor-script.0ae1f61661a90731
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-assets-imgui
  - manual.scripting.use-script-api
---
# `AssetBrowserRoot`

This reference describes `AssetBrowserRoot` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Assets`](#api-d3436059e137c6ce) | Field |
| [`Plugins`](#api-63adf8201fc792da) | Field |

## Type declaration

<a id="api-0ae1f61661a90731"></a>
<!-- api: T:InnoEditor.Assets.AssetBrowserRoot 9507f57f7aae381f510ea5e7ec7dfb1b189eced8f8b15f64f939c515007a2031 -->

```csharp
public enum InnoEditor.Assets.AssetBrowserRoot : int
```

Identifies the authoring or installed-content root displayed by the Asset Browser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L14).

## `Assets`

<a id="api-d3436059e137c6ce"></a>
<!-- api: F:InnoEditor.Assets.AssetBrowserRoot.Assets dd8f8e3588abdb23d75289f24e50609352815a74f37f8695e03915f703c7e657 -->

```csharp
InnoEditor.Assets.AssetBrowserRoot.Assets = 0
```

The writable project `Assets` authoring root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L19).

## `Plugins`

<a id="api-63adf8201fc792da"></a>
<!-- api: F:InnoEditor.Assets.AssetBrowserRoot.Plugins a0117be1a16ab1a75f143b578a338963e54d6f629dd81bc003eab08c43148125 -->

```csharp
InnoEditor.Assets.AssetBrowserRoot.Plugins = 1
```

The read-only `Plugins` installation root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L23).
