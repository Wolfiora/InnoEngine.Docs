---
title: "Logger"
description: "Reference for Logger in Inno.Core.Logging."
uid: api.inno.core.logging.8e9bde170830a7e6
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `Logger`

This reference describes `Logger` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Write`](#api-712aa18b0da47632) | Method |

## Type declaration

<a id="api-8e9bde170830a7e6"></a>
<!-- api: T:Inno.Core.Logging.Logger 7b898fbcd013600b61e274cfc38e6327e03d9c31cb9e7bd455af45b6c1f70293 -->

```csharp
public sealed class Inno.Core.Logging.Logger
```

Writes category-bound entries through one explicitly owned log router.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Logger.cs#L14).

## `Write`

<a id="api-712aa18b0da47632"></a>
<!-- api: M:Inno.Core.Logging.Logger.Write(Inno.Core.Logging.LogLevel,System.String,System.Collections.Generic.IReadOnlyList{System.Object},System.String,System.Int32) 206b20287c1d3cd9f3361fedc19a18189f631706a2b0854de2d90e83ca0d0bdf -->

```csharp
public void Inno.Core.Logging.Logger.Write(Inno.Core.Logging.LogLevel level, string message, System.Collections.Generic.IReadOnlyList<object?>? arguments = null, string filePath = "", int lineNumber = 0)
```

Writes one formatted entry with source information captured from the caller.

**Parameter `level`:** The severity assigned to the entry.

**Parameter `message`:** The composite format string or final message text.

**Parameter `arguments`:** Optional composite-format arguments.

**Throws `System.ArgumentException`:** Thrown when `message` is empty.

**Throws `System.ObjectDisposedException`:** Thrown after the owning router has been disposed.

**Parameter `filePath`:** Source file supplied by the caller information attribute.

**Parameter `lineNumber`:** Source line supplied by the caller information attribute.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/Logger.cs#L57).
