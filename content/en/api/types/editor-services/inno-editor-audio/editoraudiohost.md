---
title: "EditorAudioHost"
description: "Reference for EditorAudioHost in Inno.Editor.Audio."
uid: api.inno.editor.audio.d185679bf694c7a0
kind: api
owners:
  - Inno.Editor.Audio
apiSurface: source-clr
contracts:
  - project.inno-editor-audio
---
# `EditorAudioHost`

This reference describes `EditorAudioHost` in `Inno.Editor.Audio`. Read the [shared contract](../../../projects/inno-editor-audio.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Editor.Audio.IEditorAudioHost`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c6a4498c4317c19e) | Method |
| [`CreateRuntimeSubsystemFactory`](#api-cae213197754b210) | Method |
| [`Dispose`](#api-b437279da15fada8) | Method |
| [`EnterExecutionScope`](#api-1224137a2838fc31) | Method |
| [`PlayPreview`](#api-f4059cc63a7e5c31) | Method |
| [`StopPreview`](#api-51e973f47202fc31) | Method |

## Type declaration

<a id="api-d185679bf694c7a0"></a>
<!-- api: T:Inno.Editor.Audio.EditorAudioHost 7a9a74a4b43fbf3ccb70c33035c333f1b586b7a88c6de78416bf6dc938695e75 -->

```csharp
public sealed class Inno.Editor.Audio.EditorAudioHost : Inno.Editor.Audio.IEditorAudioHost
```

Owns Editor audio devices, previews, diagnostics, and isolated Play Mode audio generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L19).

## `#ctor`

<a id="api-c6a4498c4317c19e"></a>
<!-- api: M:Inno.Editor.Audio.EditorAudioHost.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Assets.IAssetArtifactLookup,Inno.Core.Diagnostics.DiagnosticHub,System.Func{Inno.Audio.IAudioDevice},System.Func{Inno.Audio.AudioProjectSettings}) 804da94bde7b435429321a452811a390cd83c94adcb72cf1ffa6ec7069a78ff4 -->

```csharp
public Inno.Editor.Audio.EditorAudioHost.EditorAudioHost(Inno.Extensibility.Types.TypeCatalog types, Inno.Assets.IAssetArtifactLookup artifacts, Inno.Core.Diagnostics.DiagnosticHub diagnostics, System.Func<Inno.Audio.IAudioDevice> deviceFactory, System.Func<Inno.Audio.AudioProjectSettings>? settingsProvider = null)
```

Creates the Editor audio host over the active authoring artifact lookup and settings source.

**Parameter `types`:** Active type catalog used for provider and mixer extension generations.

**Parameter `artifacts`:** Authoring artifact lookup shared by Edit and isolated Play sessions.

**Parameter `diagnostics`:** Shared Editor diagnostic hub that owns current audio issues.

**Parameter `deviceFactory`:** Required host-owned backend-neutral device factory.

**Parameter `settingsProvider`:** Optional host-owned callback that returns the latest isolated audio project settings snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L47).

## `CreateRuntimeSubsystemFactory`

<a id="api-cae213197754b210"></a>
<!-- api: M:Inno.Editor.Audio.EditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession) 0f7317889cb8314be72ed0dd893f2977dee6ac8b95e55ca0cd2202f67750456f -->

```csharp
public Inno.Runtime.Contracts.IRuntimeSubsystemFactory Inno.Editor.Audio.EditorAudioHost.CreateRuntimeSubsystemFactory(Inno.Runtime.RuntimeSession session)
```

Creates the reusable feature factory used by Edit and Play runtime sessions.

**Parameter `session`:** The explicit session owner; it is never exposed through subsystem contracts.

**Returns:** A factory that creates and releases one isolated audio generation per session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L70).

## `Dispose`

<a id="api-b437279da15fada8"></a>
<!-- api: M:Inno.Editor.Audio.EditorAudioHost.Dispose 6767c2e4710787844c236412623c0547040248d4b2e0197bffc4fbda23563d14 -->

```csharp
public void Inno.Editor.Audio.EditorAudioHost.Dispose()
```

Releases every active audio generation before their owning Editor sessions are torn down.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L201).

## `EnterExecutionScope`

<a id="api-1224137a2838fc31"></a>
<!-- api: M:Inno.Editor.Audio.EditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession) 5576d2c664a6a128f599150bfddba5b436b30155ae7d0d33500f8985a6a16621 -->

```csharp
public System.IDisposable Inno.Editor.Audio.EditorAudioHost.EnterExecutionScope(Inno.Runtime.RuntimeSession session)
```

Binds the script-facing audio façade to one session's runtime.

**Parameter `session`:** Session whose feature pipeline owns an active Editor audio generation.

**Returns:** A strict last-in-first-out execution scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L147).

## `PlayPreview`

<a id="api-f4059cc63a7e5c31"></a>
<!-- api: M:Inno.Editor.Audio.EditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioClipAsset,System.Nullable{Inno.Audio.AudioPlayOptions}) 85eddd13cff434f7089eeac37827fcffb2fb8c67891812d350c06d19551c0b6d -->

```csharp
public Inno.Audio.AudioVoiceHandle Inno.Editor.Audio.EditorAudioHost.PlayPreview(Inno.Runtime.RuntimeSession session, Inno.Audio.AudioClipAsset clip, Inno.Audio.AudioPlayOptions? options = null)
```

Starts an Editor-owned preview voice through an active Edit Mode session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `clip`:** Imported audio clip to preview.

**Parameter `options`:** Optional playback parameters; omitted values use engine defaults.

**Returns:** The preview voice handle, initially in the preparing state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L164).

## `StopPreview`

<a id="api-51e973f47202fc31"></a>
<!-- api: M:Inno.Editor.Audio.EditorAudioHost.StopPreview(Inno.Runtime.RuntimeSession,Inno.Audio.AudioVoiceHandle) 5c5f7e59ef963c8a04c0e40225324d65723ab3d76d43970e57927228f8bc8c2c -->

```csharp
public bool Inno.Editor.Audio.EditorAudioHost.StopPreview(Inno.Runtime.RuntimeSession session, Inno.Audio.AudioVoiceHandle voice)
```

Stops one preview voice owned by an active Edit Mode session.

**Parameter `session`:** Active Edit Mode session.

**Parameter `voice`:** Preview voice to stop.

**Returns:** `true` when a live preview was stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Audio/EditorAudioHost.cs#L188).
