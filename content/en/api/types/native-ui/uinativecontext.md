---
title: "UiNativeContext"
description: "Reference for UiNativeContext in Inno.Native.UI."
uid: api.inno.native.ui.ac337dc28ea72070
kind: api
owners:
  - Inno.Native.UI
apiSurface: source-clr
contracts:
  - project.inno-native-ui#abi-and-ownership-contract
---
# `UiNativeContext`

This reference describes `UiNativeContext` in `Inno.Native.UI`. Read the [shared contract](../../projects/inno-native-ui.md#abi-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `System.IAsyncDisposable`.

## Nested types

- [`UiNativeContext.RawApi`](uinativecontext.rawapi.md)

## Members

| Member | Kind |
| --- | --- |
| [`NativeLibraryName`](#api-5f122b63ffea322e) | Field |
| [`Dispose`](#api-13b90c296dd199c8) | Method |
| [`DisposeAsync`](#api-d830a5aaeb37e379) | Method |
| [`FromProvider`](#api-c630ec0176a9efa6) | Method |
| [`Load`](#api-ec23f0b75bb81eee) | Method |
| [`Raw`](#api-37b5e71826627620) | Property |

## Type declaration

<a id="api-ac337dc28ea72070"></a>
<!-- api: T:Inno.Native.UI.UiNativeContext d0ed8f663548a97a88d2e66aad2b0b43671ba7810bf802d46f3e97d19d49f975 -->

```csharp
public sealed class Inno.Native.UI.UiNativeContext : System.IDisposable, System.IAsyncDisposable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L46).

## `NativeLibraryName`

<a id="api-5f122b63ffea322e"></a>
<!-- api: F:Inno.Native.UI.UiNativeContext.NativeLibraryName ba88844eaca64f9f2fdfe33d65a93c28ba7ec93b9d121670d14a7460f64f6261 -->

```csharp
public const string Inno.Native.UI.UiNativeContext.NativeLibraryName = "inno-ui"
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L48).

## `Dispose`

<a id="api-13b90c296dd199c8"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.Dispose eb1922c9d7274e227da66e08383d02d2d64c6a8517045423ba60a98479f2d048 -->

```csharp
public void Inno.Native.UI.UiNativeContext.Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L225).

## `DisposeAsync`

<a id="api-d830a5aaeb37e379"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.DisposeAsync c3327ad9b6c656e338499dad745b342f38b1309c5a8925d7d851b87388273b5b -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Native.UI.UiNativeContext.DisposeAsync()
```

Performs application-defined tasks associated with freeing, releasing, or
resetting unmanaged resources asynchronously.

**Returns:** A task that represents the asynchronous dispose operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L226).

## `FromProvider`

<a id="api-c630ec0176a9efa6"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.FromProvider(BGCS.Runtime.INativeModuleProvider) a3079de76e7351bb0b37ed46f8bf906681d10ba715573b926448182453f64817 -->

```csharp
public static Inno.Native.UI.UiNativeContext Inno.Native.UI.UiNativeContext.FromProvider(BGCS.Runtime.INativeModuleProvider provider)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L223).

## `Load`

<a id="api-ec23f0b75bb81eee"></a>
<!-- api: M:Inno.Native.UI.UiNativeContext.Load(System.String) 170f231b977ed906033479647f5e5b0dcb90eee74c4126caa770813a1817b341 -->

```csharp
public static Inno.Native.UI.UiNativeContext Inno.Native.UI.UiNativeContext.Load(string libraryPath = "inno-ui")
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L224).

## `Raw`

<a id="api-37b5e71826627620"></a>
<!-- api: P:Inno.Native.UI.UiNativeContext.Raw 31262f51102093de8c3bf58612667e8d334b478d0f40c61c7f145c103b0b6560 -->

```csharp
public Inno.Native.UI.UiNativeContext.RawApi Inno.Native.UI.UiNativeContext.Raw { get; }
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L87).
