---
title: "EditorReloadCoordinator"
description: "Reference for EditorReloadCoordinator in Inno.Editor.Core."
uid: api.inno.editor.core.f63ac6e4029fdd38
kind: api
owners:
  - Inno.Editor.Core
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
---
# `EditorReloadCoordinator`

This reference describes `EditorReloadCoordinator` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Scripting.Reload.IScriptReloadCoordinator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3f1b42a59a162d7c) | Method |
| [`CanActivateReload`](#api-9fdb7a43843ec6e3) | Method |
| [`CanRequestReload`](#api-c1ecf766f08e22c1) | Method |
| [`Execute`](#api-11db6eafebcf5299) | Method |
| [`RefreshDiagnostics`](#api-ecc8be09c7074a67) | Method |
| [`Register`](#api-24989cbb15bcf851) | Method |
| [`RegisterGuard`](#api-94f1d4b6009c8abf) | Method |

## Type declaration

<a id="api-f63ac6e4029fdd38"></a>
<!-- api: T:Inno.Editor.Core.EditorReloadCoordinator b138461d895bf6cc7d377f0aa5245f0e364afb223566eb6ac6ef6684d15f44bf -->

```csharp
public sealed class Inno.Editor.Core.EditorReloadCoordinator : Inno.Scripting.Reload.IScriptReloadCoordinator
```

Coordinates weakly registered editor feature migrations around atomic assembly reload sessions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L16).

## `#ctor`

<a id="api-3f1b42a59a162d7c"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.#ctor 5aad47dc1903909bf1fc86100f911b5b5078a7d094619b21bb72885cf4ea0191 -->

```csharp
public Inno.Editor.Core.EditorReloadCoordinator.EditorReloadCoordinator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L16).

## `CanActivateReload`

<a id="api-9fdb7a43843ec6e3"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.CanActivateReload(System.String@) 167c2d80ed87ff669b3de8b578493e32434d59451b953365e7d0215261627769 -->

```csharp
public bool Inno.Editor.Core.EditorReloadCoordinator.CanActivateReload(out string? reason)
```

Queries whether compilation and activation can proceed without interrupting a running session.

**Parameter `reason`:** The first blocking reason, or null when activation is allowed.

**Returns:** True when all live guards permit generation work.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L66).

## `CanRequestReload`

<a id="api-c1ecf766f08e22c1"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.CanRequestReload(System.String@) 07fa1e5e5da18d99870d8f377e7a2de2ce91a5ab43a744ef78ebd5eeb8e4d944 -->

```csharp
public bool Inno.Editor.Core.EditorReloadCoordinator.CanRequestReload(out string? reason)
```

Queries whether every registered owner accepts an explicit reload request.

**Parameter `reason`:** The first blocking reason, or null when the request is allowed.

**Returns:** True when all live guards permit a manual request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L55).

## `Execute`

<a id="api-11db6eafebcf5299"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession,Inno.Extensibility.Reload.IGenerationChange) 1574feedc59a3c6a17fd4a3f4accd5034ebac09a719c540317ca05fc454783d9 -->

```csharp
public Inno.Extensibility.Reload.IAssemblyUnloadProbe Inno.Editor.Core.EditorReloadCoordinator.Execute(Inno.Extensibility.Modules.AssemblyReloadSession reload, Inno.Extensibility.Reload.IGenerationChange? externalChange = null)
```

Applies one prepared assembly reload together with every registered editor feature migration.

**Parameter `reload`:** The prepared assembly reload session to activate and complete.

**Parameter `externalChange`:** Content recovery prepared before type publication, applied before Editor recovery, and restored before old values.

**Returns:** A monitor that observes cooperative unloading of assemblies retired by the committed reload.

**Throws `System.ArgumentNullException`:** Thrown when `reload` is `null`.

**Throws `System.AggregateException`:** Thrown when activation fails and one or more feature or assembly rollback stages also fail.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L113).

## `RefreshDiagnostics`

<a id="api-ecc8be09c7074a67"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.RefreshDiagnostics ebd132914fc490d8820a39860ab6b2dc2d43d591b6a0b48f36ef4dada482c9c0 -->

```csharp
public void Inno.Editor.Core.EditorReloadCoordinator.RefreshDiagnostics()
```

Requests every live participant to republish diagnostics derived from its current state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L128).

## `Register`

<a id="api-24989cbb15bcf851"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.Register(Inno.Editor.Core.IEditorReloadParticipant) 5bd9de960a1af2a9b86c2543b78737b7b3d9dfb2ec5e88dbabcc329776b44b8a -->

```csharp
public System.IDisposable Inno.Editor.Core.EditorReloadCoordinator.Register(Inno.Editor.Core.IEditorReloadParticipant participant)
```

Registers an editor feature that owns generation-bound live state.

**Parameter `participant`:** The feature participant. The coordinator retains only a weak reference to this instance.

**Returns:** A registration lease that strongly retains the participant until the lease is disposed.
The coordinator itself retains only a weak reference.

**Throws `System.ArgumentNullException`:** Thrown when `participant` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L81).

## `RegisterGuard`

<a id="api-94f1d4b6009c8abf"></a>
<!-- api: M:Inno.Editor.Core.EditorReloadCoordinator.RegisterGuard(Inno.Editor.Core.IEditorReloadGuard) cf9c4d6b5d5eb9ffcb66108cba64f83399b40c6cf5c5f93019daecd288ffbdc6 -->

```csharp
public System.IDisposable Inno.Editor.Core.EditorReloadCoordinator.RegisterGuard(Inno.Editor.Core.IEditorReloadGuard guard)
```

Registers a weak admission guard without stopping its owner or creating a generation transaction.

**Parameter `guard`:** The owner whose current state determines reload admission.

**Returns:** A caller-owned lease retaining the guard until registration is released.

**Throws `System.ArgumentNullException`:** The guard is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Core/Reloading/EditorReloadCoordinator.cs#L34).
