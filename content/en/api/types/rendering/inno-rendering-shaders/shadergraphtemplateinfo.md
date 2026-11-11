---
title: "ShaderGraphTemplateInfo"
description: "Reference for ShaderGraphTemplateInfo in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.9d53d85c3d361b24
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderGraphTemplateInfo`

This reference describes `ShaderGraphTemplateInfo` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderGraphTemplateInfo>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e9fc80b7da58c1b1) | Method |
| [`Deconstruct`](#api-cd18068a3e1d1ef2) | Method |
| [`Equals`](#api-00b478a94970fcc4) | Method |
| [`Equals`](#api-55d2867dc8b73e08) | Method |
| [`GetHashCode`](#api-5c72be94a8fea39f) | Method |
| [`op_Equality`](#api-f1bdc6aea9cbde9d) | Method |
| [`op_Inequality`](#api-4bfe24237a5dbda7) | Method |
| [`ToString`](#api-3f687d4c379df4c7) | Method |
| [`displayName`](#api-331e07fae6525a88) | Property |
| [`id`](#api-88fda148f300bd28) | Property |

## Type declaration

<a id="api-9d53d85c3d361b24"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderGraphTemplateInfo 2ad8c359aabbb84d411b8cacc534b1299f0ddd5848f3066890d5f56af397f82c -->

```csharp
public sealed record Inno.Rendering.Shaders.ShaderGraphTemplateInfo : System.IEquatable<Inno.Rendering.Shaders.ShaderGraphTemplateInfo>
```

Describes a creation menu item without retaining a plugin instance.

**Parameter `id`:** Stable template identity.

**Parameter `displayName`:** User-facing label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `#ctor`

<a id="api-e9fc80b7da58c1b1"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.#ctor(System.String,System.String) 44fb344ca63c27bd233763fac4153f72916aa4b888cc2cebcdd3f857244612d6 -->

```csharp
public Inno.Rendering.Shaders.ShaderGraphTemplateInfo.ShaderGraphTemplateInfo(string id, string displayName)
```

Describes a creation menu item without retaining a plugin instance.

**Parameter `id`:** Stable template identity.

**Parameter `displayName`:** User-facing label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `Deconstruct`

<a id="api-cd18068a3e1d1ef2"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.Deconstruct(System.String@,System.String@) 6c124882d403827fd748be028595d5c805a613515f2a32a81e8f3b03f51e61de -->

```csharp
public void Inno.Rendering.Shaders.ShaderGraphTemplateInfo.Deconstruct(out string id, out string displayName)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `Equals`

<a id="api-00b478a94970fcc4"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.Equals(Inno.Rendering.Shaders.ShaderGraphTemplateInfo) bd432a0ab71bc24424c61c5ff70b4da37771622843e00f68445ddb646ef8cbea -->

```csharp
public bool Inno.Rendering.Shaders.ShaderGraphTemplateInfo.Equals(Inno.Rendering.Shaders.ShaderGraphTemplateInfo? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `Equals`

<a id="api-55d2867dc8b73e08"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.Equals(System.Object) 89b18468e0dd6e63b957d66db99e200c2d41f68cc2ce18c07617f0c95524d91a -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderGraphTemplateInfo.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `GetHashCode`

<a id="api-5c72be94a8fea39f"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.GetHashCode fa35af836c7dcdbc3c44e6eb0a6cb740bb331c95d0b6513b6bc0846e48b962a4 -->

```csharp
public override int Inno.Rendering.Shaders.ShaderGraphTemplateInfo.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `op_Equality`

<a id="api-f1bdc6aea9cbde9d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.op_Equality(Inno.Rendering.Shaders.ShaderGraphTemplateInfo,Inno.Rendering.Shaders.ShaderGraphTemplateInfo) c51cf25cf5c8f343118e386606056ea72651557bf0ccf7efc108bcde85758620 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderGraphTemplateInfo.operator ==(Inno.Rendering.Shaders.ShaderGraphTemplateInfo? left, Inno.Rendering.Shaders.ShaderGraphTemplateInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `op_Inequality`

<a id="api-4bfe24237a5dbda7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.op_Inequality(Inno.Rendering.Shaders.ShaderGraphTemplateInfo,Inno.Rendering.Shaders.ShaderGraphTemplateInfo) ba12e2eea333bf864fc9d35016782d9a170f157285b9eae0ca70b9832b4b4afc -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderGraphTemplateInfo.operator !=(Inno.Rendering.Shaders.ShaderGraphTemplateInfo? left, Inno.Rendering.Shaders.ShaderGraphTemplateInfo? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `ToString`

<a id="api-3f687d4c379df4c7"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.ToString 1e8e591812b72796142de7521cd904dcf3be9a923bea47eb5031bc4f84729556 -->

```csharp
public override string Inno.Rendering.Shaders.ShaderGraphTemplateInfo.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L20).

## `displayName`

<a id="api-331e07fae6525a88"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.displayName 9f19744ee7af8911cc228388ceb4f57f4a2bebb0b686f73bfdaab7c10bcc65bd -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphTemplateInfo.displayName { get; init; }
```

User-facing label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L22).

## `id`

<a id="api-88fda148f300bd28"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderGraphTemplateInfo.id 06272fe17264962f10da05d7275c45ff7def54b91536d09163368fa6347e1981 -->

```csharp
public string Inno.Rendering.Shaders.ShaderGraphTemplateInfo.id { get; init; }
```

Stable template identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Templates/ShaderGraphTemplateRegistry.cs#L21).
