---
title: "Log"
description: "Reference for Log in Inno.Core.Logging."
uid: api.inno.core.logging.9b07728a634a751d
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `Log`

This reference describes `Log` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Debug`](#api-ca4f0003e3469b13) | Method |
| [`Debug`](#api-7fb0f9e4cbd350bc) | Method |
| [`Error`](#api-9cd63c0268113045) | Method |
| [`Error`](#api-c04c72df25ffc608) | Method |
| [`Fatal`](#api-a00464c5020a5ae7) | Method |
| [`Fatal`](#api-7854baa5013f272e) | Method |
| [`Info`](#api-b6330aacfaf3ea5b) | Method |
| [`Info`](#api-e91e85f3a21de7d9) | Method |
| [`Warn`](#api-28113d54bdaa391b) | Method |
| [`Warn`](#api-8f84cac38467e804) | Method |

## Type declaration

<a id="api-9b07728a634a751d"></a>
<!-- api: T:Inno.Core.Logging.Log 6ec393e54bd6780c1a507dc2c7f02eeb2c7b6fd8841aa278e9c68405af5513d3 -->

```csharp
public static class Inno.Core.Logging.Log
```

Writes logs with compiler-provided locations and explicitly declared type ownership across managed deployments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L14).

## `Debug`

<a id="api-ca4f0003e3469b13"></a>
<!-- api: M:Inno.Core.Logging.Log.Debug(System.Type,System.Object,System.String,System.Int32) 86c1a066f19fc820cd5ce46faec9818f04b42d2111f68a1cd8936e31ba2a419a -->

```csharp
public static void Inno.Core.Logging.Log.Debug(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a debug-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L41).

## `Debug`

<a id="api-7fb0f9e4cbd350bc"></a>
<!-- api: M:Inno.Core.Logging.Log.Debug(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 2173e18404820fd1bbf3e6d7e12453dc4de727265fde6cd820ee27897d21f015 -->

```csharp
public static void Inno.Core.Logging.Log.Debug(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
```

Writes a formatted debug-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L77).

## `Error`

<a id="api-9cd63c0268113045"></a>
<!-- api: M:Inno.Core.Logging.Log.Error(System.Type,System.Object,System.String,System.Int32) 3ddc6ae77e2ed81c3a345b13d8dbec0e5784e75e487d730a82ff2dae6ae90b50 -->

```csharp
public static void Inno.Core.Logging.Log.Error(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a error-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L237).

## `Error`

<a id="api-c04c72df25ffc608"></a>
<!-- api: M:Inno.Core.Logging.Log.Error(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 7faadcfdce988cd5721e343ab044291516b215e1d7ae752f1a951deebd171526 -->

```csharp
public static void Inno.Core.Logging.Log.Error(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
```

Writes a formatted error-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L272).

## `Fatal`

<a id="api-a00464c5020a5ae7"></a>
<!-- api: M:Inno.Core.Logging.Log.Fatal(System.Type,System.Object,System.String,System.Int32) 8257c87ff7616d165b4a9114b9f200efa4517aa6791935b2518f323ed16b19b6 -->

```csharp
public static void Inno.Core.Logging.Log.Fatal(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a fatal-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L302).

## `Fatal`

<a id="api-7854baa5013f272e"></a>
<!-- api: M:Inno.Core.Logging.Log.Fatal(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 73b727aa1000fbdfc430d219a826f52284ac0ac30a905f0bedf98b253e2ab59a -->

```csharp
public static void Inno.Core.Logging.Log.Fatal(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
```

Writes a formatted fatal-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L337).

## `Info`

<a id="api-b6330aacfaf3ea5b"></a>
<!-- api: M:Inno.Core.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32) 6973d41dce7a2039b9c4edc61fc475fb02558218d71091de37ae04aab59312d4 -->

```csharp
public static void Inno.Core.Logging.Log.Info(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a info-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L107).

## `Info`

<a id="api-e91e85f3a21de7d9"></a>
<!-- api: M:Inno.Core.Logging.Log.Info(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 30069fce7b290c56b54171b673c789f1101af215ffaa061beef49c0470c5733c -->

```csharp
public static void Inno.Core.Logging.Log.Info(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
```

Writes a formatted info-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L142).

## `Warn`

<a id="api-28113d54bdaa391b"></a>
<!-- api: M:Inno.Core.Logging.Log.Warn(System.Type,System.Object,System.String,System.Int32) 4265eb9c6f9400ff910377f23fb0125fea37fd67ad54e3bdf1e89a8d4bf36900 -->

```csharp
public static void Inno.Core.Logging.Log.Warn(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a warn-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L172).

## `Warn`

<a id="api-8f84cac38467e804"></a>
<!-- api: M:Inno.Core.Logging.Log.Warn(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) dd7282484faf2e43475a04bb0d8378e6b6dd8cc068a322e0c0bdd3803c780948 -->

```csharp
public static void Inno.Core.Logging.Log.Warn(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
```

Writes a formatted warn-level message with its source location.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `message`:** The composite format string or final message.

**Parameter `arguments`:** Optional composite-format arguments; null preserves the message verbatim.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.FormatException`:** The composite format string is invalid for the supplied arguments.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Log.cs#L207).
