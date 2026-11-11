---
title: "RuntimeSubsystemContext"
description: "Reference for RuntimeSubsystemContext in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.45b8410ed4449130
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `RuntimeSubsystemContext`

This reference describes `RuntimeSubsystemContext` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cc1be25c2b660131) | Method |
| [`capabilities`](#api-97b09b899ad4ddd1) | Property |
| [`diagnostics`](#api-2bc71ecfee41d12d) | Property |
| [`events`](#api-6e5a356b4f96beb3) | Property |
| [`identities`](#api-b34bbff6c9ec45e7) | Property |
| [`isEditMode`](#api-470c0df61043393b) | Property |
| [`lifetime`](#api-e89ae40d80caf49d) | Property |
| [`resources`](#api-e4001d01912531a6) | Property |
| [`types`](#api-f43b024c0c9bbe87) | Property |

## Type declaration

<a id="api-45b8410ed4449130"></a>
<!-- api: T:Inno.Runtime.Contracts.RuntimeSubsystemContext 090e5073e7b05d36c6d88e00a6d5193c892cf42f26c2c993c5194042c1e4c0a0 -->

```csharp
public sealed class Inno.Runtime.Contracts.RuntimeSubsystemContext
```

Exposes only foundation services and owner metadata, never a complete RuntimeSession or domain service locator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L16).

## `#ctor`

<a id="api-cc1be25c2b660131"></a>
<!-- api: M:Inno.Runtime.Contracts.RuntimeSubsystemContext.#ctor(Inno.Core.Events.EventDispatcher,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Identity.IdentityAllocator,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Execution.LifetimeScope,Inno.Runtime.Contracts.RuntimeSubsystemLifetime,System.Boolean,System.Collections.Generic.IEnumerable{Inno.Runtime.Contracts.RuntimeCapabilityId}) 55e6384919a7be53ffc9bc3f73c021c3ce0e70f147c35ef07b5f5c20d239622f -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemContext.RuntimeSubsystemContext(Inno.Core.Events.EventDispatcher events, Inno.Core.Diagnostics.DiagnosticHub diagnostics, Inno.Core.Identity.IdentityAllocator identities, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Execution.LifetimeScope resources, Inno.Runtime.Contracts.RuntimeSubsystemLifetime lifetime, bool isEditMode = false, System.Collections.Generic.IEnumerable<Inno.Runtime.Contracts.RuntimeCapabilityId>? capabilities = null)
```

Creates the explicit construction boundary for a host or session pipeline.

**Parameter `events`:** The owner event dispatcher.

**Parameter `diagnostics`:** The shared diagnostic state owner.

**Parameter `identities`:** The isolated identity domain.

**Parameter `types`:** The active extension type catalog.

**Parameter `resources`:** The pipeline-owned construction lifetime.

**Parameter `lifetime`:** The scope in which created subsystems will live.

**Parameter `isEditMode`:** Whether simulation belongs to an authoring session.

**Parameter `capabilities`:** Verified backend-neutral capabilities supplied by composition; copied into an immutable set.

**Throws `System.ArgumentNullException`:** A required foundation service is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L48).

## `capabilities`

<a id="api-97b09b899ad4ddd1"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.capabilities d001a047b6b9085523c938e3e70a5fcacdcb4f34c9d1f10cfa3825be267700d5 -->

```csharp
public System.Collections.Generic.IReadOnlySet<Inno.Runtime.Contracts.RuntimeCapabilityId> Inno.Runtime.Contracts.RuntimeSubsystemContext.capabilities { get; }
```

Gets the immutable capabilities verified by the owner, never a mutable service container.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L102).

## `diagnostics`

<a id="api-2bc71ecfee41d12d"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.diagnostics 7b505fe98704d01e68388db4137510e6542097f7d7ce7e863604dc7438fc31a3 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticHub Inno.Runtime.Contracts.RuntimeSubsystemContext.diagnostics { get; }
```

Gets the shared diagnostic state owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L77).

## `events`

<a id="api-6e5a356b4f96beb3"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.events b50c3633394b512676d47dacd2a9217a6205af9c205177fcc3724b1a4e08df3e -->

```csharp
public Inno.Core.Events.EventDispatcher Inno.Runtime.Contracts.RuntimeSubsystemContext.events { get; }
```

Gets the owner-thread event dispatcher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L73).

## `identities`

<a id="api-b34bbff6c9ec45e7"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.identities 465fdc1909c69f478b753bd4d133cbf87b8288829baefb9090f1aec2a5e2a261 -->

```csharp
public Inno.Core.Identity.IdentityAllocator Inno.Runtime.Contracts.RuntimeSubsystemContext.identities { get; }
```

Gets the isolated live-object identity domain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L81).

## `isEditMode`

<a id="api-470c0df61043393b"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.isEditMode 6b20961ff10a5f435ea698d1d8dd768fbd9a98319a2c57af2063bad44a8397ad -->

```csharp
public bool Inno.Runtime.Contracts.RuntimeSubsystemContext.isEditMode { get; }
```

Gets whether scaled simulation should be disabled for authoring.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L97).

## `lifetime`

<a id="api-e89ae40d80caf49d"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.lifetime 6b8f949286b7c46e8a8690cbfaa3d034c6c84545be2c8847e0f2ba4caedfa276 -->

```csharp
public Inno.Runtime.Contracts.RuntimeSubsystemLifetime Inno.Runtime.Contracts.RuntimeSubsystemContext.lifetime { get; }
```

Gets the owner scope used to validate factory lifetimes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L93).

## `resources`

<a id="api-e4001d01912531a6"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.resources eaec5be40f2997f3d0604db410f5a44d26b379a09958eb971f8a6f7a5b9032a9 -->

```csharp
public Inno.Core.Execution.LifetimeScope Inno.Runtime.Contracts.RuntimeSubsystemContext.resources { get; }
```

Gets resources owned by this pipeline, not by a global container.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L89).

## `types`

<a id="api-f43b024c0c9bbe87"></a>
<!-- api: P:Inno.Runtime.Contracts.RuntimeSubsystemContext.types 4086a819bf823743f5b8fa0a42f2c5240b4b958ca70a42153305bce7ca6b78a1 -->

```csharp
public Inno.Extensibility.Types.TypeCatalog Inno.Runtime.Contracts.RuntimeSubsystemContext.types { get; }
```

Gets the current foundation type catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/RuntimeSubsystemContext.cs#L85).
