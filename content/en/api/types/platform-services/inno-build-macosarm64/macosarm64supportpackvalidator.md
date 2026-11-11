---
title: "MacOSArm64SupportPackValidator"
description: "Reference for MacOSArm64SupportPackValidator in Inno.Build.MacOSArm64."
uid: api.inno.build.macosarm64.b54dd9ab61f50da5
kind: api
owners:
  - Inno.Build.MacOSArm64
apiSurface: source-clr
contracts:
  - project.inno-build-macosarm64
---
# `MacOSArm64SupportPackValidator`

This reference describes `MacOSArm64SupportPackValidator` in `Inno.Build.MacOSArm64`. Read the [shared contract](../../../projects/inno-build-macosarm64.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Build.IPlayerSupportPackValidator`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2a735687b0580758) | Method |
| [`Validate`](#api-1450c70abfbae298) | Method |

## Type declaration

<a id="api-b54dd9ab61f50da5"></a>
<!-- api: T:Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator b812c35543027f7f2a71d5045b7b4ec6b75d6e845c4da80e096679a18ba7c1e0 -->

```csharp
public sealed class Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator : Inno.Build.IPlayerSupportPackValidator
```

Validates the platform runtime or linker closure before compilation and installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64SupportPackValidator.cs#L10).

## `#ctor`

<a id="api-2a735687b0580758"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator.#ctor 4fd3875e465bd5fde550e1c1965fcf770184549d34e15f41ff4c3612b1139985 -->

```csharp
public Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator.MacOSArm64SupportPackValidator()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64SupportPackValidator.cs#L10).

## `Validate`

<a id="api-1450c70abfbae298"></a>
<!-- api: M:Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator.Validate(System.String) 6e97b7ff9f8dcf6510aaab1ef87a7bba22e1f8d707825a3eed58ce0d975bdba0 -->

```csharp
public void Inno.Build.MacOSArm64.MacOSArm64SupportPackValidator.Validate(string directory)
```

Rejects incomplete or foreign platform inputs in the supplied Support Pack.

**Parameter `directory`:** The isolated or installed target directory to validate.

**Throws `System.IO.InvalidDataException`:** A required input is absent or the closure contains a foreign native binary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/136356366bae903278155c904151716b540c3e4a/platforms/MacOSArm64/build/Inno.Build.MacOSArm64/SupportPacks/MacOSArm64SupportPackValidator.cs#L21).
