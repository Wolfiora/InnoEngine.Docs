---
title: "ILogSink"
description: "Reference for ILogSink in Inno.Core.Logging."
uid: api.inno.core.logging.7c7adc3fdcdb7926
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `ILogSink`

This reference describes `ILogSink` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Receive`](#api-b4bc64ada2005b39) | Method |

## Type declaration

<a id="api-7c7adc3fdcdb7926"></a>
<!-- api: T:Inno.Core.Logging.ILogSink 4853db20574b25501084d659c8c74a3e0d27bd518eeb684e7c47917c9af47695 -->

```csharp
public interface Inno.Core.Logging.ILogSink
```

Defines a log sink that consumes log entries from a `Inno.Core.Logging.LogRouter`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/ILogSink.cs#L6).

## `Receive`

<a id="api-b4bc64ada2005b39"></a>
<!-- api: M:Inno.Core.Logging.ILogSink.Receive(Inno.Core.Logging.LogEntry) 78663b86c9ed2b78d8249e8bf226f9a6e4cc4e826e6a3c00e158b677fd811a22 -->

```csharp
void Inno.Core.Logging.ILogSink.Receive(Inno.Core.Logging.LogEntry entry)
```

Receives a log entry for processing.

**Parameter `entry`:** The log entry to consume.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/ILogSink.cs#L14).
