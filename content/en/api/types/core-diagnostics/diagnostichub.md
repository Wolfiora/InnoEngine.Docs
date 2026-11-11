---
title: "DiagnosticHub"
description: "Reference for DiagnosticHub in Inno.Core.Diagnostics."
uid: api.inno.core.diagnostics.8edfa6987d946f44
kind: api
owners:
  - Inno.Core.Diagnostics
apiSurface: source-clr
contracts:
  - project.inno-core-diagnostics#producer-and-presentation-contract
---
# `DiagnosticHub`

This reference describes `DiagnosticHub` in `Inno.Core.Diagnostics`. Read the [shared contract](../../projects/inno-core-diagnostics.md#producer-and-presentation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`sinkFailed`](#api-26d9207289c31e9f) | Event |
| [`#ctor`](#api-9427d5b7a6323dfa) | Method |
| [`Clear`](#api-b48ffbdcc2d6509c) | Method |
| [`CreateReporter`](#api-b24f932face4b93d) | Method |
| [`EnterScope`](#api-11c980fa4541b9f3) | Method |
| [`RegisterSink`](#api-2f5c1c15d7ad44f3) | Method |
| [`Set`](#api-60c0b90514a285d8) | Method |
| [`UnregisterSink`](#api-486d4234ffc60366) | Method |

## Type declaration

<a id="api-8edfa6987d946f44"></a>
<!-- api: T:Inno.Core.Diagnostics.DiagnosticHub 89b444a8871ffaa1850f527a1115359315f76dc608b0ca9af6b6759e2b55aefb -->

```csharp
public sealed class Inno.Core.Diagnostics.DiagnosticHub
```

Owns one host's complete diagnostic state and its presentation subscriptions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L12).

## `sinkFailed`

<a id="api-26d9207289c31e9f"></a>
<!-- api: E:Inno.Core.Diagnostics.DiagnosticHub.sinkFailed c70f8666b5138c5c321ffdd8ba94f02a31bee138c553fa7c8429e74f33b91400 -->

```csharp
public System.Action<System.Exception>? Inno.Core.Diagnostics.DiagnosticHub.sinkFailed
```

Occurs when a diagnostic presentation sink fails and is quarantined.

**Constraints:** Observers execute synchronously during publication. Without an observer, or when an observer
throws, the current implementation reports to standard error; a failure of that secondary
writer can propagate. Unregistration or quarantine does not dispose the presentation sink.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L34).

## `#ctor`

<a id="api-9427d5b7a6323dfa"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.#ctor fac47ba36ad16ed4cf49075d16a5c442ce2c24cdaa275e182007ac8d599000c3 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticHub.DiagnosticHub()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L12).

## `Clear`

<a id="api-b48ffbdcc2d6509c"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.Clear(Inno.Core.Diagnostics.DiagnosticSource) f72dbb00697a201214ea4427d44d92b8aadc687b7538d6cd1c50b4ebfa78095b -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticHub.Clear(Inno.Core.Diagnostics.DiagnosticSource source)
```

Clears the active report published by one producer.

**Parameter `source`:** The stable producer identity to clear.

**Throws `System.ArgumentException`:** Thrown when `source` is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L196).

## `CreateReporter`

<a id="api-b24f932face4b93d"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.CreateReporter(Inno.Core.Diagnostics.DiagnosticSource) 9e909533ebb13931aaf754181f66fbbb472c88176508fe2a9f149f6ec150e778 -->

```csharp
public Inno.Core.Diagnostics.DiagnosticReporter Inno.Core.Diagnostics.DiagnosticHub.CreateReporter(Inno.Core.Diagnostics.DiagnosticSource source)
```

Activates a producer at an owner safe point, revoking any previous registration with the same ID.

**Parameter `source`:** The stable owner-qualified producer identity.

**Returns:** A producer whose disposal clears only its own active registration.

**Throws `System.ArgumentException`:** The source is not initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L48).

## `EnterScope`

<a id="api-11c980fa4541b9f3"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.EnterScope d16a84e4ef7318c6f1d4534bd0a3bfb632cbc03b646c05469b6d631d653035ba -->

```csharp
public System.IDisposable Inno.Core.Diagnostics.DiagnosticHub.EnterScope()
```

Binds this hub to the current asynchronous execution context.

**Returns:** A strict last-in-first-out scope owned by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L92).

## `RegisterSink`

<a id="api-2f5c1c15d7ad44f3"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.RegisterSink(Inno.Core.Diagnostics.IDiagnosticSink) 4bd7721d5cd96ef0aebf963e57fd34a48d1c71320dc47795759ef3756ebb6e81 -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticHub.RegisterSink(Inno.Core.Diagnostics.IDiagnosticSink sink)
```

Registers a sink and synchronously replays every active report before registration completes.

**Parameter `sink`:** The sink that receives current and future reports.

**Throws `System.ArgumentNullException`:** Thrown when `sink` is null.

**Throws `System.InvalidOperationException`:** Thrown when the sink cannot accept the current diagnostic snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L109).

## `Set`

<a id="api-60c0b90514a285d8"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.Set(Inno.Core.Diagnostics.DiagnosticSource,System.Collections.Generic.IEnumerable{Inno.Core.Diagnostics.Diagnostic}) 3ac3a3cd4fd843d62ece01ee2e4b02e9d628dc064a50ab7a88aea0942e88d95f -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticHub.Set(Inno.Core.Diagnostics.DiagnosticSource source, System.Collections.Generic.IEnumerable<Inno.Core.Diagnostics.Diagnostic> diagnostics)
```

Atomically replaces the complete diagnostic state published by one producer.

**Parameter `source`:** The stable producer identity whose previous report is replaced.

**Parameter `diagnostics`:** The complete current report, or an empty collection to clear it.

**Throws `System.ArgumentException`:** Thrown when the source is invalid or the collection contains a null entry.

**Throws `System.ArgumentNullException`:** Thrown when `diagnostics` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L162).

## `UnregisterSink`

<a id="api-486d4234ffc60366"></a>
<!-- api: M:Inno.Core.Diagnostics.DiagnosticHub.UnregisterSink(Inno.Core.Diagnostics.IDiagnosticSink) b97eafb9360014a553c34c3b19da8f698528fd800708b50b6c4d71768f183759 -->

```csharp
public void Inno.Core.Diagnostics.DiagnosticHub.UnregisterSink(Inno.Core.Diagnostics.IDiagnosticSink sink)
```

Unregisters a sink so it receives no future diagnostic changes.

**Parameter `sink`:** The sink to remove when registered.

**Throws `System.ArgumentNullException`:** Thrown when `sink` is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/c7c2e650d4607be0611e3419a95d9e13a76a2554/src/foundation/core/Inno.Core.Diagnostics/DiagnosticHub.cs#L140).
