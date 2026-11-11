---
title: "TextNativeContext"
description: "Reference for TextNativeContext in Inno.Native.Text."
uid: api.inno.native.text.4ffae5ad3bfc2be7
kind: api
owners:
  - Inno.Native.Text
apiSurface: source-clr
contracts:
  - project.inno-native-text#native-lifetime-contract
---
# `TextNativeContext`

This reference describes `TextNativeContext` in `Inno.Native.Text`. Read the [shared contract](../../projects/inno-native-text.md#native-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`, `System.IAsyncDisposable`.

## Nested types

- [`TextNativeContext.RawApi`](textnativecontext.rawapi.md)

## Members

| Member | Kind |
| --- | --- |
| [`NativeLibraryName`](#api-9b750a12a3d8966d) | Field |
| [`Dispose`](#api-204d098d7d02478d) | Method |
| [`DisposeAsync`](#api-25ee478949eace35) | Method |
| [`FromProvider`](#api-b4c84101fe763b86) | Method |
| [`Load`](#api-84537a39be6ff0ec) | Method |
| [`Raw`](#api-133ced020633ee00) | Property |

## Type declaration

<a id="api-4ffae5ad3bfc2be7"></a>
<!-- api: T:Inno.Native.Text.TextNativeContext b270e229893370624b1467da5f60eafbd09bfd791cef1e31e3e6fec138b4a28c -->

```csharp
public sealed class Inno.Native.Text.TextNativeContext : System.IDisposable, System.IAsyncDisposable
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L46).

## `NativeLibraryName`

<a id="api-9b750a12a3d8966d"></a>
<!-- api: F:Inno.Native.Text.TextNativeContext.NativeLibraryName 855bdeae738fa37a5ff85a7d711082ffdb6c352d5b389ae166d1efe77a609ea6 -->

```csharp
public const string Inno.Native.Text.TextNativeContext.NativeLibraryName = "inno-text"
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L48).

## `Dispose`

<a id="api-204d098d7d02478d"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.Dispose ec1ab280297c5ccb396e236e61da8ecaf33c1b0d602e5216811755c665229f8b -->

```csharp
public void Inno.Native.Text.TextNativeContext.Dispose()
```

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L137).

## `DisposeAsync`

<a id="api-25ee478949eace35"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.DisposeAsync d3b646055c0007c8e68cbb98172c74510f4cbdea15a565cefb456d97ad7299be -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Native.Text.TextNativeContext.DisposeAsync()
```

Performs application-defined tasks associated with freeing, releasing, or
resetting unmanaged resources asynchronously.

**Returns:** A task that represents the asynchronous dispose operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L138).

## `FromProvider`

<a id="api-b4c84101fe763b86"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.FromProvider(BGCS.Runtime.INativeModuleProvider) e7a0cf1b91f8a1d052353b609e73c1a306c97561f531942c7909f88451806c59 -->

```csharp
public static Inno.Native.Text.TextNativeContext Inno.Native.Text.TextNativeContext.FromProvider(BGCS.Runtime.INativeModuleProvider provider)
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L135).

## `Load`

<a id="api-84537a39be6ff0ec"></a>
<!-- api: M:Inno.Native.Text.TextNativeContext.Load(System.String) 81e925a99d81448871796f4e5128f887d42cee7a97662ebf2c92b32661ed45d5 -->

```csharp
public static Inno.Native.Text.TextNativeContext Inno.Native.Text.TextNativeContext.Load(string libraryPath = "inno-text")
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L136).

## `Raw`

<a id="api-133ced020633ee00"></a>
<!-- api: P:Inno.Native.Text.TextNativeContext.Raw 78e81000f40fad6045b08018e71c4464ff03f3811b6226d226f97283876331aa -->

```csharp
public Inno.Native.Text.TextNativeContext.RawApi Inno.Native.Text.TextNativeContext.Raw { get; }
```


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/backends/Text/native/Inno.Native.Text/Generated/Bindings.cs#L60).
