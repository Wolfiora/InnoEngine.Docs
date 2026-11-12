---
title: "AssetBrowserState"
description: "Reference for AssetBrowserState in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.editor-script.7669c16e499a01c0
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-assets-imgui
  - manual.scripting.use-script-api
---
# `AssetBrowserState`

This reference describes `AssetBrowserState` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-bfbbee44a550a0f6) | Method |
| [`GetDirectory`](#api-65f1938fb5517cf2) | Method |
| [`GetSelectedPath`](#api-b511eb2fe89b358e) | Method |
| [`IsSelected`](#api-10ac705f6be8d05b) | Method |
| [`Select`](#api-779a7013e30044cc) | Method |
| [`SetCurrentDirectory`](#api-399ed8a8a021a1c2) | Method |
| [`SetLocation`](#api-df8c222c42536564) | Method |
| [`SetRoot`](#api-dda598196d4cdbd9) | Method |
| [`ToggleSelection`](#api-c23317e470498efe) | Method |
| [`currentDirectory`](#api-c015fa160a0d869d) | Property |
| [`projectDirectory`](#api-c8c0882cb140bd5b) | Property |
| [`root`](#api-5f1809b2aafc8f4b) | Property |

## Type declaration

<a id="api-7669c16e499a01c0"></a>
<!-- api: T:InnoEditor.Assets.AssetBrowserState e502782c52911de6cebecc34bc7cd546678df7c4f62355217a5df4a1adc62cff -->

```csharp
public sealed class InnoEditor.Assets.AssetBrowserState
```

Stores asset browser navigation independently from global object selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L29).

## `#ctor`

<a id="api-bfbbee44a550a0f6"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.#ctor 3fd5c18a6f19d6fc431b552821dba78f0928a52ab2ae792910ed63b5490f29d7 -->

```csharp
public InnoEditor.Assets.AssetBrowserState.AssetBrowserState()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L29).

## `GetDirectory`

<a id="api-65f1938fb5517cf2"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.GetDirectory(InnoEditor.Assets.AssetBrowserRoot) 293d0ad800569a0d69200a57fbfa557589479a143989e6df9ff43b7c7aa07aa6 -->

```csharp
public string InnoEditor.Assets.AssetBrowserState.GetDirectory(InnoEditor.Assets.AssetBrowserRoot targetRoot)
```

Gets the last visited isolated directory for a navigation root.

**Parameter `targetRoot`:** The root whose independent navigation position is requested.

**Returns:** The source-relative directory, or an empty string for the root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L184).

## `GetSelectedPath`

<a id="api-b511eb2fe89b358e"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.GetSelectedPath(InnoEditor.Core.EditorContext) 5fae59b9af4931bbff315bce3419f1be74c8d521e50c0dc1eec3cacb4bc2bd87 -->

```csharp
public string? InnoEditor.Assets.AssetBrowserState.GetSelectedPath(InnoEditor.Core.EditorContext context)
```

Gets the selected asset path when the editor-wide target belongs to the Asset Browser.

**Parameter `context`:** The shared editor context containing the global selection.

**Returns:** The normalized source-relative path, or `null` when another target type is selected.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L80).

## `IsSelected`

<a id="api-10ac705f6be8d05b"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.IsSelected(InnoEditor.Core.EditorContext,InnoEditor.Assets.AssetFileEntry) eaee774bdad378538dd9d09fe75fdfd3b606c5ff9d2656b211a258fd7d58a671 -->

```csharp
public bool InnoEditor.Assets.AssetBrowserState.IsSelected(InnoEditor.Core.EditorContext context, InnoEditor.Assets.AssetFileEntry entry)
```

Checks whether the source entry belongs to the current asset selection.

**Parameter `context`:** The current editor callback context.

**Parameter `entry`:** The indexed source identity to inspect.

**Returns:** True when the entry is selected; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L98).

## `Select`

<a id="api-779a7013e30044cc"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.Select(InnoEditor.Core.EditorContext,System.String) 75747981b7737c6df6b5efc303282d3218e09fa53b5a838da56bc8ae555379b5 -->

```csharp
public void InnoEditor.Assets.AssetBrowserState.Select(InnoEditor.Core.EditorContext context, string? relativePath)
```

Selects an asset path through the editor-wide selection state, or clears Asset selection.

**Parameter `context`:** The shared editor context whose selection should be updated.

**Parameter `relativePath`:** The source-relative path to select, or an empty value to clear selection.

**Throws `System.ArgumentNullException`:** Thrown when `context` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L158).

## `SetCurrentDirectory`

<a id="api-399ed8a8a021a1c2"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.SetCurrentDirectory(System.String) 32e54871bd43e9605ba4d7238a526c413afe40fd69f675b2c66c33dd3a3df398 -->

```csharp
public void InnoEditor.Assets.AssetBrowserState.SetCurrentDirectory(string relativePath)
```

Sets the current Asset Browser directory and infers its root from the isolated source identity.

**Parameter `relativePath`:** The isolated source-relative directory path, or an empty value for the currently displayed root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L131).

## `SetLocation`

<a id="api-df8c222c42536564"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.SetLocation(InnoEditor.Assets.AssetBrowserRoot,System.String) 6222b209051309f4c3baa493e8263bae4f14fe05919f5bc8f74dda580a02fabe -->

```csharp
public void InnoEditor.Assets.AssetBrowserState.SetLocation(InnoEditor.Assets.AssetBrowserRoot targetRoot, string directory)
```

Changes the displayed source root and its isolated navigation directory.

**Parameter `targetRoot`:** The navigation root that owns the requested directory.

**Parameter `directory`:** The isolated source-relative directory; empty selects the root.

**Throws `System.ArgumentException`:** The directory belongs to a different source root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L207).

## `SetRoot`

<a id="api-dda598196d4cdbd9"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.SetRoot(InnoEditor.Assets.AssetBrowserRoot) b31ee219d6c225288e735c3afe2a4dc34dee4d7e8975b4b924df7727e3794e9b -->

```csharp
public void InnoEditor.Assets.AssetBrowserState.SetRoot(InnoEditor.Assets.AssetBrowserRoot value)
```

Switches the displayed root while preserving the last directory visited in each root.

**Parameter `value`:** The authoring or installed-content root to display.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L124).

## `ToggleSelection`

<a id="api-c23317e470498efe"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserState.ToggleSelection(InnoEditor.Core.EditorContext,InnoEditor.Assets.AssetFileEntry) 5b414a0cdf8a379da2e1b93440bd4edad7404aee54126b9cde842dd576bd1dcf -->

```csharp
public void InnoEditor.Assets.AssetBrowserState.ToggleSelection(InnoEditor.Core.EditorContext context, InnoEditor.Assets.AssetFileEntry entry)
```

Adds or removes an asset from the current selection without retaining runtime asset objects.

**Parameter `context`:** The current editor callback context.

**Parameter `entry`:** The indexed source identity to toggle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L111).

## `currentDirectory`

<a id="api-c015fa160a0d869d"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserState.currentDirectory 5a7e3290afce346e2393b4a166f074399b62e7b1deeec8ebb4ad9234c9e2ae4e -->

```csharp
public string InnoEditor.Assets.AssetBrowserState.currentDirectory { get; }
```

Gets the current directory inside `InnoEditor.Assets.AssetBrowserState.root`. An empty value identifies that root's overview.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L62).

## `projectDirectory`

<a id="api-c8c0882cb140bd5b"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserState.projectDirectory 770ada9c385ea468addf57a0da999353c762bd9ab107eb396c7f7bfa5697026a -->

```csharp
public string InnoEditor.Assets.AssetBrowserState.projectDirectory { get; }
```

Gets the most recently visited writable project directory, independently of the displayed root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L66).

## `root`

<a id="api-5f1809b2aafc8f4b"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserState.root 322b6c8efce71d2e0c3fa8a96a3f04d2f8d0dd57db20d51a37738f101081c33d -->

```csharp
public InnoEditor.Assets.AssetBrowserRoot InnoEditor.Assets.AssetBrowserState.root { get; }
```

Gets the root currently displayed by the Asset Browser.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Navigation/AssetBrowserState.cs#L58).
