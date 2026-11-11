---
title: "EditorMenuRenderer"
description: "Reference for EditorMenuRenderer in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.660c511aa7aef221
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `EditorMenuRenderer`

This reference describes `EditorMenuRenderer` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ContextMenu`](#api-35130e5fabe6f84a) | Method |
| [`ContextMenu`](#api-b4f12011ea93647d) | Method |
| [`DrawItems`](#api-ac77384d5cfb0c7c) | Method |
| [`DrawSearchItems`](#api-2a9822c92fb95aca) | Method |
| [`MainMenu`](#api-61e658b801d2c3cc) | Method |
| [`WindowContextMenu`](#api-c70d54622b9aad8e) | Method |

## Type declaration

<a id="api-660c511aa7aef221"></a>
<!-- api: T:Inno.Editor.ImGui.EditorMenuRenderer 5d7bd0918b2a7506adb218b0809859a48da4cf5c5b5a90f21524f997614c26dc -->

```csharp
public sealed class Inno.Editor.ImGui.EditorMenuRenderer
```

Renders immutable editor menu models through ImGui.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L15).

## `ContextMenu`

<a id="api-35130e5fabe6f84a"></a>
<!-- api: M:Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction,Inno.Editor.Interactions.EditorInteraction) 5561d0f06535982705b1fc7da2b5c60a8a96dda275a574e205165d97ffd21f96 -->

```csharp
public bool Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(string id, Inno.Editor.Interactions.EditorInteraction scopeInteraction, Inno.Editor.Interactions.EditorInteraction itemInteraction)
```

Draws one context popup composed from an item interaction and its containing-scope interaction.

**Parameter `id`:** Stable popup identifier in the current ImGui ID scope.

**Parameter `scopeInteraction`:** Container interaction whose commands are shown first, such as creation commands for a directory.

**Parameter `itemInteraction`:** Selected-item interaction whose commands are shown after the container commands.

**Returns:** `true` while the context popup is open and at least one command group was drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L88).

## `ContextMenu`

<a id="api-b4f12011ea93647d"></a>
<!-- api: M:Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction) 42bd1db3c6a93f3dc162510d0d0dc18a20acf16483d80744e7b07abca6f178b6 -->

```csharp
public bool Inno.Editor.ImGui.EditorMenuRenderer.ContextMenu(string id, Inno.Editor.Interactions.EditorInteraction interaction)
```

Draws a resolved right-click menu for the most recently submitted ImGui item.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Parameter `interaction`:** The interaction area and optional operation target.

**Returns:** `true` while the context popup is open and its items were drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L43).

## `DrawItems`

<a id="api-ac77384d5cfb0c7c"></a>
<!-- api: M:Inno.Editor.ImGui.EditorMenuRenderer.DrawItems(Inno.Editor.Interactions.EditorInteraction,System.Collections.Generic.IReadOnlyList{Inno.Editor.Interactions.EditorMenuItem}) 981f8e698257d9b0c4f4d8fb1fbf2bfa65e896d4a4236b398b9a4b3eb21341b4 -->

```csharp
public void Inno.Editor.ImGui.EditorMenuRenderer.DrawItems(Inno.Editor.Interactions.EditorInteraction interaction, System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorMenuItem> items)
```

Recursively draws resolved menu nodes into the currently open popup or menu.

**Parameter `interaction`:** The interaction used to resolve shortcuts and enqueue selected actions.

**Parameter `items`:** The immutable menu nodes to draw in display order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L309).

## `DrawSearchItems`

<a id="api-2a9822c92fb95aca"></a>
<!-- api: M:Inno.Editor.ImGui.EditorMenuRenderer.DrawSearchItems(Inno.Editor.Interactions.EditorInteraction,System.Collections.Generic.IReadOnlyList{Inno.Editor.Interactions.EditorMenuItem},System.String) 11e3ba718836180d4c4301ff45a066f34cb62c9dabb36832eeb64ac9536bb1e4 -->

```csharp
public bool Inno.Editor.ImGui.EditorMenuRenderer.DrawSearchItems(Inno.Editor.Interactions.EditorInteraction interaction, System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorMenuItem> items, string search)
```

Draws matching leaf commands as a flat searchable list.

**Parameter `interaction`:** The interaction used to enqueue selected actions.

**Parameter `items`:** The immutable menu tree whose leaves should be searched.

**Parameter `search`:** The case-insensitive text matched against each slash-delimited leaf path.

**Returns:** `true` when a command was selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L364).

## `MainMenu`

<a id="api-61e658b801d2c3cc"></a>
<!-- api: M:Inno.Editor.ImGui.EditorMenuRenderer.MainMenu(Inno.Editor.Interactions.EditorInteraction) b10ed24b3d70cc2bd5f7eb31528321ac00232f0df30fa5d298f4b5d3a8529a2d -->

```csharp
public void Inno.Editor.ImGui.EditorMenuRenderer.MainMenu(Inno.Editor.Interactions.EditorInteraction interaction)
```

Draws the complete editor main menu bar for the supplied menu context.

**Parameter `interaction`:** The main-menu interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L215).

## `WindowContextMenu`

<a id="api-c70d54622b9aad8e"></a>
<!-- api: M:Inno.Editor.ImGui.EditorMenuRenderer.WindowContextMenu(System.String,Inno.Editor.Interactions.EditorInteraction) c4c7b4374002b54a78101d76e3f27ddfd86bc70e5bb0ac15b9ffc0120491af83 -->

```csharp
public bool Inno.Editor.ImGui.EditorMenuRenderer.WindowContextMenu(string id, Inno.Editor.Interactions.EditorInteraction interaction)
```

Draws a resolved right-click menu when the current ImGui window's unoccupied background is clicked.

**Parameter `id`:** The stable popup identifier in the current ImGui ID scope.

**Parameter `interaction`:** The interaction area and directory target for the background operation.

**Returns:** `true` while the background context popup is open and its items were drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Runtime/EditorMenuRenderer.cs#L132).
