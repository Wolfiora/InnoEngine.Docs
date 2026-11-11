---
title: "DocumentationReferences"
description: "Reference for DocumentationReferences in Inno.Tooling.Architecture."
uid: api.inno.tooling.architecture.6bea2e1ef02a70d8
kind: api
owners:
  - Inno.Tooling.Architecture
apiSurface: source-clr
contracts:
  - project.inno-tooling-architecture#choose-the-evidence-you-need
---
# `DocumentationReferences`

This reference describes `DocumentationReferences` in `Inno.Tooling.Architecture`. Read the [shared contract](../../projects/inno-tooling-architecture.md#choose-the-evidence-you-need) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ExportApi`](#api-425601bf1543ed6d) | Method |
| [`ExportProjects`](#api-90f9bad091c5bf03) | Method |

## Type declaration

<a id="api-6bea2e1ef02a70d8"></a>
<!-- api: T:Inno.Tooling.Architecture.DocumentationReferences 4197d5c98ad177154c65a29e53249acb12bed55fc281fec6c0bd00be3d24f0d4 -->

```csharp
public static class Inno.Tooling.Architecture.DocumentationReferences
```

Exports documentation project facts from the same source inventory used by architecture coverage.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Architecture/DocumentationReferences.cs#L14).

## `ExportApi`

<a id="api-425601bf1543ed6d"></a>
<!-- api: M:Inno.Tooling.Architecture.DocumentationReferences.ExportApi(System.String[],System.Threading.CancellationToken) 4aa866ad2d2e752131fa7c1a6db5ff5ebb2b46b6232e3bc113b22a1060838141 -->

```csharp
public static int Inno.Tooling.Architecture.DocumentationReferences.ExportApi(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Exports selected CLR source contracts using the existing evaluated API extractor, independently of Wiki pages.
This operation does not certify script projection, behavioral prose, examples or product execution.

**Parameter `arguments`:** Required engine-root, dotnet, output and one or more project options; optional configuration and target.
Project paths are relative to the engine root and must occur in its actual source inventory.
The selected SDK and prepared references supply compilation facts; no product build is requested.

**Parameter `cancellationToken`:** Cancels evaluated capture and extraction before atomic publication.

**Returns:** Zero after publishing complete facts for every selected project, including explicit empty public surfaces.
Source API certification remains separate from this extraction result.

**Throws `System.ArgumentException`:** Required options are absent, an option is duplicated or unsupported, or a project is not an actual owner.

**Throws `System.IO.IOException`:** Inputs are unavailable, escape ownership, or cannot be published.

**Throws `System.IO.InvalidDataException`:** A selected compilation or public signature is unavailable or unresolved.

**Throws `System.OperationCanceledException`:** The caller cancels capture, extraction or publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Architecture/DocumentationReferences.cs#L44).

## `ExportProjects`

<a id="api-90f9bad091c5bf03"></a>
<!-- api: M:Inno.Tooling.Architecture.DocumentationReferences.ExportProjects(System.String[],System.Threading.CancellationToken) b13c91c95f45f481efe00ebe319e6f13dcfd654adadf95db75a2d360615ad4bf -->

```csharp
public static int Inno.Tooling.Architecture.DocumentationReferences.ExportProjects(string[] arguments, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Writes a deterministic project inventory without claiming evaluated API surfaces or source verification.

**Parameter `arguments`:** Explicit engine-root and output options. Output is a derived reference artifact, not a project selection table.

**Parameter `cancellationToken`:** Cancels source enumeration before atomic output publication.

**Returns:** Zero after publishing the current source-project inventory.

**Throws `System.ArgumentException`:** An option is missing, duplicated or unsupported.

**Throws `System.IO.IOException`:** A source path escapes the engine boundary or the destination cannot be published.

**Throws `System.IO.InvalidDataException`:** Required source discovery is empty or project identities are ambiguous.

**Throws `System.OperationCanceledException`:** The caller cancels before publication.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/18da08eaecb12d89b816166bae8d9480683f6948/tools/Inno.Tooling.Architecture/DocumentationReferences.cs#L135).
