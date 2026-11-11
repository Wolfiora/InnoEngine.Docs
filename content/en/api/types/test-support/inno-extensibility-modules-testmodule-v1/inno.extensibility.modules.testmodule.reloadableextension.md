---
title: "Inno.Extensibility.Modules.TestModule.ReloadableExtension"
description: "Reference for Inno.Extensibility.Modules.TestModule.ReloadableExtension in Inno.Extensibility.Modules.TestModule.V1."
uid: api.inno.extensibility.modules.testmodule.v1.a09595c4bc16e786
kind: api
owners:
  - Inno.Extensibility.Modules.TestModule.V1
apiSurface: source-clr
contracts:
  - project.inno-extensibility-modules-testmodule-v1
---
# `Inno.Extensibility.Modules.TestModule.ReloadableExtension`

This reference describes `Inno.Extensibility.Modules.TestModule.ReloadableExtension` in `Inno.Extensibility.Modules.TestModule.V1`. Read the [shared contract](../../../../contributing/testing/support/inno-extensibility-modules-testmodule-v1.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b5cbb8cf78f26c7) | Method |
| [`version`](#api-6654c037908bfa4d) | Property |

## Type declaration

<a id="api-a09595c4bc16e786"></a>
<!-- api: T:Inno.Extensibility.Modules.TestModule.ReloadableExtension 567f562eaf27448a72af67464f2194642a5325ca6ff813f98b51c2fe491f5ece -->

```csharp
public sealed class Inno.Extensibility.Modules.TestModule.ReloadableExtension
```

Supplies the first collectible implementation of the stable identity shared with the second fixture generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestModule.V1/ReloadableExtension.cs#L10).

## `#ctor`

<a id="api-2b5cbb8cf78f26c7"></a>
<!-- api: M:Inno.Extensibility.Modules.TestModule.ReloadableExtension.#ctor 34c4aaa316c8d1fa32d93b2d17c4b9968204dd7afed4bd6e6f03616989154d8c -->

```csharp
public Inno.Extensibility.Modules.TestModule.ReloadableExtension.ReloadableExtension()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestModule.V1/ReloadableExtension.cs#L10).

## `version`

<a id="api-6654c037908bfa4d"></a>
<!-- api: P:Inno.Extensibility.Modules.TestModule.ReloadableExtension.version a1c91ee35e7b7bebbacf739b8d5bea92ee5001e0ad265bac2d9240c58857e7a8 -->

```csharp
public int Inno.Extensibility.Modules.TestModule.ReloadableExtension.version { get; }
```

Gets the private dependency's base value without the second generation's increment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9a86549b9ed57ef77d3bcbb8fa78e745cc48ff6b/tests/extensibility/fixtures/Inno.Extensibility.Modules.TestModule.V1/ReloadableExtension.cs#L15).
