---
title: "Log"
description: "Reference for Log in Inno.Core.Logging."
uid: api.inno.core.logging.runtime-script.9a2b14a7cb92b182
kind: api
owners:
  - Inno.Core.Logging
apiSurface: runtime-script
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
  - manual.scripting.use-script-api
---
# `Log`

This reference describes `Log` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Debug`](#api-225befe9e6b87def) | Method |
| [`Debug`](#api-03a76faf681bfc3d) | Method |
| [`Error`](#api-ce633e5a8c6436b3) | Method |
| [`Error`](#api-27bdddf88e26a637) | Method |
| [`Fatal`](#api-ec227ee66fe81ee0) | Method |
| [`Fatal`](#api-edf5c461e7faf88f) | Method |
| [`Info`](#api-3d405ffa1d5c0d86) | Method |
| [`Info`](#api-49c733a795b2367d) | Method |
| [`Warn`](#api-6f41da6d254e9e15) | Method |
| [`Warn`](#api-eb4ce5e46df5cd9f) | Method |

## Type declaration

<a id="api-9a2b14a7cb92b182"></a>
<!-- api: T:InnoEngine.Logging.Log 4b5c7f0b6788f78caddd74d5d229a8b907eebd5455fe66963e6523bcb707f59c -->

```csharp
public static class InnoEngine.Logging.Log
```

Writes logs with compiler-provided locations and explicitly declared type ownership across managed deployments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L14).

## `Debug`

<a id="api-225befe9e6b87def"></a>
<!-- api: M:InnoEngine.Logging.Log.Debug(System.Type,System.Object,System.String,System.Int32) bbfc2085ffc4892f244f2b195bdb5f2e5f1ce6c161fc31f3643018b1d273a6af -->

```csharp
public static void InnoEngine.Logging.Log.Debug(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a debug-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L41).

## `Debug`

<a id="api-03a76faf681bfc3d"></a>
<!-- api: M:InnoEngine.Logging.Log.Debug(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) bc644ccf64c8ff6d583831bbac1482d3b49a5168c6be8948cd8ac3e0ec809ef4 -->

```csharp
public static void InnoEngine.Logging.Log.Debug(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L77).

## `Error`

<a id="api-ce633e5a8c6436b3"></a>
<!-- api: M:InnoEngine.Logging.Log.Error(System.Type,System.Object,System.String,System.Int32) 47111010d1d9e073a9e21b1a0f3a43f7685f6af38019e9a30726ab52cc8c0a69 -->

```csharp
public static void InnoEngine.Logging.Log.Error(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a error-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L237).

## `Error`

<a id="api-27bdddf88e26a637"></a>
<!-- api: M:InnoEngine.Logging.Log.Error(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 6c5224478cece9884021430be1f007265e92ccf10e1c03df0eadc07c356c5543 -->

```csharp
public static void InnoEngine.Logging.Log.Error(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L272).

## `Fatal`

<a id="api-ec227ee66fe81ee0"></a>
<!-- api: M:InnoEngine.Logging.Log.Fatal(System.Type,System.Object,System.String,System.Int32) c6477a8e4f75e1498d0308c7230a0bc46df7b2b4747766d8ef5e9a5495318f73 -->

```csharp
public static void InnoEngine.Logging.Log.Fatal(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a fatal-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L302).

## `Fatal`

<a id="api-edf5c461e7faf88f"></a>
<!-- api: M:InnoEngine.Logging.Log.Fatal(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 87d03e7a05f2f0380cb7336667226a861c5073a835c02bceb655aca23696c5c4 -->

```csharp
public static void InnoEngine.Logging.Log.Fatal(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L337).

## `Info`

<a id="api-3d405ffa1d5c0d86"></a>
<!-- api: M:InnoEngine.Logging.Log.Info(System.Type,System.Object,System.String,System.Int32) 374a4c3fb1aa115d866518b1f1057267cb02caca9da7a607fa2c49c61b58dc81 -->

```csharp
public static void InnoEngine.Logging.Log.Info(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a info-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L107).

## `Info`

<a id="api-49c733a795b2367d"></a>
<!-- api: M:InnoEngine.Logging.Log.Info(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 4846e04b3d03003051ba7c3a2db66e281d5d640eb0f36ea8ea347be15e07f913 -->

```csharp
public static void InnoEngine.Logging.Log.Info(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L142).

## `Warn`

<a id="api-6f41da6d254e9e15"></a>
<!-- api: M:InnoEngine.Logging.Log.Warn(System.Type,System.Object,System.String,System.Int32) 1f01a86705a6a35fcf4ac31814b9fa097466b2e7ac825e29275b3664588b9c31 -->

```csharp
public static void InnoEngine.Logging.Log.Warn(System.Type sourceType, object? obj, string filePath = "", int lineNumber = 0)
```

Writes a warn-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Throws `System.ArgumentNullException`:** The source type is null.

**Throws `System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L172).

## `Warn`

<a id="api-eb4ce5e46df5cd9f"></a>
<!-- api: M:InnoEngine.Logging.Log.Warn(System.Type,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 361dbbd968a9e1545bdad027891914dd00a5ab36b315100f581823a9fdc5db29 -->

```csharp
public static void InnoEngine.Logging.Log.Warn(System.Type sourceType, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments, string filePath = "", int lineNumber = 0)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Logging/Log.cs#L207).
