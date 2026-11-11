---
title: "RetirementTimeoutException"
description: "Reference for RetirementTimeoutException in Inno.Core.Execution."
uid: api.inno.core.execution.f0cc9e9e1c1c07d0
kind: api
owners:
  - Inno.Core.Execution
apiSurface: source-clr
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# `RetirementTimeoutException`

This reference describes `RetirementTimeoutException` in `Inno.Core.Execution`. Read the [shared contract](../../projects/inno-core-execution.md#lifetime-and-retirement) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Execution.RetirementPendingException`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-88b0277c041bf6a5) | Method |

## Type declaration

<a id="api-f0cc9e9e1c1c07d0"></a>
<!-- api: T:Inno.Core.Execution.RetirementTimeoutException 4cf7021e8beba7e961e45f6eeffac13cafe1034625b13463f1849a339e706c30 -->

```csharp
public sealed class Inno.Core.Execution.RetirementTimeoutException : Inno.Core.Execution.RetirementPendingException
```

Reports an expired retirement deadline without granting permission to release dependent resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementTimeoutException.cs#L8).

## `#ctor`

<a id="api-88b0277c041bf6a5"></a>
<!-- api: M:Inno.Core.Execution.RetirementTimeoutException.#ctor(System.String,System.Exception) 7744bd1a237ba6bc75c5273e5798d0b1dd76427fe0dfdc0030422550c40b9d6a -->

```csharp
public Inno.Core.Execution.RetirementTimeoutException.RetirementTimeoutException(string message, System.Exception? innerException = null)
```

Creates a terminal retirement failure whose owner must remain retained until host shutdown.

**Parameter `message`:** The owner and unfinished work that exceeded the deadline.

**Parameter `innerException`:** The complete failure that prevented retirement, or null when no underlying exception is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Execution/RetirementTimeoutException.cs#L19).
