---
title: "ModuleHost"
description: "Reference for ModuleHost in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.8d63a92bc53048c9
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `ModuleHost`

This reference describes `ModuleHost` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0418814a4fef4cdd) | Method |
| [`BeginReload`](#api-dfdfda494025dbd6) | Method |
| [`BeginReload`](#api-2f1870ba7941348a) | Method |
| [`BeginReload`](#api-7e8517e9329ee5e9) | Method |
| [`Dispose`](#api-28e6e98e8538fc4d) | Method |
| [`Load`](#api-a61e6a735d31982c) | Method |
| [`Rebuild`](#api-6800116a8668bed9) | Method |
| [`Refresh`](#api-988885c22467d620) | Method |
| [`Register`](#api-78e9f40a7bc553e4) | Method |
| [`RegisterCatalogParticipant`](#api-b31023d29454b909) | Method |
| [`Unload`](#api-a57b187f2806c47f) | Method |
| [`Unload`](#api-cb01dcd25f559c45) | Method |
| [`generations`](#api-44a2e4ac5a253efe) | Property |
| [`isInitialized`](#api-41de57bdf74bc14e) | Property |
| [`modules`](#api-a869ae3051ce398f) | Property |

## Type declaration

<a id="api-8d63a92bc53048c9"></a>
<!-- api: T:Inno.Extensibility.Modules.ModuleHost 854a392aa50532fa5a3977904ad092334686786a33ec9d01345a017421f18ce9 -->

```csharp
public sealed class Inno.Extensibility.Modules.ModuleHost : System.IDisposable
```

Owns the active managed assembly catalog and transactional module generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L17).

## `#ctor`

<a id="api-0418814a4fef4cdd"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.#ctor(Inno.Extensibility.Modules.ModuleHostOptions) 4cc65fbe1d9f7e45354a7dc3fcf0cd99ad59538614821a7af18f28480e11d3a9 -->

```csharp
public Inno.Extensibility.Modules.ModuleHost.ModuleHost(Inno.Extensibility.Modules.ModuleHostOptions options)
```

Creates a module host from the explicitly supplied assembly source and publishes its first catalog.

**Parameter `options`:** The validated configuration that controls this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L67).

## `BeginReload`

<a id="api-dfdfda494025dbd6"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.BeginReload(Inno.Extensibility.Modules.AssemblyModuleHandle,Inno.Extensibility.Modules.IModuleSource) d647a39d71f2d2929aeda2423a8430638ad8b9ad972dcd7b138fa1274ac3d5c6 -->

```csharp
public Inno.Extensibility.Modules.AssemblyReloadSession Inno.Extensibility.Modules.ModuleHost.BeginReload(Inno.Extensibility.Modules.AssemblyModuleHandle module, Inno.Extensibility.Modules.IModuleSource request)
```

Stages and validates a replacement generation without publishing it.

**Parameter `module`:** The module consumed by begin reload; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `request`:** The validated immutable request that defines this operation.

**Returns:** The validated assembly reload session that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L293).

## `BeginReload`

<a id="api-2f1870ba7941348a"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource},System.Collections.Generic.IReadOnlyList{System.String}) e5b83c14bac978ffe6ec12fee382f2912b414a4eaf9ebaf2e03d751d0e2800f8 -->

```csharp
public Inno.Extensibility.Modules.AssemblyReloadSession Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.IModuleSource> requests, System.Collections.Generic.IReadOnlyList<string> removedModuleNames)
```

Stages additions, replacements, and removals as one atomic dependency-ordered transaction.

**Parameter `requests`:** Complete candidate module additions and replacements.

**Parameter `removedModuleNames`:** Active stable module names omitted from the candidate generation.

**Returns:** A session that publishes or rolls back every candidate and removal together.

**Throws `System.ArgumentNullException`:** Thrown when either argument is `null`.

**Throws `System.ArgumentException`:** Thrown when no change is requested, a name is duplicated, or one module is both replaced and removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L364).

## `BeginReload`

<a id="api-7e8517e9329ee5e9"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.IModuleSource}) c5dd1240f673eaea48fe6b1524659fc85551a5f515d1ba2eeaee674faa40f993 -->

```csharp
public Inno.Extensibility.Modules.AssemblyReloadSession Inno.Extensibility.Modules.ModuleHost.BeginReload(System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.IModuleSource> requests)
```

Stages a dependency-ordered set of module additions or replacements as one atomic transaction.
Existing modules are matched by their stable module names; an unknown name creates a new module.

**Parameter `requests`:** The complete reverse-dependency reload closure.

**Returns:** A session that publishes or rolls back every candidate together.

**Throws `System.ArgumentNullException`:** Thrown when `requests` is `null`.

**Throws `System.ArgumentException`:** Thrown when the request set is empty or contains duplicate module names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L335).

## `Dispose`

<a id="api-28e6e98e8538fc4d"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Dispose afa828f92ecf0a3564c758a5e100a486d676dd8d23446cfc160a0192dd5bcf3d -->

```csharp
public void Inno.Extensibility.Modules.ModuleHost.Dispose()
```

Unsubscribes assembly discovery and begins unload of every module owned by this host.

**Throws `Inno.Core.Execution.RetirementPendingException`:** A generation still owns live work. Discovery stops, but modules are not unloaded or forgotten.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L509).

## `Load`

<a id="api-a61e6a735d31982c"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Load(Inno.Extensibility.Modules.IModuleSource) f1406ff4671696756e3eac057aadcafeef371eb34be70b7ba2ed523b8420ca7c -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleHandle Inno.Extensibility.Modules.ModuleHost.Load(Inno.Extensibility.Modules.IModuleSource request)
```

Prepares and activates a new module contribution through its selected source.

**Parameter `request`:** The validated immutable request that defines this operation.

**Returns:** The validated assembly module handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L171).

## `Rebuild`

<a id="api-6800116a8668bed9"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Rebuild b5a862a230668943712fec5ac86454ae9774451767ed70a8c28a627f5059fdee -->

```csharp
public void Inno.Extensibility.Modules.ModuleHost.Rebuild()
```

Rebuilds the active assembly catalog and every registered derived-state participant.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L485).

## `Refresh`

<a id="api-988885c22467d620"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Refresh de790b9592d0027a83c54e1dc3fe12c0ae6798ec4e8ce3d9658b93daffdf4770 -->

```csharp
public void Inno.Extensibility.Modules.ModuleHost.Refresh()
```

Applies pending host assembly changes without rebuilding an unchanged catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L470).

## `Register`

<a id="api-78e9f40a7bc553e4"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Register(System.String,System.Collections.Generic.IReadOnlyList{System.Reflection.Assembly}) 85574ec8d8eea8a37cb612362a4c736566753f6127f60a79fe7a80f097f57bbe -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleHandle Inno.Extensibility.Modules.ModuleHost.Register(string moduleName, System.Collections.Generic.IReadOnlyList<System.Reflection.Assembly> assemblies)
```

Registers assemblies owned by an external load context.

**Parameter `moduleName`:** The module name text validated by the register operation.

**Parameter `assemblies`:** The assemblies consumed by register; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated assembly module handle that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L218).

## `RegisterCatalogParticipant`

<a id="api-b31023d29454b909"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.RegisterCatalogParticipant(Inno.Extensibility.Modules.IAssemblyCatalogParticipant) 9cd0653bd42a8bbb79f3b558129a1deec352710cc17b557b1120863800cf8617 -->

```csharp
public System.IDisposable Inno.Extensibility.Modules.ModuleHost.RegisterCatalogParticipant(Inno.Extensibility.Modules.IAssemblyCatalogParticipant participant)
```

Registers a transactional consumer of the assembly catalog and initializes it from the
currently active generation.

**Parameter `participant`:** The participant that derives state from catalog snapshots.

**Returns:** A registration that removes the participant when disposed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L104).

## `Unload`

<a id="api-a57b187f2806c47f"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Unload(Inno.Extensibility.Modules.AssemblyModuleHandle) 101645b681eab128c9a01794e32f4261f6690d39c33c2790519cb309ea895a5a -->

```csharp
public Inno.Extensibility.Reload.IAssemblyUnloadProbe Inno.Extensibility.Modules.ModuleHost.Unload(Inno.Extensibility.Modules.AssemblyModuleHandle module)
```

Removes an active module and starts cooperative unload when it is manager-owned.

**Parameter `module`:** The module consumed by unload; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated assembly unload monitor that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L387).

## `Unload`

<a id="api-cb01dcd25f559c45"></a>
<!-- api: M:Inno.Extensibility.Modules.ModuleHost.Unload(System.Collections.Generic.IReadOnlyList{Inno.Extensibility.Modules.AssemblyModuleHandle}) d3466f53061b6991a81cd5ed583b8782cce33cac1dd0fe9152d39655cc555907 -->

```csharp
public Inno.Extensibility.Reload.IAssemblyUnloadProbe Inno.Extensibility.Modules.ModuleHost.Unload(System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.AssemblyModuleHandle> modules)
```

Removes several active modules in one catalog transaction, then requests unload in reverse dependency order.

**Parameter `modules`:** The distinct active module handles to remove.

**Returns:** A monitor that completes after every collectible context becomes unreachable.

**Throws `System.ArgumentNullException`:** Thrown when `modules` is `null`.

**Throws `System.ArgumentException`:** Thrown when a handle is duplicated or is not active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L425).

## `generations`

<a id="api-44a2e4ac5a253efe"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleHost.generations 5eecbf227e76a7eeb86b4a11ef1c811f7743ddbae8e902a622a1c2dc6be5df70 -->

```csharp
public Inno.Extensibility.Reload.GenerationCoordinator Inno.Extensibility.Modules.ModuleHost.generations { get; }
```

Gets the admission gate and retirement owner shared by all module and host generation changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L42).

## `isInitialized`

<a id="api-41de57bdf74bc14e"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleHost.isInitialized c1ab31f3873accb7a09dff3d00125fbafbdcf3c1cd236e18a25cf5dba924d4f7 -->

```csharp
public bool Inno.Extensibility.Modules.ModuleHost.isInitialized { get; private set; }
```

Gets whether this module host can accept catalog operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L37).

## `modules`

<a id="api-a869ae3051ce398f"></a>
<!-- api: P:Inno.Extensibility.Modules.ModuleHost.modules eb64af83696c58427fb7efe13855a28193caddabe0249799bdb9a3233391f1c3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.AssemblyModuleInfo> Inno.Extensibility.Modules.ModuleHost.modules { get; }
```

Gets non-owning information about active managed and external modules.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/ModuleHost.cs#L47).
