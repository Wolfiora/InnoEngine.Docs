---
title: "BrowserWasm32SupportPackValidator"
description: "Reference for BrowserWasm32SupportPackValidator in Inno.Build.BrowserWasm32."
uid: api.inno.build.browserwasm32.7b96022fbb7f3477
kind: api
owners:
  - Inno.Build.BrowserWasm32
apiSurface: source-clr
contracts:
  - project.inno-build-browserwasm32
---
# `BrowserWasm32SupportPackValidator`

This reference describes `BrowserWasm32SupportPackValidator` in `Inno.Build.BrowserWasm32`. Read the [shared contract](../../../projects/inno-build-browserwasm32.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackValidator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d9a7f43c45f02246) | Method |
| [`Validate`](#api-f5c6244678231dd7) | Method |

## Type declaration

<a id="api-7b96022fbb7f3477"></a>
<!-- api: T:Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator e52f7ce1f37f2f27c5648ef108a55b0ecc9e084680d0e5c90a0a6d7194f99b61 -->

```csharp
public sealed class Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator : Inno.Build.IPlayerSupportPackValidator
```

Validates the platform runtime or linker closure before compilation and installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32SupportPackValidator.cs#L14).

## `#ctor`

<a id="api-d9a7f43c45f02246"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator.#ctor a72ad66b40755ba321ef9c63023ac7be5e4f1dba6c5ea14195323333fcacf0e3 -->

```csharp
public Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator.BrowserWasm32SupportPackValidator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32SupportPackValidator.cs#L14).

## `Validate`

<a id="api-f5c6244678231dd7"></a>
<!-- api: M:Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator.Validate(System.String) 9039f19f7ad5490e4a0a1cf896b3e926854b453faf32f87608920393393f11a7 -->

```csharp
public void Inno.Build.BrowserWasm32.BrowserWasm32SupportPackValidator.Validate(string directory)
```

Rejects incomplete or foreign platform inputs in the supplied Support Pack.

**Parameter `directory`:** The isolated or installed target directory to validate.

**Throws `System.IO.InvalidDataException`:** A required input is absent or the closure contains a foreign native binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/BrowserWasm32/build/Inno.Build.BrowserWasm32/SupportPacks/BrowserWasm32SupportPackValidator.cs#L25).
