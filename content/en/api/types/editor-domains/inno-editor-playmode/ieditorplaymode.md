---
title: "IEditorPlayMode"
description: "Reference for IEditorPlayMode in Inno.Editor.PlayMode."
uid: api.inno.editor.playmode.9ce09b2dc7b41bf3
kind: api
owners:
  - Inno.Editor.PlayMode
apiSurface: source-clr
contracts:
  - project.inno-editor-playmode
---
# `IEditorPlayMode`

This reference describes `IEditorPlayMode` in `Inno.Editor.PlayMode`. Read the [shared contract](../../../projects/inno-editor-playmode.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`EnterPlayMode`](#api-791b2fe37f3c7e6b) | Method |
| [`ExitPlayMode`](#api-9d02689b36c5c6f6) | Method |
| [`ListenStateChanges`](#api-8b2653acec2de0f8) | Method |
| [`activeSessionId`](#api-6486e544d3786d14) | Property |
| [`isPlaying`](#api-4fd7458bc3658a2d) | Property |
| [`lastFailure`](#api-ece56d9c83f11001) | Property |
| [`state`](#api-ed080788229232d2) | Property |

## Type declaration

<a id="api-9ce09b2dc7b41bf3"></a>
<!-- api: T:Inno.Editor.PlayMode.IEditorPlayMode 5beb83a248feec7b28f19ae14e278879dbc93d2f4f2447fd63a5b918a6610426 -->

```csharp
public interface Inno.Editor.PlayMode.IEditorPlayMode
```

Controls the editor's isolated game-simulation session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L10).

## `EnterPlayMode`

<a id="api-791b2fe37f3c7e6b"></a>
<!-- api: M:Inno.Editor.PlayMode.IEditorPlayMode.EnterPlayMode 0e15c2bcb18884139c64df74cec02f3f63572fd8ff18904072d24f6705036533 -->

```csharp
bool Inno.Editor.PlayMode.IEditorPlayMode.EnterPlayMode()
```

Requests entry after the active script generation becomes ready.

**Returns:** `true` when a new entry request was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L52).

## `ExitPlayMode`

<a id="api-9d02689b36c5c6f6"></a>
<!-- api: M:Inno.Editor.PlayMode.IEditorPlayMode.ExitPlayMode 762a151d253f06162984580a5b44f4c4fc93cd2e95d0848ac61b6651eb686922 -->

```csharp
bool Inno.Editor.PlayMode.IEditorPlayMode.ExitPlayMode()
```

Requests disposal of the active runtime session or dismisses a failed transition.

**Returns:** `true` when entry was cancelled or a new exit request was accepted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L60).

## `ListenStateChanges`

<a id="api-8b2653acec2de0f8"></a>
<!-- api: M:Inno.Editor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState}) 1cddeb61a737accbe4679d0c5164b1e9449e35a0376c8a699d9fb595601407c8 -->

```csharp
System.IDisposable Inno.Editor.PlayMode.IEditorPlayMode.ListenStateChanges(System.Action<Inno.Editor.PlayMode.EditorPlayModeState> listener)
```

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Throws `System.ArgumentNullException`:** The listener is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L44).

## `activeSessionId`

<a id="api-6486e544d3786d14"></a>
<!-- api: P:Inno.Editor.PlayMode.IEditorPlayMode.activeSessionId a8a3b1c668ff811a0b9351cb0b58171d32ffbc60221a61da54bc782f807fd7e6 -->

```csharp
Inno.Core.Logging.LogSessionId Inno.Editor.PlayMode.IEditorPlayMode.activeSessionId { get; }
```

Gets the active isolated runtime log session, or `Inno.Core.Logging.LogSessionId.none` outside a Play Mode request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L30).

## `isPlaying`

<a id="api-4fd7458bc3658a2d"></a>
<!-- api: P:Inno.Editor.PlayMode.IEditorPlayMode.isPlaying d466fb26c7285b436f26043b8874fbeee209b5f0e28bfec611c23f875b515929 -->

```csharp
bool Inno.Editor.PlayMode.IEditorPlayMode.isPlaying { get; }
```

Gets whether isolated runtime scenes are actively simulating.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L20).

## `lastFailure`

<a id="api-ece56d9c83f11001"></a>
<!-- api: P:Inno.Editor.PlayMode.IEditorPlayMode.lastFailure 79215248e6a2157833f32c617798db37604190748fab6ecd029e2d5566f106c9 -->

```csharp
string? Inno.Editor.PlayMode.IEditorPlayMode.lastFailure { get; }
```

Gets the most recent transition or simulation failure, or `null` when no failure is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L25).

## `state`

<a id="api-ed080788229232d2"></a>
<!-- api: P:Inno.Editor.PlayMode.IEditorPlayMode.state 4504a739d9b5d26b51056ef5056fbf3b31a26e5b5a1d35511e90edba3a0967a4 -->

```csharp
Inno.Editor.PlayMode.EditorPlayModeState Inno.Editor.PlayMode.IEditorPlayMode.state { get; }
```

Gets the current Play Mode transition state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/IEditorPlayMode.cs#L15).
