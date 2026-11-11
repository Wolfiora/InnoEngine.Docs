---
title: "EditorPlayModeState"
description: "Reference for EditorPlayModeState in Inno.Editor.PlayMode."
uid: api.inno.editor.playmode.d7ec9ccecc5de6a4
kind: api
owners:
  - Inno.Editor.PlayMode
apiSurface: source-clr
contracts:
  - project.inno-editor-playmode
---
# `EditorPlayModeState`

This reference describes `EditorPlayModeState` in `Inno.Editor.PlayMode`. Read the [shared contract](../../../projects/inno-editor-playmode.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Compiling`](#api-ec60e99b27f8857b) | Field |
| [`Editing`](#api-27814f6c91ebf262) | Field |
| [`Failed`](#api-47d739aae8f15f69) | Field |
| [`Playing`](#api-26641219af9a603e) | Field |
| [`Preparing`](#api-10ff0c598d1007e6) | Field |
| [`Stopping`](#api-584c569ce060140e) | Field |

## Type declaration

<a id="api-d7ec9ccecc5de6a4"></a>
<!-- api: T:Inno.Editor.PlayMode.EditorPlayModeState adf2567f0f1733e24d323b15c09274e97a0815dec3f594b284839941d971522b -->

```csharp
public enum Inno.Editor.PlayMode.EditorPlayModeState : int
```

Identifies the current relationship between editor documents and game simulation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L6).

## `Compiling`

<a id="api-ec60e99b27f8857b"></a>
<!-- api: F:Inno.Editor.PlayMode.EditorPlayModeState.Compiling c4aa585ecd537c002b352af1d37c90c9c489236e7dd6b229ddde8c948b924b58 -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState.Compiling = 1
```

Play Mode is waiting for the requested script generation to become active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L16).

## `Editing`

<a id="api-27814f6c91ebf262"></a>
<!-- api: F:Inno.Editor.PlayMode.EditorPlayModeState.Editing 183dbd387a8a3fa478b81ef9625d4b0dc9a97709985ae35bfd2594c79a675c49 -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState.Editing = 0
```

Editable scene documents are loaded and game simulation is stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L11).

## `Failed`

<a id="api-47d739aae8f15f69"></a>
<!-- api: F:Inno.Editor.PlayMode.EditorPlayModeState.Failed 6a66229c7a85c554f5142c7d1c3a285978b91193ecf9d92d3dac2fc3528e426c -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState.Failed = 5
```

The most recent transition failed and its diagnostic remains available for inspection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L36).

## `Playing`

<a id="api-26641219af9a603e"></a>
<!-- api: F:Inno.Editor.PlayMode.EditorPlayModeState.Playing 3576a152773ffa7ceee0d35e0f671a41d1981737be04e24c1121d07c92cf983d -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState.Playing = 3
```

Isolated runtime scenes are receiving the game update lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L26).

## `Preparing`

<a id="api-10ff0c598d1007e6"></a>
<!-- api: F:Inno.Editor.PlayMode.EditorPlayModeState.Preparing 490ecff5458a6f6adbd51ed25ab278003b936e16fd6fa0d8ebca9ce2e51af7be -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState.Preparing = 2
```

The active script generation is ready and isolated runtime state is being prepared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L21).

## `Stopping`

<a id="api-584c569ce060140e"></a>
<!-- api: F:Inno.Editor.PlayMode.EditorPlayModeState.Stopping 25918310c03f6f70437f8aa2c9cfaad7baaeaf19adcf31f9e42cfec7efb3d494 -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState.Stopping = 4
```

The isolated runtime session is stopping and releasing its owned state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/EditorPlayModeState.cs#L31).
