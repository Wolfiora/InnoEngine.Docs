---
title: "EditorToolbarItemAttribute"
description: "Reference for EditorToolbarItemAttribute in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.491c0f2841b96ed8
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorToolbarItemAttribute`

This reference describes `EditorToolbarItemAttribute` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63842e56ef0d2e3b) | Method |
| [`activeIcon`](#api-26751b25fb926824) | Property |
| [`area`](#api-c8d5386a7e8c7a02) | Property |
| [`icon`](#api-0d8e4bedeff881f4) | Property |
| [`order`](#api-127fe81958c8dc3a) | Property |
| [`tooltip`](#api-e76da667bd99d3c4) | Property |

## Type declaration

<a id="api-491c0f2841b96ed8"></a>
<!-- api: T:InnoEditor.Interactions.EditorToolbarItemAttribute 0f50e769766e72644c01ed467c21fd95f6e70600bd54eb607fc7101527ae6ff8 -->

```csharp
public sealed class InnoEditor.Interactions.EditorToolbarItemAttribute : System.Attribute
```

Places an editor action on a compact toolbar surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L9).

## `#ctor`

<a id="api-63842e56ef0d2e3b"></a>
<!-- api: M:InnoEditor.Interactions.EditorToolbarItemAttribute.#ctor(System.String,InnoEditor.Interactions.EditorToolbarIcon,System.String,System.Int32,InnoEditor.Interactions.EditorToolbarIcon) 24368e9a1c7617d7e45416db47dc79c74997271e27b59102cd8128fd5424a612 -->

```csharp
public InnoEditor.Interactions.EditorToolbarItemAttribute.EditorToolbarItemAttribute(string area, InnoEditor.Interactions.EditorToolbarIcon icon, string tooltip, int order = 0, InnoEditor.Interactions.EditorToolbarIcon activeIcon = InnoEditor.Interactions.EditorToolbarIcon.None)
```

Creates a toolbar placement for the annotated targetless action.

**Parameter `area`:** The exact interaction area whose toolbar receives the action.

**Parameter `icon`:** The symbol shown while the action is not checked.

**Parameter `tooltip`:** The fallback tooltip shown when the action has no contextual display name.

**Parameter `order`:** The stable ordering value within the toolbar.

**Parameter `activeIcon`:** The symbol shown while the action is checked, or `InnoEditor.Interactions.EditorToolbarIcon.None` to retain
`icon`.

**Throws `System.ArgumentException`:** Thrown when `area` or `tooltip` is empty, or when
`icon` is `InnoEditor.Interactions.EditorToolbarIcon.None`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when an icon value is not defined.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L37).

## `activeIcon`

<a id="api-26751b25fb926824"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItemAttribute.activeIcon 7fcec67f5a2a81da112d47370b4955bcdbf513056895834b271e9574af72e643 -->

```csharp
public InnoEditor.Interactions.EditorToolbarIcon InnoEditor.Interactions.EditorToolbarItemAttribute.activeIcon { get; }
```

Gets the optional replacement symbol shown while the action is checked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L75).

## `area`

<a id="api-c8d5386a7e8c7a02"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItemAttribute.area 7bc698c68ddfc247b2681edeb3e205390568740923843be8cfacbf1375eb0cba -->

```csharp
public string InnoEditor.Interactions.EditorToolbarItemAttribute.area { get; }
```

Gets the exact toolbar interaction area.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L65).

## `icon`

<a id="api-0d8e4bedeff881f4"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItemAttribute.icon 7696abca5fb2cce2a02592ce744ec8383a02e345955dbffa47bd2802e4a4bdbb -->

```csharp
public InnoEditor.Interactions.EditorToolbarIcon InnoEditor.Interactions.EditorToolbarItemAttribute.icon { get; }
```

Gets the symbol shown while the action is not checked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L70).

## `order`

<a id="api-127fe81958c8dc3a"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItemAttribute.order 33faa856e659b442e26ae3311d3fa6f5e762089a6e999f71fb8bd25586ff17d8 -->

```csharp
public int InnoEditor.Interactions.EditorToolbarItemAttribute.order { get; }
```

Gets the stable ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L85).

## `tooltip`

<a id="api-e76da667bd99d3c4"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItemAttribute.tooltip ea88d5eb335c7f461a40fde3868bbed2ef9b86633aa437f81e3d5dc7292fdc84 -->

```csharp
public string InnoEditor.Interactions.EditorToolbarItemAttribute.tooltip { get; }
```

Gets the fallback tooltip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItemAttribute.cs#L80).
