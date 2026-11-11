---
title: "IEditorAudioHost"
description: "Reference for IEditorAudioHost in Inno.Editor.Audio."
uid: api.inno.editor.audio.c772d406f562b0a4
kind: api
owners:
  - Inno.Editor.Audio
apiSurface: source-clr
contracts:
  - project.inno-editor-audio
---
# `IEditorAudioHost`

This reference describes `IEditorAudioHost` in `Inno.Editor.Audio`. Read the [shared contract](../../../projects/inno-editor-audio.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`CreateRuntimeSubsystemFactory`](#api-9b7795befc631748) | Method |
| [`EnterExecutionScope`](#api-72faa45a1016dd21) | Method |
| [`PlayPreview`](#api-4127f1783c8ce9bf) | Method |
| [`StopPreview`](#api-917917e5ba22e1c6) | Method |

## Type declaration

<a id="api-c772d406f562b0a4"></a>
<!-- api: T:Inno.Editor.Audio.IEditorAudioHost 6a31fddf3fa43696ff2b4ca6a6b42075502ab074548d43cda28ae2a4dedd6ca2 -->

```csharp
public interface Inno.Editor.Audio.IEditorAudioHost : System.IDisposable
```

Coordinates isolated audio runtime generations for Edit and Play Mode sessions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/IEditorAudioHost.cs#L11).

## `CreateRuntimeSubsystemFactory`

<a id="api-9b7795befc631748"></a>
<!-- api: M:Inno.Editor.Audio.IEditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession) 29639e8bdaa22dba8a2d6fd1307e3684e8d51e699954daf4761481f7a79ff8ee -->

```csharp
Inno.Runtime.Contracts.IRuntimeSubsystemFactory Inno.Editor.Audio.IEditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession session)
```

Creates the reusable factory that contributes isolated audio runtimes to Editor sessions.

**Returns:** A factory whose features are owned and released by their runtime sessions.

**Parameter `session`:** The explicit session being composed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/IEditorAudioHost.cs#L22).

## `EnterExecutionScope`

<a id="api-72faa45a1016dd21"></a>
<!-- api: M:Inno.Editor.Audio.IEditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession) 959f0fc2f4052d10ac59673bac0791a09ed56f115e9bb7c3fa9ebea37c5b1879 -->

```csharp
System.IDisposable Inno.Editor.Audio.IEditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession session)
```

Binds the script-facing `Inno.Editor.Audio` façade to one session's audio runtime.

**Parameter `session`:** Session whose feature pipeline owns an active Editor audio generation.

**Returns:** A strict last-in-first-out execution scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/IEditorAudioHost.cs#L33).

## `PlayPreview`

<a id="api-4127f1783c8ce9bf"></a>
<!-- api: M:Inno.Editor.Audio.IEditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions}) 8ce29262b4eb538d5b76c73f9bd50ee0a7cc0f512b12d2223229c5551ceda1fc -->

```csharp
Inno.Audio.AudioVoiceHandle Inno.Editor.Audio.IEditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession session, Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioPlayOptions? options = null)
```

Starts an Editor-owned preview voice through an active Edit session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

**Returns:** The preview voice handle, initially in the preparing state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/IEditorAudioHost.cs#L50).

## `StopPreview`

<a id="api-917917e5ba22e1c6"></a>
<!-- api: M:Inno.Editor.Audio.IEditorAudioHost.StopPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioVoiceHandle) 55ad496800f8e7e4ad5ab5d8f7919a015e89cda611c9c46e5ac42c3b5caadef8 -->

```csharp
bool Inno.Editor.Audio.IEditorAudioHost.StopPreview(Inno.Runtime.RuntimeSession session, Inno.Audio.AudioVoiceHandle voice)
```

Stops one preview voice owned by an active Edit session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `voice`:** Preview voice to stop.

**Returns:** `true` when a live preview was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/IEditorAudioHost.cs#L68).
