---
title: "EditorMenuAttribute"
description: "Reference for EditorMenuAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.b6567fd27bbfedd4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuAttribute`

This reference describes `EditorMenuAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-18e6cca7040a5766) | Method |
| [`area`](#api-c008b61d0f3aa851) | Property |
| [`order`](#api-6eb83f1753c18d7b) | Property |
| [`path`](#api-55bad2e16de75db7) | Property |
| [`separatorBefore`](#api-6eb0bc32d8e1e634) | Property |

## Type declaration

<a id="api-b6567fd27bbfedd4"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuAttribute 0cf400d4bef07668990b7671b90d566d6895b607468866e6dee0797d2d56e0da -->

```csharp
public sealed class Inno.Editor.Interactions.EditorMenuAttribute : System.Attribute
```

Places an editor action at an arbitrary path on a menu surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L9).

## `#ctor`

<a id="api-18e6cca7040a5766"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean) 9f5cbd703d312a294fa383ee39b269974735188e4f30b75ae399f859cfc23cb1 -->

```csharp
public Inno.Editor.Interactions.EditorMenuAttribute.EditorMenuAttribute(string area, string path, int order = 0, bool separatorBefore = false)
```

Creates a static placement for the annotated action on an exact menu surface.

**Parameter `area`:** The exact interaction area whose menu receives the action.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Throws `System.ArgumentException`:** Thrown when `area` or `path` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L29).

## `area`

<a id="api-c008b61d0f3aa851"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuAttribute.area 8322f7a83da0549b7f466a266031284a847055bbc7876101337d0e2bee970d03 -->

```csharp
public string Inno.Editor.Interactions.EditorMenuAttribute.area { get; }
```

Gets the menu area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L48).

## `order`

<a id="api-6eb83f1753c18d7b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuAttribute.order 01c89460815937b1108ef6011e6f3ffb198adb3f1b00ea1e65295d5fd19b0bc9 -->

```csharp
public int Inno.Editor.Interactions.EditorMenuAttribute.order { get; }
```

Gets the stable menu ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L58).

## `path`

<a id="api-55bad2e16de75db7"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuAttribute.path d2560b9754c2bc2a596578150951ece6ff5dddee79ed9b2624869612e26c31dd -->

```csharp
public string Inno.Editor.Interactions.EditorMenuAttribute.path { get; }
```

Gets the slash-delimited menu path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L53).

## `separatorBefore`

<a id="api-6eb0bc32d8e1e634"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuAttribute.separatorBefore c6703f01e3bb85e2ca6d347a8f643b58083ee293e91c05a443d7884d6644dd08 -->

```csharp
public bool Inno.Editor.Interactions.EditorMenuAttribute.separatorBefore { get; }
```

Gets whether a separator is rendered before the item.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuAttribute.cs#L63).
