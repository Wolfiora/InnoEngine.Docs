---
title: "AssetBrowserModule"
description: "Reference for AssetBrowserModule in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.c0fdaf5642bf05fd
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-assets-imgui
---
# `AssetBrowserModule`

This reference describes `AssetBrowserModule` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

**Direct interfaces:** `Inno.Editor.Inspection.IInspectionIconProvider<Inno.Assets.Pipeline.AssetFileEntry>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4fb9acb7de696ec6) | Method |
| [`Capture`](#api-586111599d0bdd85) | Method |
| [`GetIcon`](#api-678dfa6abdd00e4a) | Method |
| [`OnDispose`](#api-e4e20ac82d314170) | Method |
| [`Restore`](#api-e93b33a871c7cb3f) | Method |
| [`browser`](#api-1cb6655414e50812) | Property |
| [`edits`](#api-781e8741b03d2a86) | Property |
| [`folderIcon`](#api-a15c85ed4e869818) | Property |

## Type declaration

<a id="api-c0fdaf5642bf05fd"></a>
<!-- api: T:Inno.Editor.Assets.ImGui.AssetBrowserModule e9d7841d2b1a3ac5f342bbce8ada1901aa47f568dff5637ecbe6deaec93c4f32 -->

```csharp
public sealed class Inno.Editor.Assets.ImGui.AssetBrowserModule : Inno.Editor.Core.EditorModule, Inno.Editor.Inspection.IInspectionIconProvider<Inno.Assets.Pipeline.AssetFileEntry>
```

Owns asset navigation and icon presentation independently from source mutations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L17).

## `#ctor`

<a id="api-4fb9acb7de696ec6"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserModule.#ctor(Inno.Editor.Assets.AssetEditingModule,Inno.Editor.Interactions.EditorInteractions,Inno.Editor.Settings.EditorSettings,Inno.Extensibility.Types.TypeCatalog) 8a5ade5a916afc7a2bc04d5df93f179eda4731a1bf14829a4d77f839800fa7be -->

```csharp
public Inno.Editor.Assets.ImGui.AssetBrowserModule.AssetBrowserModule(Inno.Editor.Assets.AssetEditingModule edits, Inno.Editor.Interactions.EditorInteractions interactions, Inno.Editor.Settings.EditorSettings settings, Inno.Extensibility.Types.TypeCatalog types)
```

Creates the asset presentation module for the current editor generation.

**Parameter `edits`:** The independent authoritative asset editing service.

**Parameter `interactions`:** The editor selection and action owner.

**Parameter `settings`:** The editor settings that supply semantic icon choices.

**Parameter `types`:** The active extension type catalog.

**Throws `System.ArgumentNullException`:** A required owner is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L40).

## `Capture`

<a id="api-586111599d0bdd85"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserModule.Capture(Inno.Editor.Core.EditorState) 10e05f0d1aee510812cae9f23ed5191b48ebb58222e231097c98a425054920ca -->

```csharp
protected override void Inno.Editor.Assets.ImGui.AssetBrowserModule.Capture(Inno.Editor.Core.EditorState state)
```

Captures an immutable snapshot of the current observable state.

**Parameter `state`:** The lifecycle or domain state applied by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L71).

## `GetIcon`

<a id="api-678dfa6abdd00e4a"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserModule.GetIcon(Inno.Assets.Pipeline.AssetFileEntry) 385208982fd7f18d60085000527be95aee2b05dc8b00695f4544a7a7f8ffd597 -->

```csharp
public string Inno.Editor.Assets.ImGui.AssetBrowserModule.GetIcon(Inno.Assets.Pipeline.AssetFileEntry entry)
```

Resolves the presentation icon registered for an asset type or source extension.

**Parameter `entry`:** The source entry whose presentation icon should be resolved.

**Returns:** The most specific registered icon, or the built-in directory or file icon when no
registration matches the entry.

**Throws `System.ArgumentNullException`:** Thrown when `entry` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L127).

## `OnDispose`

<a id="api-e4e20ac82d314170"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserModule.OnDispose 7bc14a8a5138e3215090bc7be72fda9bd292125ed3544e37461c79b2d385c7f1 -->

```csharp
protected override void Inno.Editor.Assets.ImGui.AssetBrowserModule.OnDispose()
```

Releases resources owned by this module after it has stopped and left the active extension
generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L142).

## `Restore`

<a id="api-e93b33a871c7cb3f"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserModule.Restore(Inno.Editor.Core.EditorState) 98122ed393084078029b7f215bc03a121110258a3e1e6522b8a44ff08119be34 -->

```csharp
protected override void Inno.Editor.Assets.ImGui.AssetBrowserModule.Restore(Inno.Editor.Core.EditorState state)
```

Restores the supplied snapshot while preserving current invariants.

**Parameter `state`:** The lifecycle or domain state applied by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L84).

## `browser`

<a id="api-1cb6655414e50812"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserModule.browser 7d2f8d69bb244626343b6b4a265eaa48ed3dbbd62967ed497b81c7fdd2686db0 -->

```csharp
public Inno.Editor.Assets.ImGui.AssetBrowserState Inno.Editor.Assets.ImGui.AssetBrowserModule.browser { get; }
```

Gets navigation state; object selection belongs to the shared interaction owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L59).

## `edits`

<a id="api-781e8741b03d2a86"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserModule.edits d7d1d25fccf702e0950ddefa87dd4110834768cd134746a6fb5a1dca13c320a5 -->

```csharp
public Inno.Editor.Assets.AssetEditingModule Inno.Editor.Assets.ImGui.AssetBrowserModule.edits { get; }
```

Gets the source editing service; this module does not implement source transactions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L55).

## `folderIcon`

<a id="api-a15c85ed4e869818"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserModule.folderIcon 4baaf2ac4d1f74ee2f96c599f398ab5b0ec1e32517f3160844804d5025001c72 -->

```csharp
public string Inno.Editor.Assets.ImGui.AssetBrowserModule.folderIcon { get; }
```

Gets the configured folder glyph used by asset navigation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserModule.cs#L63).
