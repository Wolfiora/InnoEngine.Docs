---
title: "IAssemblyCatalogTransaction"
description: "Reference for IAssemblyCatalogTransaction in Inno.Extensibility.Modules."
uid: api.inno.extensibility.modules.eb6f05b08f38182f
kind: api
owners:
  - Inno.Extensibility.Modules
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules#source-and-publication-contract
---
# `IAssemblyCatalogTransaction`

This reference describes `IAssemblyCatalogTransaction` in `Inno.Extensibility.Modules`. Read the [shared contract](../../projects/inno-extensibility-modules.md#source-and-publication-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Activate`](#api-49639abf2eb336f5) | Method |
| [`Complete`](#api-51e8c1f9ba0fe65d) | Method |
| [`Rollback`](#api-234e48ee211e82ba) | Method |
| [`context`](#api-db5181af9cb60f79) | Property |

## Type declaration

<a id="api-eb6f05b08f38182f"></a>
<!-- api: T:Inno.Extensibility.Modules.IAssemblyCatalogTransaction 8600287a6d5c182cdb4fd12c9d096e4ff9ac153748a8e534b869e335fe793ee3 -->

```csharp
public interface Inno.Extensibility.Modules.IAssemblyCatalogTransaction
```

Controls one participant's prepared state during an assembly catalog transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogTransaction.cs#L6).

## `Activate`

<a id="api-49639abf2eb336f5"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Activate ef97abdf2e057e583fbba9aeb9f73c68e8c6dc58328910206b0196b5fbafc404 -->

```csharp
void Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Activate()
```

Publishes the prepared candidate state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogTransaction.cs#L16).

## `Complete`

<a id="api-51e8c1f9ba0fe65d"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Complete 02daa23240fbac71671b25f9a70d44f1492d8b481a1d0fc43191f9e2cb86c16c -->

```csharp
void Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Complete()
```

Finalizes an activated state and releases the previous state without performing further publication work.

**Constraints:** Ordinary cleanup failures must remain observable after all independent owners have been attempted.
The coordinator faults further generation admission instead of ignoring the failure or pretending publication can roll back.
Unfinished retirement must retain its owners and propagate the retirement barrier before releasing their dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogTransaction.cs#L26).

## `Rollback`

<a id="api-234e48ee211e82ba"></a>
<!-- api: M:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Rollback ad6252e9aa3db4fdda8ebd926be0cd894ac4368e4e23e62b1071652602390391 -->

```csharp
void Inno.Extensibility.Modules.IAssemblyCatalogTransaction.Rollback()
```

Restores the previous state and releases the candidate state.

**Constraints:** Implementations should isolate individual cleanup failures so every candidate resource can be released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogTransaction.cs#L34).

## `context`

<a id="api-db5181af9cb60f79"></a>
<!-- api: P:Inno.Extensibility.Modules.IAssemblyCatalogTransaction.context 9952729a6dfb2aad85ac16e4b63f903cc42851efd263c5e489eb54b80398ade3 -->

```csharp
object? Inno.Extensibility.Modules.IAssemblyCatalogTransaction.context { get; }
```

Gets an optional short-lived context exposed through `Inno.Extensibility.Modules.AssemblyReloadContext`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7c7f46d8bf8e5f49e0eb59f3e9d5f2ce8e8c70ae/src/foundation/extensibility/Inno.Extensibility.Modules/Catalog/IAssemblyCatalogTransaction.cs#L11).
