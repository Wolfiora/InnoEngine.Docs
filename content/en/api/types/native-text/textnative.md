---
title: "TextNative"
description: "Reference for TextNative in Inno.Native.Text."
uid: api.inno.native.text.3ac6134c38063fce
kind: api
owners:
  - Inno.Native.Text
apiSurface: source-clr
contracts:
  - project.inno-native-text#native-lifetime-contract
---
# `TextNative`

This reference describes `TextNative` in `Inno.Native.Text`. Read the [shared contract](../../projects/inno-native-text.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`NativeLibraryName`](#api-28824d16509453fe) | Field |
| [`Dispose`](#api-2e1a18c806b744bb) | Method |
| [`DisposeAsync`](#api-9cd1a47fea19e5ba) | Method |
| [`FromProvider`](#api-17a2cf003208c487) | Method |
| [`Load`](#api-0c1bcb294e727fe4) | Method |
| [`IsInitialized`](#api-f1fd18df33658fd8) | Property |
| [`Raw`](#api-e11513c3828b0b7a) | Property |

## Type declaration

<a id="api-3ac6134c38063fce"></a>
<!-- api: T:Inno.Native.Text.TextNative 45c1c0ffbc1e3fe3c543ef53e11669e064481d19965440215597309b941a7f87 -->

```csharp
public static class Inno.Native.Text.TextNative
```

Initializes the explicitly deployed module through the generated BGCS API.

Owns one explicitly shared context. Replacement closes the previous context; existing resource leases retain its native cleanup capability.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/TextNative.cs#L8).

## `NativeLibraryName`

<a id="api-28824d16509453fe"></a>
<!-- api: F:Inno.Native.Text.TextNative.NativeLibraryName 788a2a3e2a23983f6fb3739c907002fb070ca34c62f9fe5ec0181f4a76eaebbb -->

```csharp
public const string Inno.Native.Text.TextNative.NativeLibraryName = "inno-text"
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L18).

## `Dispose`

<a id="api-2e1a18c806b744bb"></a>
<!-- api: M:Inno.Native.Text.TextNative.Dispose f6b08b02ce44154e8749ce49d014ec45fcc055f4b92ea42c01c8fff882161aa8 -->

```csharp
public static void Inno.Native.Text.TextNative.Dispose()
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L32).

## `DisposeAsync`

<a id="api-9cd1a47fea19e5ba"></a>
<!-- api: M:Inno.Native.Text.TextNative.DisposeAsync c449b2addf21589ad3eeb029803dd8f68b25fb74a5f6cbfc351e612d331d00ce -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.Native.Text.TextNative.DisposeAsync()
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L33).

## `FromProvider`

<a id="api-17a2cf003208c487"></a>
<!-- api: M:Inno.Native.Text.TextNative.FromProvider(BGCS.Runtime.INativeModuleProvider) f3970ec35003cf796f0422de8baaf2f51586fc9e9b531ef639f249d28bc65a79 -->

```csharp
public static void Inno.Native.Text.TextNative.FromProvider(BGCS.Runtime.INativeModuleProvider provider)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L30).

## `Load`

<a id="api-0c1bcb294e727fe4"></a>
<!-- api: M:Inno.Native.Text.TextNative.Load(System.String) f44a6c23cc942db3c15b17c6039789d0e31c87f53bbfa8f17adc06bfa898529c -->

```csharp
public static void Inno.Native.Text.TextNative.Load(string libraryPath = "inno-text")
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L31).

## `IsInitialized`

<a id="api-f1fd18df33658fd8"></a>
<!-- api: P:Inno.Native.Text.TextNative.IsInitialized b5a9476b305aa1bdce159eafc0f918f2bde60f905b6c6ff0b5b1a5a2e24f8775 -->

```csharp
public static bool Inno.Native.Text.TextNative.IsInitialized { get; }
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L21).

## `Raw`

<a id="api-e11513c3828b0b7a"></a>
<!-- api: P:Inno.Native.Text.TextNative.Raw 9ccd86a7f0c3bf8488f4b8fa0699d527b55a9eddf9a4c052c4eb09427ce9b3b8 -->

```csharp
public static Inno.Native.Text.TextNativeContext.RawApi Inno.Native.Text.TextNative.Raw { get; }
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L22).
