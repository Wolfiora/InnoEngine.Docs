---
title: "AssetBrowserState"
description: "Reference for AssetBrowserState in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.2a60359cfae94b02
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-assets-imgui
---
# `AssetBrowserState`

This reference describes `AssetBrowserState` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetDirectory`](#api-ec79f3e8dc4a3102) | Method |
| [`GetSelectedPath`](#api-9b57c171f5664143) | Method |
| [`IsSelected`](#api-e45025c2c251d975) | Method |
| [`Select`](#api-955795c85ddae5e7) | Method |
| [`SetCurrentDirectory`](#api-1eb1b769761ce36f) | Method |
| [`SetLocation`](#api-2470b55f6a175f5f) | Method |
| [`SetRoot`](#api-bc1e85d0da2c7ec0) | Method |
| [`ToggleSelection`](#api-1b94e68bde7f4db1) | Method |
| [`currentDirectory`](#api-4952f44f382eb1de) | Property |
| [`projectDirectory`](#api-31c9cb0df90ddae1) | Property |
| [`root`](#api-8904e193dcd7d6ba) | Property |

## Type declaration

<a id="api-2a60359cfae94b02"></a>
<!-- api: T:Inno.Editor.Assets.ImGui.AssetBrowserState 440d7e3800e563470d9dd3cd6b1ff2aa69dc9840ad04f09ca73cb1a314b56057 -->

```csharp
public sealed class Inno.Editor.Assets.ImGui.AssetBrowserState
```

Stores asset browser navigation independently from global object selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L29).

## `GetDirectory`

<a id="api-ec79f3e8dc4a3102"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.GetDirectory(Inno.Editor.Assets.ImGui.AssetBrowserRoot) fe33ce780404a67377c77d7fa433d87ab291a812c865bc938c8813e16a4e1c77 -->

```csharp
public string Inno.Editor.Assets.ImGui.AssetBrowserState.GetDirectory(Inno.Editor.Assets.ImGui.AssetBrowserRoot targetRoot)
```

Gets the last visited isolated directory for a navigation root.

**Parameter `targetRoot`:** The root whose independent navigation position is requested.

**Returns:** The source-relative directory, or an empty string for the root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L184).

## `GetSelectedPath`

<a id="api-9b57c171f5664143"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.GetSelectedPath(Inno.Editor.Core.EditorContext) 47b1a602ed028bd9d5d9712137ad52cac59fe9f61473b8429a522f82cf7e76fa -->

```csharp
public string? Inno.Editor.Assets.ImGui.AssetBrowserState.GetSelectedPath(Inno.Editor.Core.EditorContext context)
```

Gets the selected asset path when the editor-wide target belongs to the Asset Browser.

**Parameter `context`:** The shared editor context containing the global selection.

**Returns:** The normalized source-relative path, or `null` when another target type is selected.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L80).

## `IsSelected`

<a id="api-e45025c2c251d975"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.IsSelected(Inno.Editor.Core.EditorContext,Inno.Assets.Pipeline.AssetFileEntry) 5b0e724b04fdbbbe8a3893508fca37a36c228a233924da66facdd139cdf180a9 -->

```csharp
public bool Inno.Editor.Assets.ImGui.AssetBrowserState.IsSelected(Inno.Editor.Core.EditorContext context, Inno.Assets.Pipeline.AssetFileEntry entry)
```

Checks whether the source entry belongs to the current asset selection.

**Parameter `context`:** The current editor callback context.

**Parameter `entry`:** The indexed source identity to inspect.

**Returns:** True when the entry is selected; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L98).

## `Select`

<a id="api-955795c85ddae5e7"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.Select(Inno.Editor.Core.EditorContext,System.String) 93116e16d53057741d1df770d65f727333e6e40ea4a613d9cf4ed3da5b339303 -->

```csharp
public void Inno.Editor.Assets.ImGui.AssetBrowserState.Select(Inno.Editor.Core.EditorContext context, string? relativePath)
```

Selects an asset path through the editor-wide selection state, or clears Asset selection.

**Parameter `context`:** The shared editor context whose selection should be updated.

**Parameter `relativePath`:** The source-relative path to select, or an empty value to clear selection.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L158).

## `SetCurrentDirectory`

<a id="api-1eb1b769761ce36f"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.SetCurrentDirectory(System.String) 5f2bd5c87f8b68c6a18dbaa0d194d2c7a6f712dccee89b68441387a1b4cecbd3 -->

```csharp
public void Inno.Editor.Assets.ImGui.AssetBrowserState.SetCurrentDirectory(string relativePath)
```

Sets the current Asset Browser directory and infers its root from the isolated source identity.

**Parameter `relativePath`:** The isolated source-relative directory path, or an empty value for the currently displayed root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L131).

## `SetLocation`

<a id="api-2470b55f6a175f5f"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.SetLocation(Inno.Editor.Assets.ImGui.AssetBrowserRoot,System.String) 2187f05b1dd429435c9767628cb17752c7ff94ec902f0217c55d11ca7759830a -->

```csharp
public void Inno.Editor.Assets.ImGui.AssetBrowserState.SetLocation(Inno.Editor.Assets.ImGui.AssetBrowserRoot targetRoot, string directory)
```

Changes the displayed source root and its isolated navigation directory.

**Parameter `targetRoot`:** The navigation root that owns the requested directory.

**Parameter `directory`:** The isolated source-relative directory; empty selects the root.

**Throws `System.ArgumentException`:** The directory belongs to a different source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L207).

## `SetRoot`

<a id="api-bc1e85d0da2c7ec0"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.SetRoot(Inno.Editor.Assets.ImGui.AssetBrowserRoot) 204205eb57b29cea137e1ab7c7f7aedb1f01a1b9e7831565462e92101f401806 -->

```csharp
public void Inno.Editor.Assets.ImGui.AssetBrowserState.SetRoot(Inno.Editor.Assets.ImGui.AssetBrowserRoot value)
```

Switches the displayed root while preserving the last directory visited in each root.

**Parameter `value`:** The authoring or installed-content root to display.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L124).

## `ToggleSelection`

<a id="api-1b94e68bde7f4db1"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserState.ToggleSelection(Inno.Editor.Core.EditorContext,Inno.Assets.Pipeline.AssetFileEntry) 27a752697ee2026df4b7c165b6a7824e1bc313e22c1cdd75d403f5ff84a3075f -->

```csharp
public void Inno.Editor.Assets.ImGui.AssetBrowserState.ToggleSelection(Inno.Editor.Core.EditorContext context, Inno.Assets.Pipeline.AssetFileEntry entry)
```

Adds or removes an asset from the current selection without retaining runtime asset objects.

**Parameter `context`:** The current editor callback context.

**Parameter `entry`:** The indexed source identity to toggle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L111).

## `currentDirectory`

<a id="api-4952f44f382eb1de"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserState.currentDirectory 88cfbea34673940877e06a0a120d809558de5cfcf9e55f46d8c6f682cecf0604 -->

```csharp
public string Inno.Editor.Assets.ImGui.AssetBrowserState.currentDirectory { get; }
```

Gets the current directory inside `Inno.Editor.Assets.ImGui.AssetBrowserState.root`. An empty value identifies that root's overview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L62).

## `projectDirectory`

<a id="api-31c9cb0df90ddae1"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserState.projectDirectory bc29a59bfc2003952d89ac1485a2820ab84def53828730d754e79a7077d26faf -->

```csharp
public string Inno.Editor.Assets.ImGui.AssetBrowserState.projectDirectory { get; }
```

Gets the most recently visited writable project directory, independently of the displayed root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L66).

## `root`

<a id="api-8904e193dcd7d6ba"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserState.root 67ca816fd5ad845328d704260d632e63f66ac4deb4b37a7efea0145c9b1edd72 -->

```csharp
public Inno.Editor.Assets.ImGui.AssetBrowserRoot Inno.Editor.Assets.ImGui.AssetBrowserState.root { get; private set; }
```

Gets the root currently displayed by the Asset Browser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L58).
