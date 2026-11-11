---
title: "OwnerThreadExecution"
description: "Reference for OwnerThreadExecution in Inno.Core.Execution."
uid: api.inno.core.execution.99520b876abfaf1b
kind: api
owners:
  - Inno.Core.Execution
apiSurface: source-clr
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# `OwnerThreadExecution`

This reference describes `OwnerThreadExecution` in `Inno.Core.Execution`. Read the [shared contract](../../projects/inno-core-execution.md#lifetime-and-retirement) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Run``1```](#api-bd7c3d37d004be09) | Method |

## Type declaration

<a id="api-99520b876abfaf1b"></a>
<!-- api: T:Inno.Core.Execution.OwnerThreadExecution 4c81dad5f8e475b9ab6d958c1724b4d2ad8b3bc50a26116e9452f8adbcff2082 -->

```csharp
public static class Inno.Core.Execution.OwnerThreadExecution
```

Runs asynchronous application work while returning its continuations to the calling thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/OwnerThreadExecution.cs#L12).

## ```Run``1```

<a id="api-bd7c3d37d004be09"></a>
<!-- api: M:Inno.Core.Execution.OwnerThreadExecution.Run``1(System.Func{System.Threading.Tasks.Task{``0}}) a1fa27ab96dbe19c0b063a7a20c44ea9671dfbd64339235d2f8d5ba356634c5b -->

```csharp
public static TResult Inno.Core.Execution.OwnerThreadExecution.Run<TResult>(System.Func<System.Threading.Tasks.Task<TResult>> operation)
```

Pumps continuations until the owned operation completes, then restores the previous context.

**Type parameter `TResult`:** The result produced by the operation.

**Parameter `operation`:** Work that owns and retires every task it starts before returning. Async void work is not supported.

**Returns:** The completed operation result. Operation failures and cancellation propagate unchanged.

**Throws `System.ArgumentNullException`:** The operation is null.

**Throws `System.InvalidOperationException`:** The operation returned a null task.

**Constraints:** This is a blocking host boundary. Callback-driven hosts use their platform synchronization
context instead. Work that explicitly suppresses context capture is responsible for returning
to the owner before accessing thread-affine resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/OwnerThreadExecution.cs#L37).
