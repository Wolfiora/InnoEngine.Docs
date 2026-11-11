---
title: "Inno.Build.SupportPacks.PlayerSupportPackPublication"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackPublication in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.f9f4dd95de0c4940
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackPublication`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackPublication` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`Dispose`](#api-0f39c9cd52e247de) | Method |
| [`diagnostics`](#api-b5d5591af6ee8263) | Property |
| [`directory`](#api-0b9c8330ed6d548d) | Property |

## Type declaration

<a id="api-f9f4dd95de0c4940"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackPublication a4fd9124718b4382c28849493c730ca80b656b41ebb1c5a50b6d0f824f181114 -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackPublication : System.IDisposable
```

Owns a successfully selected Pack and immutable diagnostics from work after its commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublication.cs#L11).

## `Dispose`

<a id="api-0f39c9cd52e247de"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackPublication.Dispose 467f09ac32b58606cace63e17d5203fc4c60e27c7000f68798b5755aaa8238b9 -->

```csharp
public void Inno.Build.SupportPacks.PlayerSupportPackPublication.Dispose()
```

Releases the selected Pack after every reader and tool has finished; repeated disposal has no effect.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublication.cs#L40).

## `diagnostics`

<a id="api-b5d5591af6ee8263"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPublication.diagnostics 26e03de78339043c8c0f57bead1d683029401bd16766e6cbf399575afd4dc27c -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.SupportPacks.PlayerSupportPackPublication.diagnostics { get; }
```

Gets indexing or cleanup diagnostics which do not undo the successful selection.
An empty collection means all post-commit work completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublication.cs#L35).

## `directory`

<a id="api-0b9c8330ed6d548d"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackPublication.directory 3bd6bf289f7e86554678cd4b04a6bec4b4f5634cbbe67d103b22bfb9e7e3a5cf -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackPublication.directory { get; }
```

Gets the verified Pack directory while this result holds reading ownership.

**Throws `System.ObjectDisposedException`:** The publication's reading ownership has been released.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackPublication.cs#L29).
