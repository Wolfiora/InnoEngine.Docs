---
title: "KeyCode"
description: "Reference for KeyCode in Inno.Core.Input."
uid: api.inno.core.input.runtime-script.9944754d039ce9bb
kind: api
owners:
  - Inno.Core.Input
apiSurface: runtime-script
contracts:
  - project.inno-core-input#input-value-contract
  - manual.scripting.use-script-api
---
# `KeyCode`

This reference describes `KeyCode` in `Inno.Core.Input`. Read the [shared contract](../../projects/inno-core-input.md#input-value-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Values`](member-values-72650e184e4e7c96.md) | 96 declarations |

## Type declaration

<a id="api-9944754d039ce9bb"></a>
<!-- api: T:InnoEngine.Input.KeyCode dd7ddf28bd5528467e4777bc2b71907cdaefc61d014346150f8935bb462ec0a7 -->

```csharp
public enum InnoEngine.Input.KeyCode : int
```

Represents a backend-neutral physical key used by runtime input and editor shortcut contracts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyCode.cs#L6).
