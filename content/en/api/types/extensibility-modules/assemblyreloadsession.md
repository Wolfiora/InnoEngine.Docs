---
title: "AssemblyReloadSession"
description: "Reference for AssemblyReloadSession in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.928c369d945233ee
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyReloadSession`

This reference describes `AssemblyReloadSession` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `Inno.Extensibility.Reload.IGenerationPublication<Inno.Extensibility.Reload.IAssemblyUnloadProbe>`.

## Members

| Member | Kind |
| --- | --- |
| [`Activate`](#api-4072590cb7fde4ef) | Method |
| [`Complete`](#api-8bfc29e629dcb14d) | Method |
| [`Dispose`](#api-d9beac1a9e53fdd7) | Method |
| [`Rollback`](#api-1baa62fd19253ab9) | Method |
| [`context`](#api-0826b071f9debe46) | Property |
| [`generations`](#api-715a2c7ae3f81f7b) | Property |

## Type declaration

<a id="api-928c369d945233ee"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyReloadSession 9e95336c23491c1d91bcb843d18904548399341a3f705f935ff938c1b0934cde -->

```csharp
public sealed class Inno.Extensibility.Modules.AssemblyReloadSession : System.IDisposable, Inno.Extensibility.Reload.IGenerationPublication<Inno.Extensibility.Reload.IAssemblyUnloadProbe>
```

Controls activation, completion, and rollback of one prepared module generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L12).

## `Activate`

<a id="api-4072590cb7fde4ef"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyReloadSession.Activate 1021c59a002f8281817cdfe785fa3573de3ff81f2b7bb6c6ea0ae71fdb53f836 -->

```csharp
public void Inno.Extensibility.Modules.AssemblyReloadSession.Activate()
```

Atomically publishes the candidate module and all participant snapshots.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A participant could not quiesce. Both generations remain owned and the host must restart.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L48).

## `Complete`

<a id="api-8bfc29e629dcb14d"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyReloadSession.Complete ff0e0d6bd6d64f0b9c87f2cfb64e0f05ea51c8c79ec62dbd88e129b29579b05a -->

```csharp
public Inno.Extensibility.Reload.IAssemblyUnloadProbe Inno.Extensibility.Modules.AssemblyReloadSession.Complete()
```

Commits an activated reload and begins cooperative unload of the old generation.

**Returns:** The validated assembly unload monitor that represents the completed operation.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A participant still uses its dependencies. Contexts remain owned and no unload monitor is issued.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L64).

## `Dispose`

<a id="api-d9beac1a9e53fdd7"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyReloadSession.Dispose 818f0f0cefee417a6aa7069b39b06453816712fbdb6b7dd87cad4c1c7d005e04 -->

```csharp
public void Inno.Extensibility.Modules.AssemblyReloadSession.Dispose()
```

Rolls back an incomplete session.

**Throws `Inno.Core.Execution.RetirementPendingException`:** The session still owns unfinished retirement and cannot be marked disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L125).

## `Rollback`

<a id="api-1baa62fd19253ab9"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyReloadSession.Rollback 006eed67196f4ae11158027664bce2ac3b089c372395631d0601870a35ca70ad -->

```csharp
public void Inno.Extensibility.Modules.AssemblyReloadSession.Rollback()
```

Restores the previous generation and unloads the candidate generation.

**Throws `Inno.Core.Execution.RetirementPendingException`:** Rollback cannot safely release the candidate. Contexts remain owned and the shared gate is faulted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L94).

## `context`

<a id="api-0826b071f9debe46"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyReloadSession.context 819f5a9cedfdae86e62f9c4cb58a5a3d13ef1abf48cf8fba9cdb666c4b521efd -->

```csharp
public Inno.Extensibility.Modules.AssemblyReloadContext Inno.Extensibility.Modules.AssemblyReloadSession.context { get; }
```

Gets the old and candidate assembly catalogs and participant migration contexts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L35).

## `generations`

<a id="api-715a2c7ae3f81f7b"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyReloadSession.generations efa3c301276e4438951f2e76b0c73e9e9e7de8d0937bc78a3ac52cb3c54a7a0a -->

```csharp
public Inno.Extensibility.Reload.GenerationCoordinator Inno.Extensibility.Modules.AssemblyReloadSession.generations { get; }
```

Gets the owning host's shared generation gate, including discarded-candidate retirements.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadSession.cs#L40).
