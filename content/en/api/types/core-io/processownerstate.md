---
title: "ProcessOwnerState"
description: "Reference for ProcessOwnerState in Inno.Core.IO."
uid: api.inno.core.io.a4c34d306c8b3c98
kind: api
owners:
  - Inno.Core.IO
apiSurface: source-clr
contracts:
  - project.inno-core-io#publication-and-ownership-contract
---
# `ProcessOwnerState`

This reference describes `ProcessOwnerState` in `Inno.Core.IO`. Read the [shared contract](../../projects/inno-core-io.md#publication-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Active`](#api-846ad5bf06cee1e3) | Field |
| [`Exited`](#api-de87ac83d742c5a5) | Field |
| [`Unknown`](#api-618f147e8fbaabb7) | Field |

## Type declaration

<a id="api-a4c34d306c8b3c98"></a>
<!-- api: T:Inno.Core.IO.ProcessOwnerState e4bb5a252ed7a55b46dcb95fd6f9e37f4ccf584e7298496f31426beeebfc7a3b -->

```csharp
public enum Inno.Core.IO.ProcessOwnerState : int
```

Describes whether an exact operating-system process lifetime can still own files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerState.cs#L6).

## `Active`

<a id="api-846ad5bf06cee1e3"></a>
<!-- api: F:Inno.Core.IO.ProcessOwnerState.Active 9250ebf74d79d28f36fb73eeae6e73cbb7dbf627bd28f89501f71556b5f8914a -->

```csharp
Inno.Core.IO.ProcessOwnerState.Active = 0
```

The matching process lifetime is still running.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerState.cs#L11).

## `Exited`

<a id="api-de87ac83d742c5a5"></a>
<!-- api: F:Inno.Core.IO.ProcessOwnerState.Exited 0bb1a037f834d7fff9b9d43172cf9c500301dc02de51a9caa59d2316a7b428fe -->

```csharp
Inno.Core.IO.ProcessOwnerState.Exited = 1
```

The process exited or its identifier now belongs to another lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerState.cs#L16).

## `Unknown`

<a id="api-618f147e8fbaabb7"></a>
<!-- api: F:Inno.Core.IO.ProcessOwnerState.Unknown 230441c073783d8f482c910eebd83a605e7b49fc4663e09024ff8bfbe195a869 -->

```csharp
Inno.Core.IO.ProcessOwnerState.Unknown = 2
```

Ownership cannot be verified; dependent files must remain protected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/5ecbbcffbd10358c754edf398408a14d4059870c/src/foundation/core/Inno.Core.IO/ProcessOwnerState.cs#L21).
