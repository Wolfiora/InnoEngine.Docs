---
title: "KeyModifier"
description: "Reference for KeyModifier in Inno.Core.Input."
uid: api.inno.core.input.f0de48a27308a705
kind: api
owners:
  - Inno.Core.Input
apiSurface: source-clr
contracts:
  - project.inno-core-input#input-value-contract
---
# `KeyModifier`

This reference describes `KeyModifier` in `Inno.Core.Input`. Read the [shared contract](../../projects/inno-core-input.md#input-value-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Alt`](#api-23000daebdc38f64) | Field |
| [`Control`](#api-06761bbd7e661b62) | Field |
| [`None`](#api-1b88d9abe40f9761) | Field |
| [`Shift`](#api-d638bbb4d2f75288) | Field |
| [`Super`](#api-0727c3cb697045d7) | Field |

## Type declaration

<a id="api-f0de48a27308a705"></a>
<!-- api: T:Inno.Core.Input.KeyModifier f2f9bcd5b6a7ec816cc359a65134696ab78ec2a086ced5dfe18b46029c710bc6 -->

```csharp
public enum Inno.Core.Input.KeyModifier : int
```

Identifies the supported key modifier values for this contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L9).

## `Alt`

<a id="api-23000daebdc38f64"></a>
<!-- api: F:Inno.Core.Input.KeyModifier.Alt 4e61123c99c49be63c65ec99da8ff183dc53af472cbd1fb5a9f837616968a5ae -->

```csharp
Inno.Core.Input.KeyModifier.Alt = 1
```

The alt key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L18).

## `Control`

<a id="api-06761bbd7e661b62"></a>
<!-- api: F:Inno.Core.Input.KeyModifier.Control 126564b667973c20b93951f51a580adc9549572c4d217ff4460174806d5eb03f -->

```csharp
Inno.Core.Input.KeyModifier.Control = 2
```

The control key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L22).

## `None`

<a id="api-1b88d9abe40f9761"></a>
<!-- api: F:Inno.Core.Input.KeyModifier.None 602e73689a1774b0ef64b1d4b13f4716a732ce34157c56e1379aac25dd93aca3 -->

```csharp
Inno.Core.Input.KeyModifier.None = 0
```

The none key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L14).

## `Shift`

<a id="api-d638bbb4d2f75288"></a>
<!-- api: F:Inno.Core.Input.KeyModifier.Shift 7e858c8712655b7f1fa79fb277bfd7be967e27993b9d3abf79a314dfd1991ef4 -->

```csharp
Inno.Core.Input.KeyModifier.Shift = 4
```

The shift key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L26).

## `Super`

<a id="api-0727c3cb697045d7"></a>
<!-- api: F:Inno.Core.Input.KeyModifier.Super 145315bc89c6d4460464dd5007ff42e046d7a9ad1dfe74d3ce5bbd4682689bc1 -->

```csharp
Inno.Core.Input.KeyModifier.Super = 8
```

The super key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/KeyModifier.cs#L30).
