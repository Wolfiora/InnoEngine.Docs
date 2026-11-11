---
title: "DocumentationEvidence"
description: "Reference for DocumentationEvidence in Inno.Tooling.Documentation."
uid: api.inno.tooling.documentation.9950d01d4dbe7f56
kind: api
owners:
  - Inno.Tooling.Documentation
apiSurface: source-clr
contracts:
  - project.inno-tooling-documentation#failure-and-ownership-boundaries
---
# `DocumentationEvidence`

This reference describes `DocumentationEvidence` in `Inno.Tooling.Documentation`. Read the [shared contract](../../projects/inno-tooling-documentation.md#failure-and-ownership-boundaries) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ReadAsync`](#api-adcf428a96f298b2) | Method |
| [`identity`](#api-d7da78f72aba4bfa) | Property |

## Type declaration

<a id="api-9950d01d4dbe7f56"></a>
<!-- api: T:Inno.Tooling.Documentation.DocumentationEvidence 0e04fedd055500fee85ffa8f1f50f8db8496ffc47f4cc7f8ec2c4f359882fd01 -->

```csharp
public sealed class Inno.Tooling.Documentation.DocumentationEvidence
```

Holds an immutable source certificate selected through an independently trusted content identity.
Authentication belongs to the preparation transport; parsing or hashing a receipt does not authenticate it.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationEvidence.cs#L17).

## `ReadAsync`

<a id="api-adcf428a96f298b2"></a>
<!-- api: M:Inno.Tooling.Documentation.DocumentationEvidence.ReadAsync(System.String,System.String,System.Threading.CancellationToken) 644aec0b0e4f385e8d1dfd714ebec10c0740abfe6e836124edf3c5bd7c6cc703 -->

```csharp
public static System.Threading.Tasks.Task<Inno.Tooling.Documentation.DocumentationEvidence> Inno.Tooling.Documentation.DocumentationEvidence.ReadAsync(string path, string trustedIdentity, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Reads one bounded certificate whose digest was obtained independently from a trusted producer.
It performs no network access, source scan, compilation or cache mutation.

**Parameter `path`:** Explicit local certificate file; symbolic links are rejected.

**Parameter `trustedIdentity`:** SHA-256 obtained from an authenticated workflow artifact or locally reconciled producer.
Computing this value from an arbitrary downloaded file does not establish trust.

**Parameter `cancellationToken`:** Cancels reading before an immutable certificate is returned.

**Returns:** A caller-owned immutable value, reusable across matching snapshot sessions.

**Throws `System.IO.IOException`:** The file is missing, oversized, linked, corrupt or structurally invalid.

**Throws `System.OperationCanceledException`:** The read was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationEvidence.cs#L57).

## `identity`

<a id="api-d7da78f72aba4bfa"></a>
<!-- api: P:Inno.Tooling.Documentation.DocumentationEvidence.identity 771e2a5d028c9e401d50f938541a8f0c40e5ba1f1a23a82ae05945adb66b64b6 -->

```csharp
public string Inno.Tooling.Documentation.DocumentationEvidence.identity { get; }
```

Gets the SHA-256 identity authenticated by the caller's preparation boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/b6ce4456f5ac59715c4d76e3ba877ce5ed996e45/tools/Inno.Tooling.Documentation/DocumentationEvidence.cs#L24).
