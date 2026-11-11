---
title: "IRuntimeSubsystemFactory"
description: "Reference for IRuntimeSubsystemFactory in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.3840281a4756c12a
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `IRuntimeSubsystemFactory`

This reference describes `IRuntimeSubsystemFactory` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-aff16149a43fbf35) | Method |
| [`descriptor`](#api-882fcca705e56429) | Property |

## Type declaration

<a id="api-3840281a4756c12a"></a>
<!-- api: T:Inno.Runtime.Contracts.IRuntimeSubsystemFactory 3038f27e96ef0d55719eb58311d75720935bfa14bb5ae5c202bbf28532b1a27e -->

```csharp
public interface Inno.Runtime.Contracts.IRuntimeSubsystemFactory
```

Creates one runtime subsystem instance for each declared Host or Session owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystemFactory.cs#L6).

## `Create`

<a id="api-aff16149a43fbf35"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystemFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext) 56a791da5259440fb676f90941810178609f693ac7926290dd256d2ea1fac82d -->

```csharp
Inno.Runtime.Contracts.IRuntimeSubsystem Inno.Runtime.Contracts.IRuntimeSubsystemFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext context)
```

Creates a subsystem owned exclusively by the supplied construction scope.

**Parameter `context`:** Stable foundation services and a private factory lifetime. Register partial allocations and work here before callbacks can fail.

**Returns:** A new unattached runtime subsystem; after returning, its lifecycle belongs to the pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystemFactory.cs#L22).

## `descriptor`

<a id="api-882fcca705e56429"></a>
<!-- api: P:Inno.Runtime.Contracts.IRuntimeSubsystemFactory.descriptor 5a41b02a4c4d2f4ad8a9c7a0501d784b57eca91e94f47e81a60f9829008b00f4 -->

```csharp
Inno.Runtime.Contracts.RuntimeSubsystemDescriptor Inno.Runtime.Contracts.IRuntimeSubsystemFactory.descriptor { get; }
```

Gets stable ordering and dependency metadata without creating runtime state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystemFactory.cs#L11).
