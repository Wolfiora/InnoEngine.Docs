---
title: "RetirementPendingException"
description: "Reference for RetirementPendingException in Inno.Core.Execution."
uid: api.inno.core.execution.4aa08895e340a7e1
kind: api
owners:
  - Inno.Core.Execution
apiSurface: source-clr
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# `RetirementPendingException`

This reference describes `RetirementPendingException` in `Inno.Core.Execution`. Read the [shared contract](../../projects/inno-core-execution.md#lifetime-and-retirement) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.InvalidOperationException`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3bcb75c6ae3ddb32) | Method |
| [`CollectCompletedFailures`](#api-825d0444888d4d0d) | Method |
| [`Find`](#api-3ecd427a3209f82d) | Method |

## Type declaration

<a id="api-4aa08895e340a7e1"></a>
<!-- api: T:Inno.Core.Execution.RetirementPendingException d8f8bbef8568b2918ac661c8c8adc37cd21ffdaddd14aafe4c938d7fab6aeb06 -->

```csharp
public class Inno.Core.Execution.RetirementPendingException : System.InvalidOperationException
```

Reports that cancellation has begun but the owner must retain its dependencies until work drains.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementPendingException.cs#L9).

## `#ctor`

<a id="api-3bcb75c6ae3ddb32"></a>
<!-- api: M:Inno.Core.Execution.RetirementPendingException.#ctor(System.String,System.Exception) b8945dbc63c41f163521dd37438749a9b1541226c9508561fab068fe58d8921b -->

```csharp
public Inno.Core.Execution.RetirementPendingException.RetirementPendingException(string message, System.Exception? innerException = null)
```

Creates a retryable retirement barrier for an owner with unfinished work.

**Parameter `message`:** The owner and work preventing synchronous release.

**Parameter `innerException`:** The original retirement failure, including any contextual wrappers, or null when there is no cause.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementPendingException.cs#L20).

## `CollectCompletedFailures`

<a id="api-825d0444888d4d0d"></a>
<!-- api: M:Inno.Core.Execution.RetirementPendingException.CollectCompletedFailures(System.Exception,System.Collections.Generic.ICollection{System.Exception}) 5a2adc805b34f92785fff52f0be5f53f35b0c4fed5b4567fe493c93f86b767af -->

```csharp
public static void Inno.Core.Execution.RetirementPendingException.CollectCompletedFailures(System.Exception exception, System.Collections.Generic.ICollection<System.Exception> failures)
```

Retains ordinary failure branches across pending retries without recording transient pending signals as completed work.

**Parameter `exception`:** The original exception tree reported by a retirement attempt.

**Parameter `failures`:** The owner's failure collection; existing exception instances are not added twice.

**Throws `System.ArgumentNullException`:** The exception or collection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementPendingException.cs#L69).

## `Find`

<a id="api-3ecd427a3209f82d"></a>
<!-- api: M:Inno.Core.Execution.RetirementPendingException.Find(System.Exception) 12ec8febe8d7cbfa36c9820a2ea88f27f290b648277827c0e9e672e488adde51 -->

```csharp
public static Inno.Core.Execution.RetirementPendingException? Inno.Core.Execution.RetirementPendingException.Find(System.Exception exception)
```

Finds unfinished retirement in an exception tree without discarding its contextual or sibling failures.

**Parameter `exception`:** The exception to classify, including aggregate and ordinary inner-exception wrappers.

**Returns:** A nested timeout when present, otherwise the first pending signal, or null when retirement is not pending.
Callers must propagate and retain the original exception rather than replacing it with this classification.

**Throws `System.ArgumentNullException`:** The exception is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementPendingException.cs#L38).
