---
title: "EditorPlayModeController"
description: "Reference for EditorPlayModeController in Inno.Editor.PlayMode."
uid: api.inno.editor.playmode.ca14c24fbc73933a
kind: api
owners:
  - Inno.Editor.PlayMode
apiSurface: source-clr
contracts:
  - project.inno-editor-playmode
---
# `EditorPlayModeController`

This reference describes `EditorPlayModeController` in `Inno.Editor.PlayMode`. Read the [shared contract](../../../projects/inno-editor-playmode.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Editor.PlayMode.IEditorPlayMode`, `Inno.Editor.Core.IEditorReloadGuard`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8a83f18cc10d7856) | Method |
| [`AdvanceTransition`](#api-e40848c2064247ac) | Method |
| [`Dispose`](#api-36e4b08af4c8a6f9) | Method |
| [`EnterPlayMode`](#api-f592c1a1b44dabcc) | Method |
| [`ExitPlayMode`](#api-63e0df825ec0858f) | Method |
| [`ListenStateChanges`](#api-66a17435b70dca56) | Method |
| [`Tick`](#api-360228a4d92246f1) | Method |
| [`activeSessionId`](#api-f1f36c3f847ac78e) | Property |
| [`isPlaying`](#api-df13bc1e0dfb7eca) | Property |
| [`lastFailure`](#api-5879632dfc21294e) | Property |
| [`state`](#api-647bb00bc3d77434) | Property |

## Type declaration

<a id="api-ca14c24fbc73933a"></a>
<!-- api: T:Inno.Editor.PlayMode.EditorPlayModeController a85413018fb9723a7daa8ba7d89391635eeed4e93c08e98ad7bf35c19e98bd38 -->

```csharp
public sealed class Inno.Editor.PlayMode.EditorPlayModeController : Inno.Editor.PlayMode.IEditorPlayMode, Inno.Editor.Core.IEditorReloadGuard, System.IDisposable
```

Implements the deterministic state machine for one editor Play Mode workflow.

**Constraints:** The editor host advances transitions at frame-safe points. Editable scenes remain owned by the
scene workspace while the controller owns only the isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L29).

## `#ctor`

<a id="api-8a83f18cc10d7856"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.#ctor(Inno.Runtime.EngineHost,Inno.Runtime.RuntimeSessionOptions,Inno.Editor.Scene.IEditorScenePlayMode,Inno.Editor.Scripting.IEditorScriptCompilation,Inno.Editor.Interactions.IEditorHistoryIsolation,Inno.Core.Logging.LogRouter,Inno.Editor.Audio.IEditorAudioHost) 0bc283c26075c11cc02c02bb09919fe6b4662a90cd424e73021493d8aab7965f -->

```csharp
public Inno.Editor.PlayMode.EditorPlayModeController.EditorPlayModeController(Inno.Runtime.EngineHost engineHost, Inno.Runtime.RuntimeSessionOptions runtimeOptions, Inno.Editor.Scene.IEditorScenePlayMode scenes, Inno.Editor.Scripting.IEditorScriptCompilation scripting, Inno.Editor.Interactions.IEditorHistoryIsolation history, Inno.Core.Logging.LogRouter logs, Inno.Editor.Audio.IEditorAudioHost? audio = null)
```

Creates a Play Mode controller around the runtime host, scene snapshot, scripting, and history boundaries.

**Parameter `engineHost`:** The application host that owns every isolated Play Mode runtime session.

**Parameter `runtimeOptions`:** The validated Play Mode storage and timing policy used for every accepted request.

**Parameter `scenes`:** The scene workspace that creates isolated runtime scene sessions.

**Parameter `scripting`:** The script compilation service that publishes generation readiness.

**Parameter `history`:** The editor history boundary isolated during simulation.

**Parameter `logs`:** The application log router that receives Play Mode lifecycle failures.

**Parameter `audio`:** Optional Editor audio host that creates an isolated backend generation for Play Mode.

**Throws `System.ArgumentNullException`:** Thrown when any dependency is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L87).

## `AdvanceTransition`

<a id="api-e40848c2064247ac"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.AdvanceTransition e591120e3a76ee1230e3d7eabaa7b9251f47d5d1da89148f337ccf2df00263d2 -->

```csharp
public void Inno.Editor.PlayMode.EditorPlayModeController.AdvanceTransition()
```

Advances at most one Play Mode transition at an editor-controlled frame-safe point.

**Throws `System.ObjectDisposedException`:** Thrown after the controller has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L223).

## `Dispose`

<a id="api-36e4b08af4c8a6f9"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.Dispose fe2fe6005aff6d024110a32dc6989819b35bf95281add58c72b80cd50f250550 -->

```csharp
public void Inno.Editor.PlayMode.EditorPlayModeController.Dispose()
```

Releases the isolated runtime session and history scope owned by this controller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L259).

## `EnterPlayMode`

<a id="api-f592c1a1b44dabcc"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.EnterPlayMode b1a87c10339a0163c40ac5c6827a150cf6f275c2f1be3a1a0881049fd17a86fc -->

```csharp
public bool Inno.Editor.PlayMode.EditorPlayModeController.EnterPlayMode()
```

Requests a fresh script generation before preparing an isolated runtime session.

**Returns:** `true` when the controller accepted a new request; otherwise, `false`.

**Throws `System.ObjectDisposedException`:** Thrown after the controller has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L172).

## `ExitPlayMode`

<a id="api-63e0df825ec0858f"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.ExitPlayMode 12d399ce43e1b556f20d6016ca746c3ddb60514dcb0d20bdd204e193b6c3aca1 -->

```csharp
public bool Inno.Editor.PlayMode.EditorPlayModeController.ExitPlayMode()
```

Requests cancellation, runtime-session disposal, or dismissal of a failed transition.

**Returns:** `true` when the current state accepted the request; otherwise, `false`.

**Throws `System.ObjectDisposedException`:** Thrown after the controller has been disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L196).

## `ListenStateChanges`

<a id="api-66a17435b70dca56"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.ListenStateChanges(System.Action{Inno.Editor.PlayMode.EditorPlayModeState}) 32e388b9c50f64e7b06145bc554ad818eeb3ebd43bb511e7f63fa6d1508e9212 -->

```csharp
public System.IDisposable Inno.Editor.PlayMode.EditorPlayModeController.ListenStateChanges(System.Action<Inno.Editor.PlayMode.EditorPlayModeState> listener)
```

Subscribes to committed state transitions through the Core event lifetime.

**Parameter `listener`:** The observer invoked synchronously after a transition.

**Returns:** An independently disposable subscription; dispose it before retiring the observer.

**Throws `System.ArgumentNullException`:** The listener is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L146).

## `Tick`

<a id="api-360228a4d92246f1"></a>
<!-- api: M:Inno.Editor.PlayMode.EditorPlayModeController.Tick(System.Single) e54b988cffa9ace3909caefba3e6bcebd5c603d0991ca4e0a4bd8f1f47bfb783 -->

```csharp
public void Inno.Editor.PlayMode.EditorPlayModeController.Tick(float deltaTime)
```

Advances the isolated runtime session by one complete frame.

**Parameter `deltaTime`:** The elapsed editor frame time in seconds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L247).

## `activeSessionId`

<a id="api-f1f36c3f847ac78e"></a>
<!-- api: P:Inno.Editor.PlayMode.EditorPlayModeController.activeSessionId 8eed81cf2b3916d47dffeeff137c50bf3ef3d5418be24143a38144e366c949c0 -->

```csharp
public Inno.Core.Logging.LogSessionId Inno.Editor.PlayMode.EditorPlayModeController.activeSessionId { get; }
```

Gets the isolated runtime log session associated with the current request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L143).

## `isPlaying`

<a id="api-df13bc1e0dfb7eca"></a>
<!-- api: P:Inno.Editor.PlayMode.EditorPlayModeController.isPlaying 1cc41bfc46803069ea9d1192cac0cd919022b1027898ca076015dc0dd2404435 -->

```csharp
public bool Inno.Editor.PlayMode.EditorPlayModeController.isPlaying { get; }
```

Gets whether isolated runtime scenes are actively simulating.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L121).

## `lastFailure`

<a id="api-5879632dfc21294e"></a>
<!-- api: P:Inno.Editor.PlayMode.EditorPlayModeController.lastFailure 9be2869aae1113699bce9e3a3db6f4dd307888a12d0ebb97f7f85abf40f528df -->

```csharp
public string? Inno.Editor.PlayMode.EditorPlayModeController.lastFailure { get; }
```

Gets the most recent transition or simulation failure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L138).

## `state`

<a id="api-647bb00bc3d77434"></a>
<!-- api: P:Inno.Editor.PlayMode.EditorPlayModeController.state bd5e26ee3a1716374314aeada6782818849ef345bd248ac426e519b076e2cfaa -->

```csharp
public Inno.Editor.PlayMode.EditorPlayModeState Inno.Editor.PlayMode.EditorPlayModeController.state { get; }
```

Gets the current Play Mode transition state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.PlayMode/Runtime/EditorPlayModeController.cs#L116).
