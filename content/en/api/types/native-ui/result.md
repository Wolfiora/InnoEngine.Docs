---
title: "Result"
description: "Reference for Result in Inno.Native.UI."
uid: api.inno.native.ui.9f9ba524814c9b04
kind: api
owners:
  - Inno.Native.UI
apiSurface: source-clr
contracts:
  - project.inno-native-ui#abi-and-ownership-contract
---
# `Result`

This reference describes `Result` in `Inno.Native.UI`. Read the [shared contract](../../projects/inno-native-ui.md#abi-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`BackendError`](#api-19ff102aca8b09cd) | Field |
| [`BufferTooSmall`](#api-2d0397ea5a753974) | Field |
| [`InvalidArgument`](#api-74b18616f0b88211) | Field |
| [`InvalidHandle`](#api-ef365a894eb0e71a) | Field |
| [`NotFound`](#api-262c75b0184500df) | Field |
| [`OutOfMemory`](#api-62bdc53d4fb303a4) | Field |
| [`Success`](#api-9daaf069fb747de5) | Field |
| [`UnknownError`](#api-9b85460337e65c4c) | Field |

## Type declaration

<a id="api-9f9ba524814c9b04"></a>
<!-- api: T:Inno.Native.UI.Result ca8cb21780d4dad4374614d0ef430a99f52d548fbae496a17ebd34b6c2d84cba -->

```csharp
public enum Inno.Native.UI.Result : uint
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L814).

## `BackendError`

<a id="api-19ff102aca8b09cd"></a>
<!-- api: F:Inno.Native.UI.Result.BackendError 1559fd2c6838053a2b33bcc9f808d4f620196a7d1941b4ac6af039c72014f36b -->

```csharp
Inno.Native.UI.Result.BackendError = 5
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L821).

## `BufferTooSmall`

<a id="api-2d0397ea5a753974"></a>
<!-- api: F:Inno.Native.UI.Result.BufferTooSmall 14958e82a98b446a41372a126483e550efe39af27129db4f22d6ad22af64e5e0 -->

```csharp
Inno.Native.UI.Result.BufferTooSmall = 6
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L822).

## `InvalidArgument`

<a id="api-74b18616f0b88211"></a>
<!-- api: F:Inno.Native.UI.Result.InvalidArgument ff1078b4fd7d177569db37c40bd65afbc717e2923118d014494d5e6622854e15 -->

```csharp
Inno.Native.UI.Result.InvalidArgument = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L818).

## `InvalidHandle`

<a id="api-ef365a894eb0e71a"></a>
<!-- api: F:Inno.Native.UI.Result.InvalidHandle 544b578344a69170083194cf5ddfaddbe7402418481aeb16d934d008eb1640f1 -->

```csharp
Inno.Native.UI.Result.InvalidHandle = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L820).

## `NotFound`

<a id="api-262c75b0184500df"></a>
<!-- api: F:Inno.Native.UI.Result.NotFound f0b39b380ca168385c18d83a89f3bfa37b81e89715115e56603dbc20bd879eed -->

```csharp
Inno.Native.UI.Result.NotFound = 7
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L823).

## `OutOfMemory`

<a id="api-62bdc53d4fb303a4"></a>
<!-- api: F:Inno.Native.UI.Result.OutOfMemory 35bd52db13510a8ecf1345c5a836c0b2ea1fbad91417fa4b5cb9c72861094b87 -->

```csharp
Inno.Native.UI.Result.OutOfMemory = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L819).

## `Success`

<a id="api-9daaf069fb747de5"></a>
<!-- api: F:Inno.Native.UI.Result.Success 657b650eb2082b649d24828b10619b2f9d82ae3a1932f1b5f75018ff348a57f9 -->

```csharp
Inno.Native.UI.Result.Success = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L817).

## `UnknownError`

<a id="api-9b85460337e65c4c"></a>
<!-- api: F:Inno.Native.UI.Result.UnknownError f1999b3df2587ffec0ec09b245b2be6bd04f6e32e1c4cf4e3cb15d9added455f -->

```csharp
Inno.Native.UI.Result.UnknownError = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L816).
