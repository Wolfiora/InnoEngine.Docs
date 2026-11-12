---
title: "EditorDropVisual"
description: "Reference for EditorDropVisual in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.4c5683e79d394808
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDropVisual`

This reference describes `EditorDropVisual` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Disabled`](#api-399d060d8584449a) | Field |
| [`Highlight`](#api-359d97b2b13fa84f) | Field |
| [`InsertAfter`](#api-58ab0b6637c7cc91) | Field |
| [`InsertBefore`](#api-f972b7a6667ea7b1) | Field |
| [`None`](#api-a4c550c851bb524c) | Field |

## Type declaration

<a id="api-4c5683e79d394808"></a>
<!-- api: T:InnoEditor.Interactions.EditorDropVisual 4cd0c53e1589e3f84d9346ea30fdfde0e4332b25fb2a2042fa5526130077b1a5 -->

```csharp
public enum InnoEditor.Interactions.EditorDropVisual : int
```

Defines the standard visual used for a compatible drop target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L6).

## `Disabled`

<a id="api-399d060d8584449a"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropVisual.Disabled 635ea419996bde0f1914ebe71033c4368c261e557b0237755649af2abefa3cca -->

```csharp
InnoEditor.Interactions.EditorDropVisual.Disabled = 4
```

Draw a disabled target visual.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L31).

## `Highlight`

<a id="api-359d97b2b13fa84f"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropVisual.Highlight 6739f23e99cf7a6de373d0678ac83bfa4fb5ccabfbb7ae35c4ed32299f06dcad -->

```csharp
InnoEditor.Interactions.EditorDropVisual.Highlight = 1
```

Draw a content highlight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L16).

## `InsertAfter`

<a id="api-58ab0b6637c7cc91"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropVisual.InsertAfter d139482e1c52349203d0fa0b6b38b6995b4df9e8f39ac7f32e40d36d6648e0b5 -->

```csharp
InnoEditor.Interactions.EditorDropVisual.InsertAfter = 3
```

Draw an insertion line after the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L26).

## `InsertBefore`

<a id="api-f972b7a6667ea7b1"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropVisual.InsertBefore 848bdb3904d1b626db1c645691ab6e9d40a3e26e9693de70b4f9ecbcd9127b63 -->

```csharp
InnoEditor.Interactions.EditorDropVisual.InsertBefore = 2
```

Draw an insertion line before the target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L21).

## `None`

<a id="api-a4c550c851bb524c"></a>
<!-- api: F:InnoEditor.Interactions.EditorDropVisual.None d31e32fe2ad0ea9665afcc100319531bbbafd7ccc0080036924a118ccb637cfa -->

```csharp
InnoEditor.Interactions.EditorDropVisual.None = 0
```

No visual is drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/DragDrop/EditorDropVisual.cs#L11).
