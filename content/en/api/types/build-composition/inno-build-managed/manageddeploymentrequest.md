---
title: "ManagedDeploymentRequest"
description: "Reference for ManagedDeploymentRequest in Inno.Build.Managed."
uid: api.inno.build.managed.a150216bb34fa498
kind: api
owners:
  - Inno.Build.Managed
apiSurface: source-clr
contracts:
  - project.inno-build-managed
---
# `ManagedDeploymentRequest`

This reference describes `ManagedDeploymentRequest` in `Inno.Build.Managed`. Read the [shared contract](../../../projects/inno-build-managed.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-dd0046e0e6aec016) | Method |
| [`codeInputDirectory`](#api-f31a4dc44e07fb0a) | Property |
| [`logDirectory`](#api-a2f1b8c66c6c44b7) | Property |
| [`outputDirectory`](#api-db16f0036fff2ada) | Property |
| [`projectPath`](#api-a41ba8f704af46d9) | Property |
| [`runtimeIdentifier`](#api-212a6c50fd836053) | Property |

## Type declaration

<a id="api-a150216bb34fa498"></a>
<!-- api: T:Inno.Build.Managed.ManagedDeploymentRequest 080d3b05637b73016b29b7122e2888e4087c699322653c03f45e14da571732e2 -->

```csharp
public sealed class Inno.Build.Managed.ManagedDeploymentRequest
```

Freezes the build-owned project, code closure and output locations supplied to a managed publisher.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L9).

## `#ctor`

<a id="api-dd0046e0e6aec016"></a>
<!-- api: M:Inno.Build.Managed.ManagedDeploymentRequest.#ctor(System.String,System.String,System.String,System.String,System.String) 96c0a519bd3910f4fbced1be799e44cafccdc62d55e588937d4409553c2e283c -->

```csharp
public Inno.Build.Managed.ManagedDeploymentRequest.ManagedDeploymentRequest(string projectPath, string runtimeIdentifier, string codeInputDirectory, string outputDirectory, string logDirectory)
```

Resolves all filesystem locations without starting processes or creating output directories.

**Parameter `projectPath`:** The prepared entry project with explicit code references, generated registrations and native inputs.

**Parameter `runtimeIdentifier`:** The managed toolchain's exact target identifier.

**Parameter `codeInputDirectory`:** The isolated directory containing the frozen code inputs referenced by the entry project.

**Parameter `outputDirectory`:** The empty build-owned staging directory; final installation remains the pipeline's responsibility.

**Parameter `logDirectory`:** The build-owned directory receiving process output and SDK selection evidence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L29).

## `codeInputDirectory`

<a id="api-f31a4dc44e07fb0a"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentRequest.codeInputDirectory 2c9a4a4dbc0abd4b46efed4d8ba775bf7ee5d566698cd472b1a20028de96814f -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentRequest.codeInputDirectory { get; }
```

Gets the isolated frozen code input directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L61).

## `logDirectory`

<a id="api-a2f1b8c66c6c44b7"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentRequest.logDirectory d38ab28390012a7804b1818139bc544618df52575cbc155af5e5e425d0efdeda -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentRequest.logDirectory { get; }
```

Gets the directory receiving process output and SDK selection evidence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L71).

## `outputDirectory`

<a id="api-db16f0036fff2ada"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentRequest.outputDirectory 0598e5b2aa0590ee458c6580ec49fc0aa3cba813865d92b89fa9af70a9ebc5aa -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentRequest.outputDirectory { get; }
```

Gets the managed publication staging directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L66).

## `projectPath`

<a id="api-a41ba8f704af46d9"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentRequest.projectPath 99abb81d06aa7b1263ae036e0044d77d1637148104fd02a2db5ae8b5627c34cc -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentRequest.projectPath { get; }
```

Gets the prepared entry project owned by this build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L51).

## `runtimeIdentifier`

<a id="api-212a6c50fd836053"></a>
<!-- api: P:Inno.Build.Managed.ManagedDeploymentRequest.runtimeIdentifier 481082b80d1ed457e5c52e0ef0659c4f2bcaee03c4181f586fdeaa7f0138fc8c -->

```csharp
public string Inno.Build.Managed.ManagedDeploymentRequest.runtimeIdentifier { get; }
```

Gets the exact target identifier accepted by the selected managed toolchain.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/managed/Inno.Build.Managed/ManagedDeploymentRequest.cs#L56).
