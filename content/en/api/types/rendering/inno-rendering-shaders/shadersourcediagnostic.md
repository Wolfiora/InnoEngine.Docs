---
title: "ShaderSourceDiagnostic"
description: "Reference for ShaderSourceDiagnostic in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.6586c6dca809d6f2
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: source-clr
contracts:
  - project.inno-rendering-shaders
---
# `ShaderSourceDiagnostic`

This reference describes `ShaderSourceDiagnostic` in `Inno.Rendering.Shaders`. Read the [shared contract](../../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Rendering.Shaders.ShaderSourceDiagnostic>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-28ce6afaa201915c) | Method |
| [`Deconstruct`](#api-0f34ea2538b162fd) | Method |
| [`Equals`](#api-e770877a9641332d) | Method |
| [`Equals`](#api-7cdadb9f11f2ac8a) | Method |
| [`GetHashCode`](#api-c0c9bcfdf51d1dba) | Method |
| [`op_Equality`](#api-0849402f505b8436) | Method |
| [`op_Inequality`](#api-5baf9419f3d4cdc0) | Method |
| [`ToString`](#api-c89f3b045697a086) | Method |
| [`code`](#api-46634a03654b6ea8) | Property |
| [`location`](#api-00b704150cb515be) | Property |
| [`message`](#api-ba6b9afb54f00a5b) | Property |
| [`severity`](#api-f37d64bfb062d8a9) | Property |

## Type declaration

<a id="api-6586c6dca809d6f2"></a>
<!-- api: T:Inno.Rendering.Shaders.ShaderSourceDiagnostic e5a629f349fe0e1d5726a6b8607aef0fe50402d3f3eba76c582b41f3103ae8ce -->

```csharp
public sealed record Inno.Rendering.Shaders.ShaderSourceDiagnostic : System.IEquatable<Inno.Rendering.Shaders.ShaderSourceDiagnostic>
```

Reports a frontend problem without retaining a language-specific exception or parser.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Actionable diagnostic description.

**Parameter `location`:** Original source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `#ctor`

<a id="api-28ce6afaa201915c"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.#ctor(System.String,Inno.Core.Diagnostics.DiagnosticSeverity,System.String,Inno.Rendering.Shaders.ShaderSourcePosition) c56bf11c5ce245099d6f4e90d48ba7c3846022d02ec67443c840544f869e850b -->

```csharp
public Inno.Rendering.Shaders.ShaderSourceDiagnostic.ShaderSourceDiagnostic(string code, Inno.Core.Diagnostics.DiagnosticSeverity severity, string message, Inno.Rendering.Shaders.ShaderSourcePosition location)
```

Reports a frontend problem without retaining a language-specific exception or parser.

**Parameter `code`:** Stable diagnostic code.

**Parameter `severity`:** Diagnostic severity.

**Parameter `message`:** Actionable diagnostic description.

**Parameter `location`:** Original source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `Deconstruct`

<a id="api-0f34ea2538b162fd"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.Deconstruct(System.String@,Inno.Core.Diagnostics.DiagnosticSeverity@,System.String@,Inno.Rendering.Shaders.ShaderSourcePosition@) e43f6bc69e41b7ab41fc79038eda9ba7502d4de915b161b00697189fbe3df480 -->

```csharp
public void Inno.Rendering.Shaders.ShaderSourceDiagnostic.Deconstruct(out string code, out Inno.Core.Diagnostics.DiagnosticSeverity severity, out string message, out Inno.Rendering.Shaders.ShaderSourcePosition location)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `Equals`

<a id="api-e770877a9641332d"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.Equals(Inno.Rendering.Shaders.ShaderSourceDiagnostic) 301a2f8f055c55009fbf29459ef08408b859a8aa7cbe69a6431c49f6502c2508 -->

```csharp
public bool Inno.Rendering.Shaders.ShaderSourceDiagnostic.Equals(Inno.Rendering.Shaders.ShaderSourceDiagnostic? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `Equals`

<a id="api-7cdadb9f11f2ac8a"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.Equals(System.Object) 42232f4671508021027276ec4d8ed35fb3eab3ef2714407f4ce5cc86c9e92360 -->

```csharp
public override bool Inno.Rendering.Shaders.ShaderSourceDiagnostic.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `GetHashCode`

<a id="api-c0c9bcfdf51d1dba"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.GetHashCode 64c2adeeab755432a77d9c0a9f3d4d656af9f4577bcb8b503bd8dfee9373755c -->

```csharp
public override int Inno.Rendering.Shaders.ShaderSourceDiagnostic.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `op_Equality`

<a id="api-0849402f505b8436"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.op_Equality(Inno.Rendering.Shaders.ShaderSourceDiagnostic,Inno.Rendering.Shaders.ShaderSourceDiagnostic) e36fe768cdf29c0344ebda021ae12979c1de155cf5f0bf06b3df8cd95ed908f4 -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourceDiagnostic.operator ==(Inno.Rendering.Shaders.ShaderSourceDiagnostic? left, Inno.Rendering.Shaders.ShaderSourceDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `op_Inequality`

<a id="api-5baf9419f3d4cdc0"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.op_Inequality(Inno.Rendering.Shaders.ShaderSourceDiagnostic,Inno.Rendering.Shaders.ShaderSourceDiagnostic) 59496499d4f35e7734066f7e01b6980a1e4fa310cd95f680a368a37d17a3211a -->

```csharp
public static bool Inno.Rendering.Shaders.ShaderSourceDiagnostic.operator !=(Inno.Rendering.Shaders.ShaderSourceDiagnostic? left, Inno.Rendering.Shaders.ShaderSourceDiagnostic? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `ToString`

<a id="api-c89f3b045697a086"></a>
<!-- api: M:Inno.Rendering.Shaders.ShaderSourceDiagnostic.ToString 91ab5190ca6c69fdd3c8096334b6fe6bc8f4f2e7a583af4259369b5a978e4116 -->

```csharp
public override string Inno.Rendering.Shaders.ShaderSourceDiagnostic.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L41).

## `code`

<a id="api-46634a03654b6ea8"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceDiagnostic.code cb4408656d1fa98d23358f829160c5ae98807c05664b5e632db6f9a9a0285dea -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceDiagnostic.code { get; init; }
```

Stable diagnostic code.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L42).

## `location`

<a id="api-00b704150cb515be"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceDiagnostic.location a084c9aab3a1db887bd2bde048218c19ec4f8d6ff7279153240b30f1013bdaa9 -->

```csharp
public Inno.Rendering.Shaders.ShaderSourcePosition Inno.Rendering.Shaders.ShaderSourceDiagnostic.location { get; init; }
```

Original source position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L45).

## `message`

<a id="api-ba6b9afb54f00a5b"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceDiagnostic.message 676ab51e584c6e3e1c8847918ea8f5ad5aefd57ed1c05b25a8dd0408f086f947 -->

```csharp
public string Inno.Rendering.Shaders.ShaderSourceDiagnostic.message { get; init; }
```

Actionable diagnostic description.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L44).

## `severity`

<a id="api-f37d64bfb062d8a9"></a>
<!-- api: P:Inno.Rendering.Shaders.ShaderSourceDiagnostic.severity 86c686252a266b6650b52c4bcda5663fa91ba9d27ead48d32e1754e9479aa6ec -->

```csharp
public Inno.Core.Diagnostics.DiagnosticSeverity Inno.Rendering.Shaders.ShaderSourceDiagnostic.severity { get; init; }
```

Diagnostic severity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/9d555bb0a7ceb93ae8973cbafceb675e493e1246/src/services/rendering/Inno.Rendering.Shaders/Sources/IShaderSourceFrontend.cs#L43).
