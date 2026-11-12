---
title: "EditorMenuSourceAttribute"
description: "Reference for EditorMenuSourceAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.637393731ec8c186
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuSourceAttribute`

This reference describes `EditorMenuSourceAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9de8a8d3a2474d08) | Method |
| [`area`](#api-508b0352a1078295) | Property |
| [`priority`](#api-a262e21a358232e6) | Property |

## Type declaration

<a id="api-637393731ec8c186"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuSourceAttribute e81cfbb4dc62c4d07d8f893f7caf1afae98a13419518e1a7af8349e20ce5f0c1 -->

```csharp
public sealed class InnoEditor.Interactions.EditorMenuSourceAttribute : System.Attribute
```

Registers a dynamic editor menu source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L9).

## `#ctor`

<a id="api-9de8a8d3a2474d08"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuSourceAttribute.#ctor(System.String,System.Int32) e779529b9c6a70d70bf6cfac4a07bf4cf9ed9ba48797785b2f914d2b445aacad -->

```csharp
public InnoEditor.Interactions.EditorMenuSourceAttribute.EditorMenuSourceAttribute(string area, int priority = 0)
```

Creates a dynamic menu-source registration for an exact interaction surface.

**Parameter `area`:** The exact menu area that receives placements from the source.

**Parameter `priority`:** The ordering priority used when multiple dynamic sources contribute to the surface.

**Throws `System.ArgumentException`:** Thrown when `area` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L23).

## `area`

<a id="api-508b0352a1078295"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuSourceAttribute.area ba16d2c408d1515b99f41478e4b8110553158806729d026ba85ea0d5a35fe78a -->

```csharp
public string InnoEditor.Interactions.EditorMenuSourceAttribute.area { get; }
```

Gets the contributed menu area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L36).

## `priority`

<a id="api-a262e21a358232e6"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuSourceAttribute.priority 3721a801ddae9136e5c0ee37374207565664adccbb8a3083728c3302d6cca36b -->

```csharp
public int InnoEditor.Interactions.EditorMenuSourceAttribute.priority { get; }
```

Gets the provider ordering priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuSourceAttribute.cs#L41).
