---
title: "KeyModifier"
description: "Reference for KeyModifier in Inno.Core.Input."
uid: api.inno.core.input.runtime-script.fcd8dfcb9f8a61ad
kind: api
owners:
  - Inno.Core.Input
apiSurface: runtime-script
contracts:
  - project.inno-core-input#input-value-contract
  - manual.scripting.use-script-api
---
# `KeyModifier`

This reference describes `KeyModifier` in `Inno.Core.Input`. Read the [shared contract](../../projects/inno-core-input.md#input-value-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Alt`](#api-cb24a5afd399754b) | Field |
| [`Control`](#api-b578b6c00fb508ef) | Field |
| [`None`](#api-c988ef7b281dde5d) | Field |
| [`Shift`](#api-6b847205a63f5ad4) | Field |
| [`Super`](#api-975a201b4b1d59c0) | Field |

## Type declaration

<a id="api-fcd8dfcb9f8a61ad"></a>
<!-- api: T:InnoEngine.Input.KeyModifier 5230871165111f196ebd01e018631b1d44f41c7c649d6d2fe00d0bb43c196a7c -->

```csharp
public enum InnoEngine.Input.KeyModifier : int
```

Identifies the supported key modifier values for this contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L9).

## `Alt`

<a id="api-cb24a5afd399754b"></a>
<!-- api: F:InnoEngine.Input.KeyModifier.Alt a36d39448bfb92487ce099710b99454888765eb824275ba9e57f0a8c8bf6892d -->

```csharp
InnoEngine.Input.KeyModifier.Alt = 1
```

The alt key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L18).

## `Control`

<a id="api-b578b6c00fb508ef"></a>
<!-- api: F:InnoEngine.Input.KeyModifier.Control d5aec9b84bb5fe3f128a288123e3c482244c0ee8df5122ed9a6d8bd105f37187 -->

```csharp
InnoEngine.Input.KeyModifier.Control = 2
```

The control key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L22).

## `None`

<a id="api-c988ef7b281dde5d"></a>
<!-- api: F:InnoEngine.Input.KeyModifier.None c057d98a25688fbbd26615dac964873bc2be5d1c8855018a926edabf68629dc3 -->

```csharp
InnoEngine.Input.KeyModifier.None = 0
```

The none key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L14).

## `Shift`

<a id="api-6b847205a63f5ad4"></a>
<!-- api: F:InnoEngine.Input.KeyModifier.Shift b86010f89060408e12e99e4307ba841180d2a5f2c3cc0b5efeb30d3afb952fa5 -->

```csharp
InnoEngine.Input.KeyModifier.Shift = 4
```

The shift key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L26).

## `Super`

<a id="api-975a201b4b1d59c0"></a>
<!-- api: F:InnoEngine.Input.KeyModifier.Super 01f651fbd3a7931116853de76207bcd096d5822f613774d5e2eabe030f79c36e -->

```csharp
InnoEngine.Input.KeyModifier.Super = 8
```

The super key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L30).
