---
title: "ISceneReloadStateTransfer"
description: "Reference for ISceneReloadStateTransfer in Inno.Scene."
uid: api.inno.scene.da8cefed09569e70
kind: api
owners:
  - Inno.Scene
apiSurface: source-clr
contracts:
  - project.inno-scene#scene-ownership-contract
---
# `ISceneReloadStateTransfer`

This reference describes `ISceneReloadStateTransfer` in `Inno.Scene`. Read the [shared contract](../../projects/inno-scene.md#scene-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-3955d702e1757396) | Method |
| [`Complete`](#api-8610481086d5e640) | Method |
| [`PrepareForActivation`](#api-ee85618e130e7768) | Method |
| [`RestorePreviousState`](#api-2f519000ebf9d24f) | Method |
| [`RollbackStructure`](#api-8ca76ac6a7d7d02f) | Method |
| [`diagnostics`](#api-e4a60525aa55f668) | Property |
| [`recoveryChanges`](#api-f80bff751bc0d3ab) | Property |
| [`retiredObjects`](#api-2ea9a386cfa5979e) | Property |

## Type declaration

<a id="api-da8cefed09569e70"></a>
<!-- api: T:Inno.Scene.ISceneReloadStateTransfer 49498b0284a2351f0da710cb0f9b1951c5d1b214c318164c5be90373be0aeaa5 -->

```csharp
public interface Inno.Scene.ISceneReloadStateTransfer
```

Represents a staged scene object state transfer associated with one assembly reload transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L9).

## `Apply`

<a id="api-3955d702e1757396"></a>
<!-- api: M:Inno.Scene.ISceneReloadStateTransfer.Apply 5f50d16d96ab611f935b7fffb4d0f2ff8e017c17eccc207659d66d2f0d8dd325 -->

```csharp
void Inno.Scene.ISceneReloadStateTransfer.Apply()
```

Creates replacement instances and restores their serialized state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L34).

## `Complete`

<a id="api-8610481086d5e640"></a>
<!-- api: M:Inno.Scene.ISceneReloadStateTransfer.Complete 239acd14114da9bba519ee8a80b449011b8e8e58bb8b491aa0ec44e318ee94a2 -->

```csharp
void Inno.Scene.ISceneReloadStateTransfer.Complete()
```

Finalizes replacement instances after the assembly reload is committed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L49).

## `PrepareForActivation`

<a id="api-ee85618e130e7768"></a>
<!-- api: M:Inno.Scene.ISceneReloadStateTransfer.PrepareForActivation e0b2720b0fb89acfd442ec57da58e871172904d84871f53ad28cf36bf9b30e4b -->

```csharp
void Inno.Scene.ISceneReloadStateTransfer.PrepareForActivation()
```

Disables active retiring lifecycle objects before the new assembly generation becomes active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L29).

## `RestorePreviousState`

<a id="api-2f519000ebf9d24f"></a>
<!-- api: M:Inno.Scene.ISceneReloadStateTransfer.RestorePreviousState 7ac92b3f85d2925a13e78e824d79dd210e3d7241fb1ec125a9e689cf130ecbc8 -->

```csharp
void Inno.Scene.ISceneReloadStateTransfer.RestorePreviousState()
```

Restores lifecycle state on the previous scene instances after rollback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L44).

## `RollbackStructure`

<a id="api-8ca76ac6a7d7d02f"></a>
<!-- api: M:Inno.Scene.ISceneReloadStateTransfer.RollbackStructure d57e7f173d480afe8b99b3556b2861f937a1c22d35b45e4178ce2ed7bf71bc2c -->

```csharp
void Inno.Scene.ISceneReloadStateTransfer.RollbackStructure()
```

Restores the previous scene structure after a failed state transfer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L39).

## `diagnostics`

<a id="api-e4a60525aa55f668"></a>
<!-- api: P:Inno.Scene.ISceneReloadStateTransfer.diagnostics 852ca31d65c3e5360d1248f6e6f575044aa01fa0d4136d3c92fb47a5493a9d91 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Scene.SceneReloadDiagnostic> Inno.Scene.ISceneReloadStateTransfer.diagnostics { get; }
```

Gets non-fatal state transfer decisions produced while replacing reloadable scene objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L19).

## `recoveryChanges`

<a id="api-f80bff751bc0d3ab"></a>
<!-- api: P:Inno.Scene.ISceneReloadStateTransfer.recoveryChanges 3e68715c791930e7d3fd7731444cab00cdfbfdec105de6033969b65c1a79aed5 -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.References.ReferenceRecoveryChange> Inno.Scene.ISceneReloadStateTransfer.recoveryChanges { get; }
```

Gets the shared candidate resolutions for actual scene element and asset dependency slots after application.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L24).

## `retiredObjects`

<a id="api-2ea9a386cfa5979e"></a>
<!-- api: P:Inno.Scene.ISceneReloadStateTransfer.retiredObjects e06b231cb44cb41e569bec69a9ef89337792a21f35b0562688fcc5bb59a3e141 -->

```csharp
System.Collections.Generic.IReadOnlyList<object> Inno.Scene.ISceneReloadStateTransfer.retiredObjects { get; }
```

Gets old scene objects whose runtime types belong to the retiring assembly generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/537ec77d8445967534cd932f5f7735758ad98f13/src/content/scene/Inno.Scene/Reloading/ISceneReloadStateTransfer.cs#L14).
