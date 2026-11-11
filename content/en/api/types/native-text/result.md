---
title: "Result"
description: "Reference for Result in Inno.Native.Text."
uid: api.inno.native.text.32a7e292670c1cb7
kind: api
owners:
  - Inno.Native.Text
apiSurface: source-clr
contracts:
  - project.inno-native-text#native-lifetime-contract
---
# `Result`

This reference describes `Result` in `Inno.Native.Text`. Read the [shared contract](../../projects/inno-native-text.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`BackendError`](#api-4beaa07cea10bb59) | Field |
| [`BufferTooSmall`](#api-8015954522f3003f) | Field |
| [`InvalidArgument`](#api-5a78e5213e8e75d0) | Field |
| [`InvalidFont`](#api-79a4a13ec8e3223c) | Field |
| [`InvalidHandle`](#api-f3291eef250fa190) | Field |
| [`OutOfMemory`](#api-01a38a2482d49731) | Field |
| [`Success`](#api-0c55a683841b2730) | Field |
| [`UnknownError`](#api-e6432c3cdb3db9f3) | Field |

## Type declaration

<a id="api-32a7e292670c1cb7"></a>
<!-- api: T:Inno.Native.Text.Result 8d7065ce2745939640cbbbfec8c7c31b89c498f5d8ad468d92536b7a88b0f7fd -->

```csharp
public enum Inno.Native.Text.Result : uint
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L391).

## `BackendError`

<a id="api-4beaa07cea10bb59"></a>
<!-- api: F:Inno.Native.Text.Result.BackendError 20140238786a1b3aa5e647277153596e821109331eaf3956ee0ea31002408cc7 -->

```csharp
Inno.Native.Text.Result.BackendError = 6
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L399).

## `BufferTooSmall`

<a id="api-8015954522f3003f"></a>
<!-- api: F:Inno.Native.Text.Result.BufferTooSmall 1f2717c72eefa5d696c8761504baf9107601c94aa90d4160d5b909ca5a903ce3 -->

```csharp
Inno.Native.Text.Result.BufferTooSmall = 7
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L400).

## `InvalidArgument`

<a id="api-5a78e5213e8e75d0"></a>
<!-- api: F:Inno.Native.Text.Result.InvalidArgument 13318ce758e1bfb96b2b0df2edd94d1c2ac3a229e90b4b364ad6a3175af547e1 -->

```csharp
Inno.Native.Text.Result.InvalidArgument = 2
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L395).

## `InvalidFont`

<a id="api-79a4a13ec8e3223c"></a>
<!-- api: F:Inno.Native.Text.Result.InvalidFont f91ba370fd52af27e6a8f124bd3a954252ea375c287a6f94adb22e620b50842d -->

```csharp
Inno.Native.Text.Result.InvalidFont = 4
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L397).

## `InvalidHandle`

<a id="api-f3291eef250fa190"></a>
<!-- api: F:Inno.Native.Text.Result.InvalidHandle f28d5a31f1652e16ef51a2c0ef49ba28aa8740d4641937f3868d00dfe5c40d60 -->

```csharp
Inno.Native.Text.Result.InvalidHandle = 5
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L398).

## `OutOfMemory`

<a id="api-01a38a2482d49731"></a>
<!-- api: F:Inno.Native.Text.Result.OutOfMemory 0734e4bc16239ad35527cbde32b052ef7814ab195cd6561129069003db5300b1 -->

```csharp
Inno.Native.Text.Result.OutOfMemory = 3
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L396).

## `Success`

<a id="api-0c55a683841b2730"></a>
<!-- api: F:Inno.Native.Text.Result.Success 289b42e54b52b6d1ea5744a31a214f1779ec2e1140950c5bb2e6a8418ffe69cc -->

```csharp
Inno.Native.Text.Result.Success = 1
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L394).

## `UnknownError`

<a id="api-e6432c3cdb3db9f3"></a>
<!-- api: F:Inno.Native.Text.Result.UnknownError c0e2e6cc79a7110812491fc77171c72ac8ea0fef6f801e2b5bf85d386d6b4df9 -->

```csharp
Inno.Native.Text.Result.UnknownError = 0
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L393).
