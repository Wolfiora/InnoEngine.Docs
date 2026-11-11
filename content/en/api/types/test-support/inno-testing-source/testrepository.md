---
title: "TestRepository"
description: "Reference for TestRepository in Inno.Testing.Source."
uid: api.inno.testing.source.5ab4e4b9562fe548
kind: api
owners:
  - Inno.Testing.Source
apiSurface: source-clr
contracts:
  - project.inno-testing-source
---
# `TestRepository`

This reference describes `TestRepository` in `Inno.Testing.Source`. Read the [shared contract](../../../../contributing/testing/support/inno-testing-source.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`GetArtifactsPath`](#api-99fec7d24e36052a) | Method |
| [`GetRoot`](#api-bf35205d9e4ea4ca) | Method |

## Type declaration

<a id="api-5ab4e4b9562fe548"></a>
<!-- api: T:Inno.Testing.Source.TestRepository da8463026f1284e733d5566e89d2af4b1c73253d7c71a1b75918fac97fb60a50 -->

```csharp
public static class Inno.Testing.Source.TestRepository
```

Resolves source and SDK output inputs explicitly declared by a test assembly's project.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/source/Inno.Testing.Source/TestRepository.cs#L11).

## `GetArtifactsPath`

<a id="api-99fec7d24e36052a"></a>
<!-- api: M:Inno.Testing.Source.TestRepository.GetArtifactsPath(System.Reflection.Assembly) d3d8879bb42254e08f413f3e539aab70110ef71e556c12d6ba65187696415488 -->

```csharp
public static string? Inno.Testing.Source.TestRepository.GetArtifactsPath(System.Reflection.Assembly testAssembly)
```

Reads the SDK output owner recorded when the test assembly was built.

**Parameter `testAssembly`:** The test assembly carrying the optional evaluated artifacts path.

**Returns:** The declared absolute artifacts directory, or null when normal SDK output paths were selected.

**Throws `System.ArgumentNullException`:** The test assembly is null.

**Throws `System.InvalidOperationException`:** The declaration is duplicated, empty or relative.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/source/Inno.Testing.Source/TestRepository.cs#L31).

## `GetRoot`

<a id="api-bf35205d9e4ea4ca"></a>
<!-- api: M:Inno.Testing.Source.TestRepository.GetRoot(System.Reflection.Assembly) 11b628e99c277926ba90f7659e7f0ce4867e3e44811ee5949bc66c9448e8e46c -->

```csharp
public static string Inno.Testing.Source.TestRepository.GetRoot(System.Reflection.Assembly testAssembly)
```

Reads and validates the checkout input independently of the test assembly's output directory.

**Parameter `testAssembly`:** The test assembly carrying exactly one absolute repository-root metadata declaration.

**Returns:** The declared absolute checkout directory containing the engine solution marker.

**Throws `System.ArgumentNullException`:** The test assembly is null.

**Throws `System.InvalidOperationException`:** The declaration is missing, duplicated, relative, or does not identify an available checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/source/Inno.Testing.Source/TestRepository.cs#L58).
