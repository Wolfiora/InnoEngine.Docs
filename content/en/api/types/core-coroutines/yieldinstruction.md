---
title: "YieldInstruction"
description: "Reference for YieldInstruction in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.a46d7a711104ae23
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `YieldInstruction`

This reference describes `YieldInstruction` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a141ea787b961743) | Method |

## Type declaration

<a id="api-a46d7a711104ae23"></a>
<!-- api: T:Inno.Core.Coroutines.YieldInstruction 0a41008cc97d1c1076aec0f2f1706653c468225442b1de418cbbb1db66424dde -->

```csharp
public abstract class Inno.Core.Coroutines.YieldInstruction
```

Base type for the scheduler's built-in coroutine wait instructions.

**Constraints:** Waiter creation is internal to this assembly. External callers use the supplied instruction types
or compose supported yields in an enumerator; this is not an externally implementable extension point.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/YieldInstruction.cs#L12).

## `#ctor`

<a id="api-a141ea787b961743"></a>
<!-- api: M:Inno.Core.Coroutines.YieldInstruction.#ctor da94412f5a4434c862d42a35b52cfe5fd967468f9e3c9e8ee66f3aa5c4897410 -->

```csharp
protected Inno.Core.Coroutines.YieldInstruction.YieldInstruction()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/YieldInstruction.cs#L12).
