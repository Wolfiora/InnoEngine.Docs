---
title: "Inno.Build.SupportPacks.PlayerSupportPackRequirements"
description: "Reference for Inno.Build.SupportPacks.PlayerSupportPackRequirements in Inno.Build.SupportPacks.Core."
uid: api.inno.build.supportpacks.core.d0bb668540f9b69a
kind: api
owners:
  - Inno.Build.SupportPacks.Core
apiSurface: source-clr
contracts:
  - project.inno-build-supportpacks-core
---
# `Inno.Build.SupportPacks.PlayerSupportPackRequirements`

This reference describes `Inno.Build.SupportPacks.PlayerSupportPackRequirements` in `Inno.Build.SupportPacks.Core`. Read the [shared contract](../../../projects/inno-build-supportpacks-core.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6fb63cad6b51c248) | Method |
| [`nativeDirectories`](#api-5423b57c12f51a45) | Property |
| [`nativeExtension`](#api-32b2ee08d74d4dd4) | Property |
| [`nativeFiles`](#api-88ccfed620237103) | Property |
| [`nativeRoot`](#api-84d77b5203feed1b) | Property |
| [`requiredFiles`](#api-26bcf7cd671a302a) | Property |
| [`target`](#api-9cdd383e7e77bd3b) | Property |

## Type declaration

<a id="api-d0bb668540f9b69a"></a>
<!-- api: T:Inno.Build.SupportPacks.PlayerSupportPackRequirements fb0967c590658c3327c2c1333418467e1f2e524e2bde55b67d90a2841ad95ddc -->

```csharp
public sealed class Inno.Build.SupportPacks.PlayerSupportPackRequirements
```

Freezes distribution-selected files and native deployment groups independently of platform packaging.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L10).

## `#ctor`

<a id="api-6fb63cad6b51c248"></a>
<!-- api: M:Inno.Build.SupportPacks.PlayerSupportPackRequirements.#ctor(Inno.Build.BuildTargetId,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyList{System.String}) c3994cc7273ab078a51d89a0f8b069ed62c85653a0a78ecfdaf3cc3b26801f91 -->

```csharp
public Inno.Build.SupportPacks.PlayerSupportPackRequirements.PlayerSupportPackRequirements(Inno.Build.BuildTargetId target, System.Collections.Generic.IReadOnlyList<string> requiredFiles, string nativeRoot, System.Collections.Generic.IReadOnlyList<string> nativeDirectories, string nativeExtension, System.Collections.Generic.IReadOnlyList<string>? nativeFiles = null)
```

Captures the exact publication inputs and native groups supplied by the selected product closure.

**Parameter `target`:** The stable target whose inputs are being validated.

**Parameter `requiredFiles`:** Portable Pack-relative files required by the selected managed and binding graph.

**Parameter `nativeRoot`:** The Pack-relative root containing the selected runtime libraries or static archives.

**Parameter `nativeDirectories`:** Native-root-relative deployment groups, each requiring at least one selected library.

**Parameter `nativeExtension`:** The explicit SDK library suffix; it is not inferred from this process.

**Parameter `nativeFiles`:** The exact native-root-relative library set, or null when deployment metadata validates filenames.

**Throws `System.ArgumentException`:** A target, extension or portable relative path is invalid or repeated.

**Throws `System.ArgumentNullException`:** A required collection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L39).

## `nativeDirectories`

<a id="api-5423b57c12f51a45"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeDirectories b6979141be0c0b1871f61e22eef1d699cbc6d8761fc7fcade511af084abc7b3f -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeDirectories { get; }
```

Gets the immutable native deployment groups supplied by the selected steps.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L91).

## `nativeExtension`

<a id="api-32b2ee08d74d4dd4"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeExtension 5032f2f009b1f398369210f62375d556f3335df1c7e178635e863eff6da7e2b7 -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeExtension { get; }
```

Gets the library suffix selected by the target SDK.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L96).

## `nativeFiles`

<a id="api-88ccfed620237103"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeFiles 2932970026e9f48a368ad5fc63f4e08f47ac41d9ec48514f193a616b3e142a3c -->

```csharp
public System.Collections.Generic.IReadOnlyList<string>? Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeFiles { get; }
```

Gets the exact selected library filenames, or null when an implementation validates its deployment metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L101).

## `nativeRoot`

<a id="api-84d77b5203feed1b"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeRoot fc376eacf38e051ae2018e56bede8326c0f8aefda6d3a9257e27463dc284e1b2 -->

```csharp
public string Inno.Build.SupportPacks.PlayerSupportPackRequirements.nativeRoot { get; }
```

Gets the portable Pack-relative native deployment root.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L86).

## `requiredFiles`

<a id="api-26bcf7cd671a302a"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackRequirements.requiredFiles 49c292145c58740ea34870408c40de5f7cc191c3c95ff55f3cbef9a90ad1cdc3 -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.SupportPacks.PlayerSupportPackRequirements.requiredFiles { get; }
```

Gets the immutable required Pack-relative input paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L81).

## `target`

<a id="api-9cdd383e7e77bd3b"></a>
<!-- api: P:Inno.Build.SupportPacks.PlayerSupportPackRequirements.target 04468dc13285b5ab10bcd893cf74525d6bb3eaa93d67d7038130b2295cdaa2b8 -->

```csharp
public Inno.Build.BuildTargetId Inno.Build.SupportPacks.PlayerSupportPackRequirements.target { get; }
```

Gets the explicitly selected target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/support/Inno.Build.SupportPacks.Core/PlayerSupportPackRequirements.cs#L76).
