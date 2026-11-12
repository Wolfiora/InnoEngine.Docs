---
title: "EditorToolbarIcon"
description: "Reference for EditorToolbarIcon in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.57806a9399a61cac
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorToolbarIcon`

This reference describes `EditorToolbarIcon` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Edit`](#api-f0a78526b7559803) | Field |
| [`None`](#api-98723d5919eaae59) | Field |
| [`Pause`](#api-57f46ccd0bb4771d) | Field |
| [`Play`](#api-ec7abc786465ff36) | Field |
| [`Step`](#api-2c1528735b28185d) | Field |
| [`Stop`](#api-2085bceaf4d25f06) | Field |

## Type declaration

<a id="api-57806a9399a61cac"></a>
<!-- api: T:InnoEditor.Interactions.EditorToolbarIcon b3fff380a79a7eec3192ab94470d924bb02cc8ba34ff317c7cbd421aad47cbe3 -->

```csharp
public enum InnoEditor.Interactions.EditorToolbarIcon : int
```

Identifies a presentation-independent symbol for an editor toolbar command.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L6).

## `Edit`

<a id="api-f0a78526b7559803"></a>
<!-- api: F:InnoEditor.Interactions.EditorToolbarIcon.Edit a24dce5b74647c0ceb8e2b8a01c132abe9f7b8ae163fb50304d307dd7b326b95 -->

```csharp
InnoEditor.Interactions.EditorToolbarIcon.Edit = 5
```

Returns to an editing state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L36).

## `None`

<a id="api-98723d5919eaae59"></a>
<!-- api: F:InnoEditor.Interactions.EditorToolbarIcon.None 49f8c1c5ca4a8906b93e6f25e35186594a2c0d79e4fbd44fc8f80173bca99461 -->

```csharp
InnoEditor.Interactions.EditorToolbarIcon.None = 0
```

No symbol is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L11).

## `Pause`

<a id="api-57f46ccd0bb4771d"></a>
<!-- api: F:InnoEditor.Interactions.EditorToolbarIcon.Pause 06e858960d0620bf487c362bb07ecbe0024a026f83244956935e7053df65515c -->

```csharp
InnoEditor.Interactions.EditorToolbarIcon.Pause = 3
```

Pauses an operation or simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L26).

## `Play`

<a id="api-ec7abc786465ff36"></a>
<!-- api: F:InnoEditor.Interactions.EditorToolbarIcon.Play d6740911cdb870e74d2d2d25c229a2e7516654525767d80443544fe89aa0c96a -->

```csharp
InnoEditor.Interactions.EditorToolbarIcon.Play = 1
```

Starts an operation or simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L16).

## `Step`

<a id="api-2c1528735b28185d"></a>
<!-- api: F:InnoEditor.Interactions.EditorToolbarIcon.Step 3b9c07105ff648e2c26831ccd7fe504f78ecf33559706557c8786fa5cafac191 -->

```csharp
InnoEditor.Interactions.EditorToolbarIcon.Step = 4
```

Advances a paused operation by one step.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L31).

## `Stop`

<a id="api-2085bceaf4d25f06"></a>
<!-- api: F:InnoEditor.Interactions.EditorToolbarIcon.Stop f25690d4993262535950f93f6a7934e5372f23a2f6b49c9acb1e98271a5a43ab -->

```csharp
InnoEditor.Interactions.EditorToolbarIcon.Stop = 2
```

Stops an operation or simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Toolbars/EditorToolbarIcon.cs#L21).
