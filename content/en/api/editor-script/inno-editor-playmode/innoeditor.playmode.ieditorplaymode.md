---
title: "IEditorPlayMode"
description: "Reference for IEditorPlayMode in Inno.Editor.PlayMode."
uid: api.inno.editor.playmode.editor-script.c70ff3be8c21891b
kind: api
owners:
  - Inno.Editor.PlayMode
apiSurface: editor-script
contracts:
  - project.inno-editor-playmode
  - manual.scripting.use-script-api
---
# `IEditorPlayMode`

This reference describes `IEditorPlayMode` in `Inno.Editor.PlayMode`. Read the [shared contract](../../projects/inno-editor-playmode.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`EnterPlayMode`](#api-03c74a2039971b63) | Method |
| [`ExitPlayMode`](#api-0ec435bcff956b39) | Method |
| [`ListenStateChanges`](#api-62fcb85063688a06) | Method |
| [`activeSessionId`](#api-ca6d38a25f3ffddb) | Property |
| [`isPlaying`](#api-b78d3384de8516fc) | Property |
| [`lastFailure`](#api-91d14e2fd7a0970c) | Property |
| [`state`](#api-f4cac25e8c1865f8) | Property |

## Type declaration

<a id="api-c70ff3be8c21891b"></a>
<!-- api: T:InnoEditor.PlayMode.IEditorPlayMode 8ffb8ae55917a020e3a28e5c0c78c016e404b2cee3eb2ccbcdb6f66d15324696 -->

```csharp
public interface InnoEditor.PlayMode.IEditorPlayMode
```

Controls the editor's isolated game-simulation session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L10).

## `EnterPlayMode`

<a id="api-03c74a2039971b63"></a>
<!-- api: M:InnoEditor.PlayMode.IEditorPlayMode.EnterPlayMode c67c20562c942f26fe75e6957dfd02dc55656fc2ef112570f64ad519b7143900 -->

```csharp
bool InnoEditor.PlayMode.IEditorPlayMode.EnterPlayMode()
```

Requests entry after the active script generation becomes ready.

**Returns:** `true` when a new entry request was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L52).

## `ExitPlayMode`

<a id="api-0ec435bcff956b39"></a>
<!-- api: M:InnoEditor.PlayMode.IEditorPlayMode.ExitPlayMode e4ab85ea8a3923a7ec4b4e1b9a35c109c01f047abafc78afbf7b3215e0c44d62 -->

```csharp
bool InnoEditor.PlayMode.IEditorPlayMode.ExitPlayMode()
```

Requests disposal of the active runtime session or dismisses a failed transition.

**Returns:** `true` when entry was cancelled or a new exit request was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L60).

## `ListenStateChanges`

<a id="api-62fcb85063688a06"></a>
<!-- api: M:InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{InnoEditor.PlayMode.EditorPlayModeState}) 1c1dc31e5fd0bfdde24dfcc61ecc42546fa5d1230458768c68dc0c041274e292 -->

```csharp
System.IDisposable InnoEditor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action<InnoEditor.PlayMode.EditorPlayModeState> listener)
```

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Throws `System.ArgumentNullException`:** The listener is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L44).

## `activeSessionId`

<a id="api-ca6d38a25f3ffddb"></a>
<!-- api: P:InnoEditor.PlayMode.IEditorPlayMode.activeSessionId 11e661134f1d321bba6064d78708eef3683b298b38ce74f21cdb85fd70fcb0a8 -->

```csharp
InnoEngine.Logging.LogSessionId InnoEditor.PlayMode.IEditorPlayMode.activeSessionId { get; }
```

Gets the active isolated runtime log session, or `InnoEngine.Logging.LogSessionId.none` outside a Play Mode request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L30).

## `isPlaying`

<a id="api-b78d3384de8516fc"></a>
<!-- api: P:InnoEditor.PlayMode.IEditorPlayMode.isPlaying 6d06b27b623332a155f9f279144488940a8f543718c3687d67dbc805d6b0b936 -->

```csharp
bool InnoEditor.PlayMode.IEditorPlayMode.isPlaying { get; }
```

Gets whether isolated runtime scenes are actively simulating.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L20).

## `lastFailure`

<a id="api-91d14e2fd7a0970c"></a>
<!-- api: P:InnoEditor.PlayMode.IEditorPlayMode.lastFailure e3162b4b1268e8066df95d466c7240028edba3e2d5670b96e1900e49d4687c8f -->

```csharp
string? InnoEditor.PlayMode.IEditorPlayMode.lastFailure { get; }
```

Gets the most recent transition or simulation failure, or `null` when no failure is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L25).

## `state`

<a id="api-f4cac25e8c1865f8"></a>
<!-- api: P:InnoEditor.PlayMode.IEditorPlayMode.state f6439354de7a28d06d9d0480b0759f08e513df72e7be2b445134511c6351acf2 -->

```csharp
InnoEditor.PlayMode.EditorPlayModeState InnoEditor.PlayMode.IEditorPlayMode.state { get; }
```

Gets the current Play Mode transition state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L15).
