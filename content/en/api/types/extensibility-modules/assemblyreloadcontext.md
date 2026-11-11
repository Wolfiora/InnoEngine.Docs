---
title: "AssemblyReloadContext"
description: "Reference for AssemblyReloadContext in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.a85ecb9ac4362bb0
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `AssemblyReloadContext`

This reference describes `AssemblyReloadContext` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```GetContext``1```](#api-4495630931d29997) | Method |
| [```TryGetContext``1```](#api-689239c1a139b139) | Method |
| [`candidateCatalog`](#api-3082e6d823f7aae4) | Property |
| [`module`](#api-aeb0a73c29f1df0d) | Property |
| [`modules`](#api-9dd4793a84c29138) | Property |
| [`previousCatalog`](#api-86261a4195723cd5) | Property |

## Type declaration

<a id="api-a85ecb9ac4362bb0"></a>
<!-- api: T:Inno.Extensibility.Modules.AssemblyReloadContext 0df6b3498b7f7736df148f364b41102fd61cacacb14a29555f3f8c952f5f8a59 -->

```csharp
public sealed class Inno.Extensibility.Modules.AssemblyReloadContext
```

Provides assembly catalogs and participant-specific state during a reload transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L9).

## ```GetContext``1```

<a id="api-4495630931d29997"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyReloadContext.GetContext``1 bf0d663e82338b769d78df59ed1554ad3af25ff1da3f636886699339678ab156 -->

```csharp
public TContext Inno.Extensibility.Modules.AssemblyReloadContext.GetContext<TContext>() where TContext : class
```

Gets a context contributed by a registered catalog participant.

**Type parameter `TContext`:** The requested participant context type.

**Returns:** The matching context.

**Throws `System.InvalidOperationException`:** Thrown when no participant supplied the requested context or the reload has completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L59).

## ```TryGetContext``1```

<a id="api-689239c1a139b139"></a>
<!-- api: M:Inno.Extensibility.Modules.AssemblyReloadContext.TryGetContext``1(``0@) 3ab6d61eea7eecc17a9ea4cdc6c8dd8a84bf53d029938127955429228e4b3351 -->

```csharp
public bool Inno.Extensibility.Modules.AssemblyReloadContext.TryGetContext<TContext>(out TContext? context) where TContext : class
```

Tries to get a context contributed by a registered catalog participant.

**Type parameter `TContext`:** The requested participant context type.

**Parameter `context`:** Receives the matching context when found.

**Returns:** `true` when exactly one matching context exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L79).

## `candidateCatalog`

<a id="api-3082e6d823f7aae4"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyReloadContext.candidateCatalog ca398aaef1643423f5df6bb4f51508c8ffa25469d26b9c85fadf53c51b08366a -->

```csharp
public Inno.Extensibility.Modules.AssemblyCatalogSnapshot Inno.Extensibility.Modules.AssemblyReloadContext.candidateCatalog { get; }
```

Gets the validated candidate assembly catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L35).

## `module`

<a id="api-aeb0a73c29f1df0d"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyReloadContext.module b929be4a508d6f0a8ef09002f323e6a0ffc3a67063af4d62d58def278714bc6a -->

```csharp
public Inno.Extensibility.Modules.AssemblyModuleHandle Inno.Extensibility.Modules.AssemblyReloadContext.module { get; }
```

Gets the first logical module in dependency staging order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L40).

## `modules`

<a id="api-9dd4793a84c29138"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyReloadContext.modules 6eac2fabfc45f6b86b580ecd6c9163b51bbb720b254033b4d840ee194fc0a9ac -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Extensibility.Modules.AssemblyModuleHandle> Inno.Extensibility.Modules.AssemblyReloadContext.modules { get; }
```

Gets every logical module staged by this atomic reload transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L45).

## `previousCatalog`

<a id="api-86261a4195723cd5"></a>
<!-- api: P:Inno.Extensibility.Modules.AssemblyReloadContext.previousCatalog 74ab3ab819b3a51bbfb155d4793494c72076c802915067eddd1fed8e334216c5 -->

```csharp
public Inno.Extensibility.Modules.AssemblyCatalogSnapshot Inno.Extensibility.Modules.AssemblyReloadContext.previousCatalog { get; }
```

Gets the assembly catalog from before activation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Reloading/AssemblyReloadContext.cs#L30).
