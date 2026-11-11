---
title: "ShaderBuildInputs"
description: "Reference for ShaderBuildInputs in Inno.Build.Toolchains.Bgfx.Shaders."
uid: api.inno.build.toolchains.bgfx.shaders.4cb33f02a1a0a13d
kind: api
owners:
  - Inno.Build.Toolchains.Bgfx.Shaders
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains-bgfx-shaders
---
# `ShaderBuildInputs`

This reference describes `ShaderBuildInputs` in `Inno.Build.Toolchains.Bgfx.Shaders`. Read the [shared contract](../../../projects/inno-build-toolchains-bgfx-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Capture`](#api-6eb57044f0a83792) | Method |
| [`VerifyUnchanged`](#api-943fa848a68bbb21) | Method |
| [`fingerprint`](#api-07aa760ef7bef009) | Property |

## Type declaration

<a id="api-4cb33f02a1a0a13d"></a>
<!-- api: T:Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs 7cfc7e0ec13e67527cda64dd77058c4e5a036c45191f693c7d9751e902516444 -->

```csharp
public sealed class Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs
```

Fixes the complete authored shader file inventory and content identity for one compilation operation.

**Constraints:** Permanent import metadata participates in the identity; derived artifacts, source noise and atomic
publication candidates do not. Compilation copies these inputs into its owned source tree. This
value neither locks the authoring source nor authorizes its modification or cleanup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderBuildInputs.cs#L20).

## `Capture`

<a id="api-6eb57044f0a83792"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs.Capture(System.String,System.Threading.CancellationToken) eb33c778ba3c875f959291def070da8836807583ab1bafd2bfe06863c8842d15 -->

```csharp
public static Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs.Capture(string assetRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Captures permanent authoring files and their import metadata without consuming temporary publications.

**Parameter `assetRoot`:** The existing physical authoring root, containing no source links.

**Parameter `cancellationToken`:** Cancels discovery and complete content hashing.

**Returns:** A fixed input inventory and content identity; physical source files remain owned by their author.

**Throws `System.ArgumentException`:** The source root is blank.

**Throws `System.IO.IOException`:** A source cannot be read, does not exist, or crosses a link.

**Throws `System.OperationCanceledException`:** Capture was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderBuildInputs.cs#L63).

## `VerifyUnchanged`

<a id="api-943fa848a68bbb21"></a>
<!-- api: M:Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs.VerifyUnchanged(System.Threading.CancellationToken) b67dcce96bacd39df5d109d165b40eea8eb4cd32654a9cedd05f60359630aabb -->

```csharp
public void Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs.VerifyUnchanged(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
```

Rechecks the complete current inventory and bytes against this operation's captured identity.

**Parameter `cancellationToken`:** Cancels discovery and complete content verification.

**Throws `System.IO.InvalidDataException`:** A source or permanent metadata file was added, removed or changed.

**Throws `System.IO.IOException`:** The source tree cannot be safely inspected or read.

**Throws `System.OperationCanceledException`:** Verification was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderBuildInputs.cs#L87).

## `fingerprint`

<a id="api-07aa760ef7bef009"></a>
<!-- api: P:Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs.fingerprint 3fc62b97490b39c1882cd3955cecb80627b2b6caa49cc0d4ce110e97bad184a6 -->

```csharp
public string Inno.Build.Toolchains.Bgfx.Shaders.ShaderBuildInputs.fingerprint { get; }
```

Gets the complete logical directory, file and content identity used by the enclosing build.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/build/Inno.Build.Toolchains.Bgfx.Shaders/ShaderBuildInputs.cs#L40).
