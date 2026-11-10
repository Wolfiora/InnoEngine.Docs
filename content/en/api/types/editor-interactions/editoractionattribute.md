---
title: "EditorActionAttribute"
description: "Reference for EditorActionAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.acb0ccc7c65019c1
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorActionAttribute`

This reference describes `EditorActionAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c2cac4da993af781) | Method |
| [`#ctor`](#api-804a95cd2796204b) | Method |
| [`action`](#api-8f3ae2b1853c2c4c) | Property |
| [`area`](#api-ae614fbc51e3ccfb) | Property |
| [`priority`](#api-7b773451ca86d97f) | Property |

## Type declaration

<a id="api-acb0ccc7c65019c1"></a>
<!-- api: T:Inno.Editor.Interactions.EditorActionAttribute 6c73c4168e7f9a2987ba9d3e570788a69074d1229b9aad312992fb533cde4d2a -->

```csharp
public sealed class Inno.Editor.Interactions.EditorActionAttribute : System.Attribute
```

Registers an editor action for automatic discovery and dispatch.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L9).

## `#ctor`

<a id="api-c2cac4da993af781"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.Int32) 287626bbc419fdfb023f74a2a93f376e3af326983de0106846f2a28b00eb7458 -->

```csharp
public Inno.Editor.Interactions.EditorActionAttribute.EditorActionAttribute(string action, int priority = 0)
```

Creates an action registration available from every area.

**Parameter `action`:** The stable semantic action name.

**Parameter `priority`:** The tie-breaking priority used after target specificity.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L23).

## `#ctor`

<a id="api-804a95cd2796204b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32) 4f520599f44aacfdd3c022f4df504598da3ad8a6e6f0961ace06d932693027fd -->

```csharp
public Inno.Editor.Interactions.EditorActionAttribute.EditorActionAttribute(string action, string area, int priority = 0)
```

Creates an action registration restricted to one exact area.

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

**Throws `System.ArgumentException`:** Thrown when `action` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L46).

## `action`

<a id="api-8f3ae2b1853c2c4c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionAttribute.action e5810c817cfcd458c936e27bfd0531b7195b26836d1b8d4c5559d8e43c2dedf6 -->

```csharp
public string Inno.Editor.Interactions.EditorActionAttribute.action { get; }
```

Gets the stable action name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L61).

## `area`

<a id="api-ae614fbc51e3ccfb"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionAttribute.area 0680748470ef23bbc8fe1db3782e2fc261abd43ad48c87ed4440334de53231bc -->

```csharp
public string Inno.Editor.Interactions.EditorActionAttribute.area { get; }
```

Gets the optional exact interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L66).

## `priority`

<a id="api-7b773451ca86d97f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorActionAttribute.priority b68b77ce5026660ec31dea7f0c5be90b90110e84e3ae87e493845b47d2b650fb -->

```csharp
public int Inno.Editor.Interactions.EditorActionAttribute.priority { get; }
```

Gets the tie-breaking priority.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Actions/EditorActionAttribute.cs#L71).
