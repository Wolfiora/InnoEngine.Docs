---
title: "EditorPlayModeState"
description: "Reference for EditorPlayModeState in Inno.Editor.PlayMode."
uid: api.inno.editor.playmode.editor-script.d2401531cdeab600
kind: api
owners:
  - Inno.Editor.PlayMode
apiSurface: editor-script
contracts:
  - project.inno-editor-playmode
  - manual.scripting.use-script-api
---
# `EditorPlayModeState`

This reference describes `EditorPlayModeState` in `Inno.Editor.PlayMode`. Read the [shared contract](../../projects/inno-editor-playmode.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compiling`](#api-a3bfd5799a56ff37) | Field |
| [`Editing`](#api-285ce37995cf133a) | Field |
| [`Failed`](#api-8156de76ca8d2b61) | Field |
| [`Playing`](#api-6024dbee0bf6df03) | Field |
| [`Preparing`](#api-3d66a63be1238c58) | Field |
| [`Stopping`](#api-7fcfd726e880e64f) | Field |

## Type declaration

<a id="api-d2401531cdeab600"></a>
<!-- api: T:InnoEditor.PlayMode.EditorPlayModeState d17954462a176821190fe37c7cff30d433fd52765b7961755b87f251fd3f62ba -->

```csharp
public enum InnoEditor.PlayMode.EditorPlayModeState : int
```

Identifies the current relationship between editor documents and game simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L6).

## `Compiling`

<a id="api-a3bfd5799a56ff37"></a>
<!-- api: F:InnoEditor.PlayMode.EditorPlayModeState.Compiling 7408b7264b0d2bb1af36a2e6e135d76b98699b63b2ec511bf0e483aa2b866a52 -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState.Compiling = 1
```

Play Mode is waiting for the requested script generation to become active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L16).

## `Editing`

<a id="api-285ce37995cf133a"></a>
<!-- api: F:InnoEditor.PlayMode.EditorPlayModeState.Editing 5c05256a310fd3faf9a9abbd0079657c7e803d077298b378ccfe0a61a6a9592a -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState.Editing = 0
```

Editable scene documents are loaded and game simulation is stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L11).

## `Failed`

<a id="api-8156de76ca8d2b61"></a>
<!-- api: F:InnoEditor.PlayMode.EditorPlayModeState.Failed 22eaf2891482cdb34006247e2486861286a36f00ba59eec197639be4f3f28e72 -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState.Failed = 5
```

The most recent transition failed and its diagnostic remains available for inspection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L36).

## `Playing`

<a id="api-6024dbee0bf6df03"></a>
<!-- api: F:InnoEditor.PlayMode.EditorPlayModeState.Playing adc691c58afa4789f32ac589708f2c4c751b4368fc75d34d3385606a24cd493e -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState.Playing = 3
```

Isolated runtime scenes are receiving the game update lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L26).

## `Preparing`

<a id="api-3d66a63be1238c58"></a>
<!-- api: F:InnoEditor.PlayMode.EditorPlayModeState.Preparing 2678ba101648cf73d725cd34a01cac4d3f6ea8d9bb8cfebdeac8433e8926d0b2 -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState.Preparing = 2
```

The active script generation is ready and isolated runtime state is being prepared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L21).

## `Stopping`

<a id="api-7fcfd726e880e64f"></a>
<!-- api: F:InnoEditor.PlayMode.EditorPlayModeState.Stopping 8cc4f17d52e1c647cf153e7aca49e6bf16bdce800c05075830f166de677e2dfa -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState.Stopping = 4
```

The isolated runtime session is stopping and releasing its owned state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L31).
