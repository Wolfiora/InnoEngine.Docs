---
title: "NativeProcessTestHost"
description: "Reference for NativeProcessTestHost in Inno.Testing.Processes."
uid: api.inno.testing.processes.dcd21a619159fd08
kind: api
owners:
  - Inno.Testing.Processes
apiSurface: source-clr
contracts:
  - project.inno-testing-processes
---
# `NativeProcessTestHost`

This reference describes `NativeProcessTestHost` in `Inno.Testing.Processes`. Read the [shared contract](../../../../contributing/testing/support/inno-testing-processes.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Run`](#api-c0f7ba21d6d4b8f6) | Method |

## Type declaration

<a id="api-dcd21a619159fd08"></a>
<!-- api: T:Inno.Testing.Processes.NativeProcessTestHost 20dc68aad1aeb703cfa826414fdefa497e7bd7957a303031b3f015bd2c81bd88 -->

```csharp
public static class Inno.Testing.Processes.NativeProcessTestHost
```

Executes isolated native contracts while retaining output and bounded process cleanup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/process/Inno.Testing.Processes/NativeProcessTestHost.cs#L12).

## `Run`

<a id="api-c0f7ba21d6d4b8f6"></a>
<!-- api: M:Inno.Testing.Processes.NativeProcessTestHost.Run(System.String,System.String,System.Int32) c3354bf7386ddb86f56667af8968b4d72382e2d9f8164c70414dfca2464e3822 -->

```csharp
public static void Inno.Testing.Processes.NativeProcessTestHost.Run(string assembly, string contract, int timeoutMilliseconds = 90000)
```

Runs one contract in a separate main-thread host and reports all captured failure output.

**Parameter `assembly`:** The absolute path of the executable contract assembly.

**Parameter `contract`:** The exact contract identifier understood by the child host.

**Parameter `timeoutMilliseconds`:** The positive execution budget before terminating the process tree.

**Throws `System.ArgumentException`:** The assembly or contract is empty, or the assembly path is relative.

**Throws `System.ArgumentOutOfRangeException`:** The execution budget is not positive.

**Throws `System.TimeoutException`:** The child exceeded its execution budget; the message retains partial output and cleanup results.

**Throws `System.InvalidOperationException`:** The child failed, could not start, or did not drain its redirected output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/process/Inno.Testing.Processes/NativeProcessTestHost.cs#L38).
