---
title: "IInputService"
description: "Reference for IInputService in Inno.Input."
uid: api.inno.input.runtime-script.5f26422922a4406f
kind: api
owners:
  - Inno.Input
apiSurface: runtime-script
contracts:
  - project.inno-input#execution-and-ownership-contract
  - manual.scripting.use-script-api
---
# `IInputService`

This reference describes `IInputService` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`snapshot`](#api-de9ce6dd3fdef7f0) | Property |

## Type declaration

<a id="api-5f26422922a4406f"></a>
<!-- api: T:InnoEngine.Input.IInputService 91e4136bd3c3ca53b59efa22ab88200eb2d6e49515c8457b2c6a61e0abc0b87b -->

```csharp
public interface InnoEngine.Input.IInputService
```

Exposes the current immutable input snapshot to runtime systems and scripts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/IInputService.cs#L6).

## `snapshot`

<a id="api-de9ce6dd3fdef7f0"></a>
<!-- api: P:InnoEngine.Input.IInputService.snapshot 261c55fb521b4af8713b2bc8072b6fcf89a0dd72564015f0d86e3bd25d755649 -->

```csharp
InnoEngine.Input.InputSnapshot InnoEngine.Input.IInputService.snapshot { get; }
```

Gets the snapshot captured at the current frame boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/input/Inno.Input/IInputService.cs#L11).
