---
title: "ValidationCommand"
description: "Reference for ValidationCommand in Inno.Tooling.Validation."
uid: api.inno.tooling.validation.0e3e39cfecbf0721
kind: api
owners:
  - Inno.Tooling.Validation
apiSurface: source-clr
contracts:
  - project.inno-tooling-validation
---
# `ValidationCommand`

This reference describes `ValidationCommand` in `Inno.Tooling.Validation`. Read the [shared contract](../../../projects/inno-tooling-validation.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ExecuteAsync`](#api-708135b930ff2073) | Method |

## Type declaration

<a id="api-0e3e39cfecbf0721"></a>
<!-- api: T:Inno.Tooling.Validation.ValidationCommand 0253332414abf0d30d3c1e9deaf9e45ac081661bcecb4b2bf6a99d4d3ec3a864 -->

```csharp
public static class Inno.Tooling.Validation.ValidationCommand
```

Provides repository validation planning, execution and evidence reconciliation to the existing Build entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b8d6c801595a5fc719c651b451123191ef4dd07f/tools/Inno.Tooling.Validation/ValidationCommand.cs#L16).

## `ExecuteAsync`

<a id="api-708135b930ff2073"></a>
<!-- api: M:Inno.Tooling.Validation.ValidationCommand.ExecuteAsync(System.String[],System.Threading.CancellationToken) c89fe80bda2a1d8c91cd0790bb909429696aeddd0d61054d87c277467842a71c -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Tooling.Validation.ValidationCommand.ExecuteAsync(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Executes an explicit plan, run, full or evidence operation and persists inspectable results.

**Parameter `arguments`:** The operation followed by explicit engine-root, base, dotnet, configuration, artifacts-path, output, plan,
evidence, full, extended, cache-input or cache-output options. Cache archives contain immutable native payloads only.
Explicit docs-cache-root and docs-snapshot options select protected external documentation facts.
Optional docs-base-snapshot identifies changed pages and facts without rescanning an authoring checkout.

**Parameter `cancellationToken`:** Cancels child processes while retaining the first failure and completed diagnostics.

**Returns:** Zero only when the requested operation succeeds and every required result is present and successful; otherwise one.

**Throws `System.ArgumentException`:** An operation or option is unknown, duplicated or missing its value.

**Throws `System.OperationCanceledException`:** The caller cancels validation.

**Throws `System.IO.InvalidDataException`:** A supplied plan or evidence record is invalid or does not describe the current input.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b8d6c801595a5fc719c651b451123191ef4dd07f/tools/Inno.Tooling.Validation/ValidationCommand.cs#L42).
