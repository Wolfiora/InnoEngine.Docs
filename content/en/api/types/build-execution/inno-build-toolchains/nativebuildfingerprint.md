---
title: "NativeBuildFingerprint"
description: "Reference for NativeBuildFingerprint in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.814ce92b923df754
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildFingerprint`

This reference describes `NativeBuildFingerprint` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Create`](#api-fdca3e49fc7c1e16) | Method |
| [`Create`](#api-bfc55a04e8636c1d) | Method |

## Type declaration

<a id="api-814ce92b923df754"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildFingerprint 32099baa5d81acd3a48a87ce6443846debdaaae6f1ff6442176b3331fef645ec -->

```csharp
public static class Inno.Build.Toolchains.NativeBuildFingerprint
```

Derives recipe identities from ordered declarations, logical input names and complete source bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildFingerprint.cs#L13).

## `Create`

<a id="api-fdca3e49fc7c1e16"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildFingerprint.Create(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Threading.CancellationToken) bbdd3bfd5e070c3ecd9b5438d8125d1507bd5b7070494a5b9d17683946dab357 -->

```csharp
public static string Inno.Build.Toolchains.NativeBuildFingerprint.Create(Inno.Build.Toolchains.NativeBuildContext context, System.Collections.Generic.IEnumerable<string> declarations, System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeBuildInput> inputs, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Hashes declarations using the current operation's initial snapshot or explicit fresh verification phase.

**Parameter `context`:** The owner of this phase's complete input inventory and content hashes.

**Parameter `declarations`:** Ordered non-file inputs; declaration order remains significant.

**Parameter `inputs`:** Complete inputs with stable logical identities and physical read locations.

**Parameter `cancellationToken`:** Cancels complete enumeration and hashing.

**Returns:** The SHA-256 identity; repeated physical reads within this phase are reused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildFingerprint.cs#L68).

## `Create`

<a id="api-bfc55a04e8636c1d"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildFingerprint.Create(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Threading.CancellationToken) da2a8a485ddbb281d77e45b54521c5f5a08c6df9a69bfd594803ceab9d0e83ff -->

```csharp
public static string Inno.Build.Toolchains.NativeBuildFingerprint.Create(System.Collections.Generic.IEnumerable<string> declarations, System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeBuildInput> inputs, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Hashes a complete declared input closure independently of checkout location and file timestamps.

**Parameter `declarations`:** Ordered target, configuration, SDK, compiler and linker arguments. Order is significant.

**Parameter `inputs`:** Files and directories with explicit logical identities; overlapping reading locations are hashed once.

**Parameter `cancellationToken`:** Cancels enumeration or complete content hashing before a fingerprint is returned.

**Returns:** A lowercase SHA-256 identity that changes when a declaration, input inventory or input byte changes.

**Throws `System.ArgumentNullException`:** A required input collection is null.

**Throws `System.IO.IOException`:** An input cannot be read or contains a directory-link cycle.

**Throws `System.OperationCanceledException`:** Content hashing was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildFingerprint.cs#L39).
