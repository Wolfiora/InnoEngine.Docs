---
title: "ArchitectureValidator"
description: "Reference for ArchitectureValidator in Inno.Tooling.Architecture."
uid: api.inno.tooling.architecture.9862893de0812526
kind: api
owners:
  - Inno.Tooling.Architecture
apiSurface: source-clr
contracts:
  - project.inno-tooling-architecture#choose-the-evidence-you-need
---
# `ArchitectureValidator`

This reference describes `ArchitectureValidator` in `Inno.Tooling.Architecture`. Read the [shared contract](../../projects/inno-tooling-architecture.md#choose-the-evidence-you-need) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Execute`](#api-c7d46d4b90e3ee02) | Method |

## Type declaration

<a id="api-9862893de0812526"></a>
<!-- api: T:Inno.Tooling.Architecture.ArchitectureValidator 3647c06158b3bf9362d2d341a8f2ef9e17b9d60c971a1578b3d17e29334db90a -->

```csharp
public static class Inno.Tooling.Architecture.ArchitectureValidator
```

Checks repository dependency, API documentation and source ownership invariants.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/e57c3c5015867f41be493c8d3df918677783bf3d/tools/Inno.Tooling.Architecture/ArchitectureValidator.cs#L17).

## `Execute`

<a id="api-c7d46d4b90e3ee02"></a>
<!-- api: M:Inno.Tooling.Architecture.ArchitectureValidator.Execute(System.String[],System.Threading.CancellationToken) aafb5a4f0fe7db5e5d8991f1cad9ca334d0d0a12bd11fc30f9da266defaf1e25 -->

```csharp
public static int Inno.Tooling.Architecture.ArchitectureValidator.Execute(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Executes repository validation or an explicitly requested documentation maintenance operation.

**Parameter `arguments`:** The optional repository path, configuration, XML maintenance flag, explicit SDK, evaluated graph output,
selected API owners and an optional prepared SDK snapshot. Product documentation is validated by the docs command group.

**Parameter `cancellationToken`:** Cancels owned SDK evaluation processes and drains them before returning.

**Returns:** Zero when validation succeeds, or one when any invariant is violated.

**Throws `System.ArgumentException`:** An option is unknown or more than one repository path is supplied.

**Throws `System.IO.DirectoryNotFoundException`:** The requested path is not inside an engine checkout.

**Throws `System.OperationCanceledException`:** The caller cancels evaluated SDK project inspection.

**Throws `System.IO.InvalidDataException`:** A prepared SDK snapshot or evaluated source contract is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/e57c3c5015867f41be493c8d3df918677783bf3d/tools/Inno.Tooling.Architecture/ArchitectureValidator.cs#L61).
