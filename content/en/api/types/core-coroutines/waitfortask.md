---
title: "WaitForTask"
description: "Reference for WaitForTask in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.2abdec6e7ff2921c
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `WaitForTask`

This reference describes `WaitForTask` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Coroutines.YieldInstruction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-72486a65d8548948) | Method |
| [`task`](#api-be17e3c47851e637) | Property |

## Type declaration

<a id="api-2abdec6e7ff2921c"></a>
<!-- api: T:Inno.Core.Coroutines.WaitForTask 1006b820c8c1e4af7cf0f5627d2abe3490e199b928738cc7a12f7797ecf97325 -->

```csharp
public sealed class Inno.Core.Coroutines.WaitForTask : Inno.Core.Coroutines.YieldInstruction
```

Waits until a task is completed.

**Parameter `task`:** The task used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForTask.cs#L12).

## `#ctor`

<a id="api-72486a65d8548948"></a>
<!-- api: M:Inno.Core.Coroutines.WaitForTask.#ctor(System.Threading.Tasks.Task) 1ed1ad00fd4523b2d5ee9d2f4d72bc5efede6dba7ad423f406f51ed0c34b8e0c -->

```csharp
public Inno.Core.Coroutines.WaitForTask.WaitForTask(System.Threading.Tasks.Task task)
```

Waits until a task is completed.

**Parameter `task`:** The task used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForTask.cs#L12).

## `task`

<a id="api-be17e3c47851e637"></a>
<!-- api: P:Inno.Core.Coroutines.WaitForTask.task 789c06112731b402f9304f977212951dc6b060924afe7de880b6f3eaa0a6ad0b -->

```csharp
public System.Threading.Tasks.Task Inno.Core.Coroutines.WaitForTask.task { get; }
```

Gets the awaited task.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForTask.cs#L17).
