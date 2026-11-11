---
title: "FileLogSink"
description: "Reference for FileLogSink in Inno.Core.Logging."
uid: api.inno.core.logging.b070f14c80256f37
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `FileLogSink`

This reference describes `FileLogSink` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Logging.ILogSink`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`C_LOG_FILE_PREFIX`](#api-4ebfe637e5d16333) | Field |
| [`#ctor`](#api-6e132e30682179b8) | Method |
| [`Dispose`](#api-7bbe7222ca06d972) | Method |
| [`Receive`](#api-040a2af01c33f82e) | Method |

## Type declaration

<a id="api-b070f14c80256f37"></a>
<!-- api: T:Inno.Core.Logging.FileLogSink ac48e5621915fa6299bc33b67f3322a0478ffec9f683893b76d70c5445a88ab8 -->

```csharp
public class Inno.Core.Logging.FileLogSink : Inno.Core.Logging.ILogSink, System.IDisposable
```

Writes complete log entries to uniquely named rotating files under the router's delivery policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/FileLogSink.cs#L11).

## `C_LOG_FILE_PREFIX`

<a id="api-4ebfe637e5d16333"></a>
<!-- api: F:Inno.Core.Logging.FileLogSink.C_LOG_FILE_PREFIX bdf37a9ae4c689218c095b542a71d0ac2c945f02787ee1dcee749fcfd6152c2d -->

```csharp
public const string Inno.Core.Logging.FileLogSink.C_LOG_FILE_PREFIX = "log_"
```

Prefix used for generated log file names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/FileLogSink.cs#L16).

## `#ctor`

<a id="api-6e132e30682179b8"></a>
<!-- api: M:Inno.Core.Logging.FileLogSink.#ctor(System.String,System.Int64,System.Int32) 25cf075a0f5955b46d3b5dd1cc81d4b3a9346ee6abb9212c1ff29a80038e7e22 -->

```csharp
public Inno.Core.Logging.FileLogSink.FileLogSink(string logDirectory, long maxFileSizeBytes = 10485760, int maxFiles = 10)
```

Opens an isolated log file without creating another queue or delivery worker.

**Parameter `logDirectory`:** Directory in which complete log files are retained.

**Parameter `maxFileSizeBytes`:** Positive rotation threshold. An entry larger than this threshold occupies its own file.

**Parameter `maxFiles`:** Positive number of retained files, including the current file.

**Throws `System.ArgumentException`:** The directory is blank or invalid.

**Throws `System.ArgumentOutOfRangeException`:** A rotation or retention limit is not positive.

**Throws `System.IO.IOException`:** The directory or initial file cannot be opened.

**Throws `System.UnauthorizedAccessException`:** The caller cannot create or access the log directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/FileLogSink.cs#L55).

## `Dispose`

<a id="api-7bbe7222ca06d972"></a>
<!-- api: M:Inno.Core.Logging.FileLogSink.Dispose 493259673c11050788754e7a9c2dd5063fdab9bef33b324e90d4526d9b67c7d9 -->

```csharp
public void Inno.Core.Logging.FileLogSink.Dispose()
```

Waits for an active write and closes the owned file, reporting any final flush failure.

**Throws `System.IO.IOException`:** The owned writer cannot finish flushing or closing its file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/FileLogSink.cs#L124).

## `Receive`

<a id="api-040a2af01c33f82e"></a>
<!-- api: M:Inno.Core.Logging.FileLogSink.Receive(Inno.Core.Logging.LogEntry) 027b6a4d142c8a7a9630e72bdc026e881525a12ca8e27b7a1822df71282460ef -->

```csharp
public void Inno.Core.Logging.FileLogSink.Receive(Inno.Core.Logging.LogEntry entry)
```

Writes and flushes one complete entry before returning, serializing concurrent callers.

**Parameter `entry`:** The immutable entry to persist.

**Constraints:** The router owns scheduling and backpressure. Write failures propagate to its sink quarantine.
Retention cannot remove files locked by another active writer and retries them on later rotation.

**Throws `System.ObjectDisposedException`:** The sink has been disposed.

**Throws `System.IO.IOException`:** An entry cannot be written, flushed or rotated.

**Throws `System.UnauthorizedAccessException`:** The caller cannot create the next log file or access the directory.

**Throws `System.InvalidOperationException`:** A previous failed rotation left no writable file.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/FileLogSink.cs#L101).
