---
title: "WaitForFrames"
description: "Reference for WaitForFrames in Inno.Core.Coroutines."
uid: api.inno.core.coroutines.d29db1a074e6f9ee
kind: api
owners:
  - Inno.Core.Coroutines
apiSurface: source-clr
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
---
# `WaitForFrames`

This reference describes `WaitForFrames` in `Inno.Core.Coroutines`. Read the [shared contract](../../projects/inno-core-coroutines.md#execution-and-release-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Core.Coroutines.YieldInstruction`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-ef2209b8b2d28bc9) | Method |
| [`frames`](#api-3eecbdde92bcc2e1) | Property |

## Type declaration

<a id="api-d29db1a074e6f9ee"></a>
<!-- api: T:Inno.Core.Coroutines.WaitForFrames 502ba5cbfa62beae5f091f9204c9c746d2ee01a3ddc2bbeded6697aec38cc272 -->

```csharp
public sealed class Inno.Core.Coroutines.WaitForFrames : Inno.Core.Coroutines.YieldInstruction
```

Waits for a fixed number of frames.

**Parameter `frames`:** The frames used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForFrames.cs#L9).

## `#ctor`

<a id="api-ef2209b8b2d28bc9"></a>
<!-- api: M:Inno.Core.Coroutines.WaitForFrames.#ctor(System.Int32) 1f7c3fcfcbf9838d999bcb866a5f7e01290e414b52ea5c9e2d7ea86d0f78e406 -->

```csharp
public Inno.Core.Coroutines.WaitForFrames.WaitForFrames(int frames)
```

Waits for a fixed number of frames.

**Parameter `frames`:** The frames used to initialize this instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForFrames.cs#L9).

## `frames`

<a id="api-3eecbdde92bcc2e1"></a>
<!-- api: P:Inno.Core.Coroutines.WaitForFrames.frames d6764184eabaf45a3bfab59f9469bc1b53340f993f2e0296027c330a44bbba34 -->

```csharp
public int Inno.Core.Coroutines.WaitForFrames.frames { get; }
```

Gets the configured frame count.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0a857166e14c83e44feb557768cb9d01d4383135/src/foundation/core/Inno.Core.Coroutines/YieldInstructions/WaitForFrames.cs#L14).
