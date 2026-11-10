---
title: "EditorToolbarItemAttribute"
description: "Reference for EditorToolbarItemAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.a2a796924140f755
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorToolbarItemAttribute`

This reference describes `EditorToolbarItemAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4710cf3b878a7bfb) | Method |
| [`activeIcon`](#api-32979925eeeaf2ee) | Property |
| [`area`](#api-4f5d03fb6e2ae92c) | Property |
| [`icon`](#api-0250029003c4e307) | Property |
| [`order`](#api-f9f02fea9fdadc0b) | Property |
| [`tooltip`](#api-bece7c5c84d2b4a6) | Property |

## Type declaration

<a id="api-a2a796924140f755"></a>
<!-- api: T:Inno.Editor.Interactions.EditorToolbarItemAttribute 62f85165277490566c6d4ec78515a8ac7b71109474e614f289edf47ac1971f8c -->

```csharp
public sealed class Inno.Editor.Interactions.EditorToolbarItemAttribute : System.Attribute
```

Places an editor action on a compact toolbar surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L9).

## `#ctor`

<a id="api-4710cf3b878a7bfb"></a>
<!-- api: M:Inno.Editor.Interactions.EditorToolbarItemAttribute.#ctor(System.String,Inno.Editor.Interactions.EditorToolbarIcon,System.String,System.Int32,Inno.Editor.Interactions.EditorToolbarIcon) 3f9c5d79dc37f4347d8541e1bf02abf768d13bb2723b88c8c385118cdbb5bb63 -->

```csharp
public Inno.Editor.Interactions.EditorToolbarItemAttribute.EditorToolbarItemAttribute(string area, Inno.Editor.Interactions.EditorToolbarIcon icon, string tooltip, int order = 0, Inno.Editor.Interactions.EditorToolbarIcon activeIcon = Inno.Editor.Interactions.EditorToolbarIcon.None)
```

Creates a toolbar placement for the annotated targetless action.

**Parameter `area`:** The exact interaction area whose toolbar receives the action.

**Parameter `icon`:** The symbol shown while the action is not checked.

**Parameter `tooltip`:** The fallback tooltip shown when the action has no contextual display name.

**Parameter `order`:** The stable ordering value within the toolbar.

**Parameter `activeIcon`:** The symbol shown while the action is checked, or `Inno.Editor.Interactions.EditorToolbarIcon.None` to retain
`icon`.

**Throws `System.ArgumentException`:** Thrown when `area` or `tooltip` is empty, or when
`icon` is `Inno.Editor.Interactions.EditorToolbarIcon.None`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when an icon value is not defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L37).

## `activeIcon`

<a id="api-32979925eeeaf2ee"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItemAttribute.activeIcon 22c5a7a57e259f13526c9a996e948c1d979209441d9291c333de2ee349239148 -->

```csharp
public Inno.Editor.Interactions.EditorToolbarIcon Inno.Editor.Interactions.EditorToolbarItemAttribute.activeIcon { get; }
```

Gets the optional replacement symbol shown while the action is checked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L75).

## `area`

<a id="api-4f5d03fb6e2ae92c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItemAttribute.area 56fcd3410353dbc66afe9c9c02b056823f60082cc4c7ad90d476e3ec6c39b386 -->

```csharp
public string Inno.Editor.Interactions.EditorToolbarItemAttribute.area { get; }
```

Gets the exact toolbar interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L65).

## `icon`

<a id="api-0250029003c4e307"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItemAttribute.icon 44c50e4a388b03e7754943c33e764e9e0283e05b636efed505e277d0b76f96d2 -->

```csharp
public Inno.Editor.Interactions.EditorToolbarIcon Inno.Editor.Interactions.EditorToolbarItemAttribute.icon { get; }
```

Gets the symbol shown while the action is not checked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L70).

## `order`

<a id="api-f9f02fea9fdadc0b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItemAttribute.order 859fa9d6714e6092ef82aa12d8a4f7eef6ec46aa78b96e60e1c8c66b7d8a02ec -->

```csharp
public int Inno.Editor.Interactions.EditorToolbarItemAttribute.order { get; }
```

Gets the stable ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L85).

## `tooltip`

<a id="api-bece7c5c84d2b4a6"></a>
<!-- api: P:Inno.Editor.Interactions.EditorToolbarItemAttribute.tooltip 6aa86b0d3a6ca47516890763fd536825c9c52e97bd98ce47270c88521ebb2d3b -->

```csharp
public string Inno.Editor.Interactions.EditorToolbarItemAttribute.tooltip { get; }
```

Gets the fallback tooltip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L80).
