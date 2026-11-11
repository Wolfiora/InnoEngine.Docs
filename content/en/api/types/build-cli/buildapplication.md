---
title: "BuildApplication"
description: "Reference for BuildApplication in Inno.Build.Cli."
uid: api.inno.build.cli.df8e541fac90a97d
kind: api
owners:
  - Inno.Build.Cli
apiSurface: source-clr
contracts:
  - project.inno-build-cli#product-preparation-and-ownership
---
# `BuildApplication`

This reference describes `BuildApplication` in `Inno.Build.Cli`. Read the [shared contract](../../projects/inno-build-cli.md#product-preparation-and-ownership) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Run`](#api-93c6a267497d2f98) | Method |

## Type declaration

<a id="api-df8e541fac90a97d"></a>
<!-- api: T:Inno.Build.Cli.BuildApplication 5feb127b395302e89588037726f079518b465572b5636555e0e8d5f923b0f9f8 -->

```csharp
public static class Inno.Build.Cli.BuildApplication
```

Executes explicit engine and project build commands for a caller-owned development lifetime.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/build/cli/Inno.Build.Cli/BuildApplication.cs#L13).

## `Run`

<a id="api-93c6a267497d2f98"></a>
<!-- api: M:Inno.Build.Cli.BuildApplication.Run(System.String[],System.Threading.CancellationToken) 400f0d36b86664da5273e2b1f0f60687598f4e14cfe48080468bb8994a762531 -->

```csharp
public static System.Threading.Tasks.Task<int> Inno.Build.Cli.BuildApplication.Run(string[] arguments, System.Threading.CancellationToken cancellationToken)
```

Runs one build command without taking ownership of the caller's cancellation source.

**Parameter `arguments`:** The command and its documented options; help prints the supported command names.

**Parameter `cancellationToken`:** Cancels owned work and preserves completed publications according to their pipeline contracts.

**Returns:** Zero on success, two on cancellation, or one on a command or execution failure.

**Throws `System.ArgumentNullException`:** The argument array is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/84d72179ccc5ee2fa27ff25b956ec10e9cf5f2d5/build/cli/Inno.Build.Cli/BuildApplication.cs#L30).
