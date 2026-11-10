---
title: "EditorMenuSourceAttribute"
description: "Reference for EditorMenuSourceAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.4f3a0a47bea190a6
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorMenuSourceAttribute`

This reference describes `EditorMenuSourceAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3162529796a6f554) | Method |
| [`area`](#api-6c2e5e3165d4eda9) | Property |
| [`priority`](#api-051085f98699a047) | Property |

## Type declaration

<a id="api-4f3a0a47bea190a6"></a>
<!-- api: T:Inno.Editor.Interactions.EditorMenuSourceAttribute 78af5d687bb27794424ae5f362f30b49fd326a957c8d0eb4e2b33723cfcf2cc8 -->

```csharp
public sealed class Inno.Editor.Interactions.EditorMenuSourceAttribute : System.Attribute
```

Registers a dynamic editor menu source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L9).

## `#ctor`

<a id="api-3162529796a6f554"></a>
<!-- api: M:Inno.Editor.Interactions.EditorMenuSourceAttribute.#ctor(System.String,System.Int32) 2cb81869e67462fb01cf70a4af48ca9ae7de120e1ea09e604e391cb239880633 -->

```csharp
public Inno.Editor.Interactions.EditorMenuSourceAttribute.EditorMenuSourceAttribute(string area, int priority = 0)
```

Creates a dynamic menu-source registration for an exact interaction surface.

**Parameter `area`:** The exact menu area that receives placements from the source.

**Parameter `priority`:** The ordering priority used when multiple dynamic sources contribute to the surface.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L23).

## `area`

<a id="api-6c2e5e3165d4eda9"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuSourceAttribute.area b57eddf60badde4e6afa91255ad8b0376dfb3ba60a9c9d17df4e9bdaa139a69e -->

```csharp
public string Inno.Editor.Interactions.EditorMenuSourceAttribute.area { get; }
```

Gets the contributed menu area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L36).

## `priority`

<a id="api-051085f98699a047"></a>
<!-- api: P:Inno.Editor.Interactions.EditorMenuSourceAttribute.priority 4e808adafc07434da7ddb70f420411fd53214414e70e7df4f466d876e0e57fcf -->

```csharp
public int Inno.Editor.Interactions.EditorMenuSourceAttribute.priority { get; }
```

Gets the provider ordering priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L41).
