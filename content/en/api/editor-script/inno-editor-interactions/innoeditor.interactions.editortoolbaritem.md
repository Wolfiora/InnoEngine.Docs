---
title: "EditorToolbarItem"
description: "Reference for EditorToolbarItem in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.dbced3e8444aa77e
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorToolbarItem`

This reference describes `EditorToolbarItem` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5256cc69c7c96535) | Method |
| [`actionId`](#api-3d37ee454bd54146) | Property |
| [`icon`](#api-dee6c8c5a0af7633) | Property |
| [`order`](#api-0dcf3053b17fb8b8) | Property |
| [`status`](#api-588d4e62e74f7483) | Property |
| [`tooltip`](#api-28a6d9cc74fae5b0) | Property |

## Type declaration

<a id="api-dbced3e8444aa77e"></a>
<!-- api: T:InnoEditor.Interactions.EditorToolbarItem 5fb4f7372c77f4c0478aca9e10319cf74e9e3e2f837dc7b9c7243ac7183f49d9 -->

```csharp
public sealed class InnoEditor.Interactions.EditorToolbarItem
```

Describes one resolved toolbar command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L6).

## `#ctor`

<a id="api-5256cc69c7c96535"></a>
<!-- api: M:InnoEditor.Interactions.EditorToolbarItem.#ctor e13523e1b60b9ede9c1c1143f9f4c3b48e4fb17b63dbb7a607368f941930253f -->

```csharp
public InnoEditor.Interactions.EditorToolbarItem.EditorToolbarItem()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L6).

## `actionId`

<a id="api-3d37ee454bd54146"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItem.actionId 1e78f23e4cd2241e4b55df32200ba2ce163d5000cffe82efa12048ee3ce6a2bd -->

```csharp
public string InnoEditor.Interactions.EditorToolbarItem.actionId { get; }
```

Gets the stable action dispatched when this item is pressed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L25).

## `icon`

<a id="api-dee6c8c5a0af7633"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItem.icon da906fb3ea577230b6467894d497dc79b35d58231d2677b678d6f1cc858f49ec -->

```csharp
public InnoEditor.Interactions.EditorToolbarIcon InnoEditor.Interactions.EditorToolbarItem.icon { get; }
```

Gets the resolved presentation-independent symbol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L30).

## `order`

<a id="api-0dcf3053b17fb8b8"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItem.order cff8757675b6c8f4d8f87bd9d1e3d3be6cca58ec2c7e3783d1006b1a709bd0f0 -->

```csharp
public int InnoEditor.Interactions.EditorToolbarItem.order { get; }
```

Gets the stable ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L40).

## `status`

<a id="api-588d4e62e74f7483"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItem.status 8ed30da465859c5542a7a2996f1219cb3b11c23c1139b2c779d601e31848efbd -->

```csharp
public InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorToolbarItem.status { get; }
```

Gets the current action availability and checked state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L45).

## `tooltip`

<a id="api-28a6d9cc74fae5b0"></a>
<!-- api: P:InnoEditor.Interactions.EditorToolbarItem.tooltip 8b96a01ddf9f2338c04551eb7dfa6bc46c629d67f809545fdc01766e7f0545fb -->

```csharp
public string InnoEditor.Interactions.EditorToolbarItem.tooltip { get; }
```

Gets the resolved contextual tooltip.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarItem.cs#L35).
