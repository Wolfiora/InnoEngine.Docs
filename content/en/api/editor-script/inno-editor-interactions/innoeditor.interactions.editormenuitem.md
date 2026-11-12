---
title: "EditorMenuItem"
description: "Reference for EditorMenuItem in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.a84ac3f5a008375c
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorMenuItem`

This reference describes `EditorMenuItem` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0a2ac47143f61de1) | Method |
| [`actionId`](#api-01e282734844df70) | Property |
| [`argument`](#api-55ff5e6fa86ed273) | Property |
| [`children`](#api-846536813adcf474) | Property |
| [`label`](#api-735ee8d6254ed0e4) | Property |
| [`order`](#api-e0861063ffb06585) | Property |
| [`separatorBefore`](#api-a7290c0250e18d6b) | Property |
| [`status`](#api-dd0c1c40cec916ce) | Property |

## Type declaration

<a id="api-a84ac3f5a008375c"></a>
<!-- api: T:InnoEditor.Interactions.EditorMenuItem 4208e8913a8056fed710618c2dfd2915838dfab8e3c545962a57d828692e1cff -->

```csharp
public sealed class InnoEditor.Interactions.EditorMenuItem
```

Represents one immutable contextual menu node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L11).

## `#ctor`

<a id="api-0a2ac47143f61de1"></a>
<!-- api: M:InnoEditor.Interactions.EditorMenuItem.#ctor 6cf6f5f733d5bf7c6f49f1a2cf5966cf1077b9d28181fc9f120e21a9e88ae63e -->

```csharp
public InnoEditor.Interactions.EditorMenuItem.EditorMenuItem()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L11).

## `actionId`

<a id="api-01e282734844df70"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.actionId 276b0b137f12d2ef8f4dad516ca214bf18d75448e85e1410712133baa1aae7e6 -->

```csharp
public string InnoEditor.Interactions.EditorMenuItem.actionId { get; }
```

Gets the stable action identifier consumed by a presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L64).

## `argument`

<a id="api-55ff5e6fa86ed273"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.argument c3a23989d31c49ba4f60b0c5d2af84a59630e546efe29e42f04d1705e0f61fec -->

```csharp
public object? InnoEditor.Interactions.EditorMenuItem.argument { get; }
```

Gets the generation-local action argument consumed by a presentation backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L90).

## `children`

<a id="api-846536813adcf474"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.children 7d5717fa2263425181d143c46ddc5e76ce127aa7c48b863eec1fba36a5490ade -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Interactions.EditorMenuItem> InnoEditor.Interactions.EditorMenuItem.children { get; }
```

Gets child menu nodes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L84).

## `label`

<a id="api-735ee8d6254ed0e4"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.label 73e8720d20aa1c26360bdd1bcd244be48b1fef8afb5c650419cdacc928093a18 -->

```csharp
public string InnoEditor.Interactions.EditorMenuItem.label { get; }
```

Gets the visible node label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L58).

## `order`

<a id="api-e0861063ffb06585"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.order a0b4c00d0fffc39241e844703020875ed8fdb44a5cb1c31c7a1b1e8ea67fbf7e -->

```csharp
public int InnoEditor.Interactions.EditorMenuItem.order { get; }
```

Gets the stable ordering value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L69).

## `separatorBefore`

<a id="api-a7290c0250e18d6b"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.separatorBefore ded634f7b5616f942f1c47b7f9bdd83bf8cadbbbdd8c2a46a8876cbcc45ef55d -->

```csharp
public bool InnoEditor.Interactions.EditorMenuItem.separatorBefore { get; }
```

Gets whether a separator precedes this node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L74).

## `status`

<a id="api-dd0c1c40cec916ce"></a>
<!-- api: P:InnoEditor.Interactions.EditorMenuItem.status 1342735c5cbdfc042cce4ad8eb6de7a37745b3cd4ee19901cba60d077aae0598 -->

```csharp
public InnoEditor.Interactions.EditorActionState InnoEditor.Interactions.EditorMenuItem.status { get; }
```

Gets the current command presentation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Menus/EditorMenuItem.cs#L79).
