---
title: "DiagnosticLogSink"
description: "Reference for DiagnosticLogSink in Inno.Core.Logging."
uid: api.inno.core.logging.c80d38be9edc96c0
kind: api
owners:
  - Inno.Core.Logging
apiSurface: source-clr
contracts:
  - project.inno-core-logging#delivery-and-ownership-contract
---
# `DiagnosticLogSink`

This reference describes `DiagnosticLogSink` in `Inno.Core.Logging`. Read the [shared contract](../../projects/inno-core-logging.md#delivery-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Diagnostics.IDiagnosticSink`, `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-90071a9ca246fe20) | Method |
| [`Clear`](#api-ef78bacdb911694c) | Method |
| [`Dispose`](#api-6cb8509a9604c567) | Method |
| [`Replace`](#api-79425c305186f579) | Method |

## Type declaration

<a id="api-c80d38be9edc96c0"></a>
<!-- api: T:Inno.Core.Logging.DiagnosticLogSink a9a72eb8c5ffc91e4c7d6b72616bf52439459665012a467a6ed71428a60b74ad -->

```csharp
public sealed class Inno.Core.Logging.DiagnosticLogSink : Inno.Core.Diagnostics.IDiagnosticSink, System.IDisposable
```

Projects changed diagnostic issues into a host's log stream without introducing another diagnostic owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/DiagnosticLogSink.cs#L12).

## `#ctor`

<a id="api-90071a9ca246fe20"></a>
<!-- api: M:Inno.Core.Logging.DiagnosticLogSink.#ctor(Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter) 2b4654ffee07e62e939024d31065379d2573e7b762164d40f7ea425c51523b39 -->

```csharp
public Inno.Core.Logging.DiagnosticLogSink.DiagnosticLogSink(Inno.Core.Diagnostics.DiagnosticHub hub, Inno.Core.Logging.LogRouter logs)
```

Registers a log presentation for all current and future reports in one hub.

**Parameter `hub`:** The authoritative diagnostic owner.

**Parameter `logs`:** The borrowed destination router, which must outlive this sink.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/DiagnosticLogSink.cs#L28).

## `Clear`

<a id="api-ef78bacdb911694c"></a>
<!-- api: M:Inno.Core.Logging.DiagnosticLogSink.Clear(Inno.Core.Diagnostics.DiagnosticSource) 30542be7d77eaedc99c0118cc3b7ca61ba21e03d6bbb706e811dc1e2be61eb94 -->

```csharp
public void Inno.Core.Logging.DiagnosticLogSink.Clear(Inno.Core.Diagnostics.DiagnosticSource source)
```

Removes the current report for one diagnostic source.

**Parameter `source`:** The source whose current report was cleared.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/DiagnosticLogSink.cs#L71).

## `Dispose`

<a id="api-6cb8509a9604c567"></a>
<!-- api: M:Inno.Core.Logging.DiagnosticLogSink.Dispose d15f6bb31632fd2a977d0d52976f19f4de989f22a95dddbd8d385903ba67208c -->

```csharp
public void Inno.Core.Logging.DiagnosticLogSink.Dispose()
```

Unregisters this presentation and releases its neutral de-duplication snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/DiagnosticLogSink.cs#L76).

## `Replace`

<a id="api-79425c305186f579"></a>
<!-- api: M:Inno.Core.Logging.DiagnosticLogSink.Replace(Inno.Core.Diagnostics.DiagnosticReport) 3884f32568c9b13ec7cb9e525c60652d24bd2968740da38e026dac1f6b8fe33f -->

```csharp
public void Inno.Core.Logging.DiagnosticLogSink.Replace(Inno.Core.Diagnostics.DiagnosticReport report)
```

Replaces the current report for one diagnostic source.

**Parameter `report`:** The complete current report to store or present.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Logging/DiagnosticLogSink.cs#L42).
