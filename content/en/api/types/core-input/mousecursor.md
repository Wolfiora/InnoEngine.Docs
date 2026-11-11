---
title: "MouseCursor"
description: "Reference for MouseCursor in Inno.Core.Input."
uid: api.inno.core.input.026f0b41f8bb1887
kind: api
owners:
  - Inno.Core.Input
apiSurface: source-clr
contracts:
  - project.inno-core-input#input-value-contract
---
# `MouseCursor`

This reference describes `MouseCursor` in `Inno.Core.Input`. Read the [shared contract](../../projects/inno-core-input.md#input-value-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Arrow`](#api-9e78ec82726a8961) | Field |
| [`Hand`](#api-d6df7b594df7a93a) | Field |
| [`None`](#api-df346b19603d4537) | Field |
| [`NotAllowed`](#api-3fc82460676573c7) | Field |
| [`ResizeAll`](#api-64d6a9feba2a5634) | Field |
| [`ResizeEW`](#api-8aa7035795a11187) | Field |
| [`ResizeNESW`](#api-61d39ddf9c7a19f9) | Field |
| [`ResizeNS`](#api-1b18cb3d6f92d300) | Field |
| [`ResizeNWSE`](#api-e1623b9d534c0657) | Field |
| [`TextInput`](#api-f1a56f564ae8caff) | Field |

## Type declaration

<a id="api-026f0b41f8bb1887"></a>
<!-- api: T:Inno.Core.Input.MouseCursor 7ef61aef518f37c54894212bb399f83993ff09b35e18b0a711ae6e1d90ccded3 -->

```csharp
public enum Inno.Core.Input.MouseCursor : int
```

Identifies the supported mouse cursor values for this contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L6).

## `Arrow`

<a id="api-9e78ec82726a8961"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.Arrow 8c7c34e19b5fcfaf7cac4ed38b9964abc6e0dd265ddc970912fde3759d4fd709 -->

```csharp
Inno.Core.Input.MouseCursor.Arrow = 0
```

The standard arrow pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L16).

## `Hand`

<a id="api-d6df7b594df7a93a"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.Hand 85d804cad009fe8fc52e7f373fa1cf0f32b7241acd7b3fb4c6cfdedcdcf926ab -->

```csharp
Inno.Core.Input.MouseCursor.Hand = 7
```

A hand pointer for an interactive target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L44).

## `None`

<a id="api-df346b19603d4537"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.None 4ff9ce909399a710f17399c11dfc0f2f46754713488d9fb867a08e7bc8073b79 -->

```csharp
Inno.Core.Input.MouseCursor.None = -1
```

No concrete cursor shape; the consuming host defines visibility behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L11).

## `NotAllowed`

<a id="api-3fc82460676573c7"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.NotAllowed cfeddc1c64eb28d70c6d17ae648b4b8495144c57478e52fc768b5f3d470d2002 -->

```csharp
Inno.Core.Input.MouseCursor.NotAllowed = 8
```

A cursor indicating that an operation is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L48).

## `ResizeAll`

<a id="api-64d6a9feba2a5634"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.ResizeAll 664d9031e5c7744fa3716c98e72b533e11b8730634477ccc373d702f18b9c78b -->

```csharp
Inno.Core.Input.MouseCursor.ResizeAll = 2
```

An all-direction move or resize cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L24).

## `ResizeEW`

<a id="api-8aa7035795a11187"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.ResizeEW 706a8983f7eb34b1e14d4ac0543754989e3f0a33851d31c8a71631d97fc8f327 -->

```csharp
Inno.Core.Input.MouseCursor.ResizeEW = 4
```

An east-west resize cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L32).

## `ResizeNESW`

<a id="api-61d39ddf9c7a19f9"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.ResizeNESW aa70462e29c40c5e057f03d07e5caac3c92101278b52fea096f768b9a9db4b93 -->

```csharp
Inno.Core.Input.MouseCursor.ResizeNESW = 5
```

A northeast-southwest diagonal resize cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L36).

## `ResizeNS`

<a id="api-1b18cb3d6f92d300"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.ResizeNS 6d52f4a2a225ee8820cb7a31e4b0d9351c222cf7b184c29a3fb646cc0d5e0296 -->

```csharp
Inno.Core.Input.MouseCursor.ResizeNS = 3
```

A north-south resize cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L28).

## `ResizeNWSE`

<a id="api-e1623b9d534c0657"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.ResizeNWSE 419f95b699ae4d885eb7c5b77da6e0adff61a63181bd6fe413d55a30c3efe3bf -->

```csharp
Inno.Core.Input.MouseCursor.ResizeNWSE = 6
```

A northwest-southeast diagonal resize cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L40).

## `TextInput`

<a id="api-f1a56f564ae8caff"></a>
<!-- api: F:Inno.Core.Input.MouseCursor.TextInput a358e751f78c75a6248ca730065ae0fffcf734ec879e75c827ef7a07182f2188 -->

```csharp
Inno.Core.Input.MouseCursor.TextInput = 1
```

The text insertion cursor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Input/MouseCursor.cs#L20).
