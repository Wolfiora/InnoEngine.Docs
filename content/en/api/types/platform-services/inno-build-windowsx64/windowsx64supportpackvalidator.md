---
title: "WindowsX64SupportPackValidator"
description: "Reference for WindowsX64SupportPackValidator in Inno.Build.WindowsX64."
uid: api.inno.build.windowsx64.85b2eeb365c50ecf
kind: api
owners:
  - Inno.Build.WindowsX64
apiSurface: source-clr
contracts:
  - project.inno-build-windowsx64
---
# `WindowsX64SupportPackValidator`

This reference describes `WindowsX64SupportPackValidator` in `Inno.Build.WindowsX64`. Read the [shared contract](../../../projects/inno-build-windowsx64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackValidator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-53156fff5d6367d2) | Method |
| [`Validate`](#api-85cf47fc4b3160de) | Method |

## Type declaration

<a id="api-85b2eeb365c50ecf"></a>
<!-- api: T:Inno.Build.WindowsX64.WindowsX64SupportPackValidator 895cca575becafaaca401412742967e12f901b49390bd5b81f019224317b5ff7 -->

```csharp
public sealed class Inno.Build.WindowsX64.WindowsX64SupportPackValidator : Inno.Build.IPlayerSupportPackValidator
```

Validates the platform runtime or linker closure before compilation and installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64SupportPackValidator.cs#L10).

## `#ctor`

<a id="api-53156fff5d6367d2"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64SupportPackValidator.#ctor 9cb8b899b2cebf42ba7500ab40c6f2321e0ad82602fd6a6bf5d2adb18199f401 -->

```csharp
public Inno.Build.WindowsX64.WindowsX64SupportPackValidator.WindowsX64SupportPackValidator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64SupportPackValidator.cs#L10).

## `Validate`

<a id="api-85cf47fc4b3160de"></a>
<!-- api: M:Inno.Build.WindowsX64.WindowsX64SupportPackValidator.Validate(System.String) e7bd11cb92424c69006ac06f2efcbe4248630f3105a0866b34a1c6cace0fa82f -->

```csharp
public void Inno.Build.WindowsX64.WindowsX64SupportPackValidator.Validate(string directory)
```

Rejects incomplete or foreign platform inputs in the supplied Support Pack.

**Parameter `directory`:** The isolated or installed target directory to validate.

**Throws `System.IO.InvalidDataException`:** A required input is absent or the closure contains a foreign native binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/WindowsX64/build/Inno.Build.WindowsX64/SupportPacks/WindowsX64SupportPackValidator.cs#L21).
