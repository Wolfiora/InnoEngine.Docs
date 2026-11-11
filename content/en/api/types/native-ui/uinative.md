---
title: "UiNative"
description: "Reference for UiNative in Inno.Native.UI."
uid: api.inno.native.ui.425b7a996d4e627e
kind: api
owners:
  - Inno.Native.UI
apiSurface: source-clr
contracts:
  - project.inno-native-ui#abi-and-ownership-contract
---
# `UiNative`

This reference describes `UiNative` in `Inno.Native.UI`. Read the [shared contract](../../projects/inno-native-ui.md#abi-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`NativeLibraryName`](#api-c61e1003fdf1d1fe) | Field |
| [`Dispose`](#api-1115cb6aed213116) | Method |
| [`DisposeAsync`](#api-7b84366b008dee9b) | Method |
| [`FromProvider`](#api-0619901bbc44d6d3) | Method |
| [`Load`](#api-c7a126b4562aed86) | Method |
| [`IsInitialized`](#api-f353b2ebefa19b59) | Property |
| [`Raw`](#api-3909f9a7ddbc175f) | Property |

## Type declaration

<a id="api-425b7a996d4e627e"></a>
<!-- api: T:Inno.Native.UI.UiNative 059837a6d7a0fd2d5b2ed85dbbb07f414a4130d6dffc3f4fabc1b15b4a6fe815 -->

```csharp
public static class Inno.Native.UI.UiNative
```

Initializes the explicitly deployed module through the generated BGCS API.

Owns one explicitly shared context. Replacement closes the previous context; existing resource leases retain its native cleanup capability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/UiNative.cs#L8).

## `NativeLibraryName`

<a id="api-c61e1003fdf1d1fe"></a>
<!-- api: F:Inno.Native.UI.UiNative.NativeLibraryName ca36deaf0770599a057999700e22d7ee16760aca805980820fbb5b211b920a7f -->

```csharp
public const string Inno.Native.UI.UiNative.NativeLibraryName = "inno-ui"
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L18).

## `Dispose`

<a id="api-1115cb6aed213116"></a>
<!-- api: M:Inno.Native.UI.UiNative.Dispose 1de823861d2e8776b52f0e655848e7406a3f293de780c5a08fef4f90bdd18edc -->

```csharp
public static void Inno.Native.UI.UiNative.Dispose()
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L32).

## `DisposeAsync`

<a id="api-7b84366b008dee9b"></a>
<!-- api: M:Inno.Native.UI.UiNative.DisposeAsync 44577bfa81e9e30f7dc50b2736c8cab9dad3e29b73abd7640e664fd62cd2bdb6 -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.Native.UI.UiNative.DisposeAsync()
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L33).

## `FromProvider`

<a id="api-0619901bbc44d6d3"></a>
<!-- api: M:Inno.Native.UI.UiNative.FromProvider(BGCS.Runtime.INativeModuleProvider) c62c896c70834929dbdd0ff4d3856479ee285d65daf0dfa7459962c89eb4a6d0 -->

```csharp
public static void Inno.Native.UI.UiNative.FromProvider(BGCS.Runtime.INativeModuleProvider provider)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L30).

## `Load`

<a id="api-c7a126b4562aed86"></a>
<!-- api: M:Inno.Native.UI.UiNative.Load(System.String) 17aee27fd2b2d941ed3420aa03f9e1d1da03e19ff3cc3a430cdc293cdc9a380d -->

```csharp
public static void Inno.Native.UI.UiNative.Load(string libraryPath = "inno-ui")
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L31).

## `IsInitialized`

<a id="api-f353b2ebefa19b59"></a>
<!-- api: P:Inno.Native.UI.UiNative.IsInitialized f3a8f44f3b008db9dc99592cd803174ed6b9860a7cc361bc5f8a8d17f33453e2 -->

```csharp
public static bool Inno.Native.UI.UiNative.IsInitialized { get; }
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L21).

## `Raw`

<a id="api-3909f9a7ddbc175f"></a>
<!-- api: P:Inno.Native.UI.UiNative.Raw 753e15d9358c88d5f7b821e55df35e25bb05ef35e4c3d813d41c0cf5e27d05f7 -->

```csharp
public static Inno.Native.UI.UiNativeContext.RawApi Inno.Native.UI.UiNative.Raw { get; }
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/native/Inno.Native.UI/Generated/Bindings.cs#L22).
