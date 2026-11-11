---
title: "BuildArtifactOptions"
description: "Reference for BuildArtifactOptions in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.aaa2ad78c607f7a8
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `BuildArtifactOptions`

This reference describes `BuildArtifactOptions` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IEquatable<Inno.Build.Toolchains.BuildArtifactOptions>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-662e609aa52833f0) | Method |
| [`Deconstruct`](#api-c787c8f7f64de012) | Method |
| [`Equals`](#api-25503ef95aa5a25e) | Method |
| [`Equals`](#api-388bfadd707e7cf5) | Method |
| [`GetHashCode`](#api-8c394dc9694db943) | Method |
| [`op_Equality`](#api-eeba8cd1b63f2bff) | Method |
| [`op_Inequality`](#api-5b5288ef097ead83) | Method |
| [`ToString`](#api-60ada4714df76426) | Method |
| [`buildDirName`](#api-35f08493ed5102bd) | Property |
| [`extensions`](#api-143a1790ea21f3fb) | Property |
| [`libraryTokens`](#api-269053667ca56e1c) | Property |
| [`normalizeOutputName`](#api-efeaea42d4711491) | Property |
| [`requiredPathTokens`](#api-a373ba5017a0805e) | Property |

## Type declaration

<a id="api-aaa2ad78c607f7a8"></a>
<!-- api: T:Inno.Build.Toolchains.BuildArtifactOptions e3c2ce6d03018b31ebe04a39825a8bbb01c6544b3dd551abe09ba1ab40f0e114 -->

```csharp
public sealed record Inno.Build.Toolchains.BuildArtifactOptions : System.IEquatable<Inno.Build.Toolchains.BuildArtifactOptions>
```

Defines the deterministic filter and naming policy used to collect one native product.

**Parameter `buildDirName`:** The dependency-relative directory searched for native build outputs.

**Parameter `libraryTokens`:** File-name tokens that identify artifacts belonging to the product.

**Parameter `extensions`:** The accepted native artifact extensions.

**Parameter `requiredPathTokens`:** Optional normalized path tokens used to reject unrelated intermediate files.

**Parameter `normalizeOutputName`:** The deterministic output naming policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `#ctor`

<a id="api-662e609aa52833f0"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.#ctor(System.String,System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Collections.Generic.IReadOnlyCollection{System.String},System.Func{System.String,System.String,System.String}) adcb33b5988ec12dde23b3f384524dc3a8b1fa0921af5a6567c84acbf1c0416b -->

```csharp
public Inno.Build.Toolchains.BuildArtifactOptions.BuildArtifactOptions(string buildDirName, System.Collections.Generic.IReadOnlyCollection<string> libraryTokens, System.Collections.Generic.IReadOnlyCollection<string> extensions, System.Collections.Generic.IReadOnlyCollection<string>? requiredPathTokens, System.Func<string, string, string> normalizeOutputName)
```

Defines the deterministic filter and naming policy used to collect one native product.

**Parameter `buildDirName`:** The dependency-relative directory searched for native build outputs.

**Parameter `libraryTokens`:** File-name tokens that identify artifacts belonging to the product.

**Parameter `extensions`:** The accepted native artifact extensions.

**Parameter `requiredPathTokens`:** Optional normalized path tokens used to reject unrelated intermediate files.

**Parameter `normalizeOutputName`:** The deterministic output naming policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `Deconstruct`

<a id="api-c787c8f7f64de012"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.Deconstruct(System.String@,System.Collections.Generic.IReadOnlyCollection{System.String}@,System.Collections.Generic.IReadOnlyCollection{System.String}@,System.Collections.Generic.IReadOnlyCollection{System.String}@,System.Func{System.String,System.String,System.String}@) fb4f0b6813f204072b50e625116a6992d30b79193ca5168841b732ad30d128b5 -->

```csharp
public void Inno.Build.Toolchains.BuildArtifactOptions.Deconstruct(out string buildDirName, out System.Collections.Generic.IReadOnlyCollection<string> libraryTokens, out System.Collections.Generic.IReadOnlyCollection<string> extensions, out System.Collections.Generic.IReadOnlyCollection<string>? requiredPathTokens, out System.Func<string, string, string> normalizeOutputName)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `Equals`

<a id="api-25503ef95aa5a25e"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.Equals(Inno.Build.Toolchains.BuildArtifactOptions) 8a8499526653841e4102d28be19e7903206b86299de3c311f498dbe44227bdaa -->

```csharp
public bool Inno.Build.Toolchains.BuildArtifactOptions.Equals(Inno.Build.Toolchains.BuildArtifactOptions? other)
```

Indicates whether the current object is equal to another object of the same type.

**Parameter `other`:** An object to compare with this object.

**Returns:** `true` if the current object is equal to the `other` parameter; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `Equals`

<a id="api-388bfadd707e7cf5"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.Equals(System.Object) a52139428618180b487df3fdc178c7d766d4a6649e8fd47f4458d25ffb4b08d5 -->

```csharp
public override bool Inno.Build.Toolchains.BuildArtifactOptions.Equals(object? obj)
```

Determines whether the specified object is equal to the current object.

**Parameter `obj`:** The object to compare with the current object.

**Returns:** `true` if the specified object  is equal to the current object; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `GetHashCode`

<a id="api-8c394dc9694db943"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.GetHashCode 71215d18c348606b2a97178236a4a351caf0b186adeac8d60bbcef848205aa96 -->

```csharp
public override int Inno.Build.Toolchains.BuildArtifactOptions.GetHashCode()
```

Serves as the default hash function.

**Returns:** A hash code for the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `op_Equality`

<a id="api-eeba8cd1b63f2bff"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.op_Equality(Inno.Build.Toolchains.BuildArtifactOptions,Inno.Build.Toolchains.BuildArtifactOptions) 383924b29e727d1af3379a194083847bb07c0be4db7e59a055cfc52bc8987dde -->

```csharp
public static bool Inno.Build.Toolchains.BuildArtifactOptions.operator ==(Inno.Build.Toolchains.BuildArtifactOptions? left, Inno.Build.Toolchains.BuildArtifactOptions? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `op_Inequality`

<a id="api-5b5288ef097ead83"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.op_Inequality(Inno.Build.Toolchains.BuildArtifactOptions,Inno.Build.Toolchains.BuildArtifactOptions) d27b84956f169cb14da6f2f4ca590ad5753c4ec56df38689163af3c1c23798b4 -->

```csharp
public static bool Inno.Build.Toolchains.BuildArtifactOptions.operator !=(Inno.Build.Toolchains.BuildArtifactOptions? left, Inno.Build.Toolchains.BuildArtifactOptions? right)
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `ToString`

<a id="api-60ada4714df76426"></a>
<!-- api: M:Inno.Build.Toolchains.BuildArtifactOptions.ToString 2feaa01400c59bbe8d855a0218a2314abf2f9455499db308b5080cc477b3f7d5 -->

```csharp
public override string Inno.Build.Toolchains.BuildArtifactOptions.ToString()
```

Returns a string that represents the current object.

**Returns:** A string that represents the current object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L26).

## `buildDirName`

<a id="api-35f08493ed5102bd"></a>
<!-- api: P:Inno.Build.Toolchains.BuildArtifactOptions.buildDirName 20004ed77bab5b4793308b82768baa2c365c3f942ea0b0f843aaa6728ff63655 -->

```csharp
public string Inno.Build.Toolchains.BuildArtifactOptions.buildDirName { get; init; }
```

The dependency-relative directory searched for native build outputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L27).

## `extensions`

<a id="api-143a1790ea21f3fb"></a>
<!-- api: P:Inno.Build.Toolchains.BuildArtifactOptions.extensions db9fc3b3d53b3c272ed5054f369797c6a286f29f21e9cfcecae62bbb722ed800 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<string> Inno.Build.Toolchains.BuildArtifactOptions.extensions { get; init; }
```

The accepted native artifact extensions.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L29).

## `libraryTokens`

<a id="api-269053667ca56e1c"></a>
<!-- api: P:Inno.Build.Toolchains.BuildArtifactOptions.libraryTokens 413219be728a2f193605fb325364aae4daf02eded944d2953c1c678d720bbb62 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<string> Inno.Build.Toolchains.BuildArtifactOptions.libraryTokens { get; init; }
```

File-name tokens that identify artifacts belonging to the product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L28).

## `normalizeOutputName`

<a id="api-efeaea42d4711491"></a>
<!-- api: P:Inno.Build.Toolchains.BuildArtifactOptions.normalizeOutputName 2b91d7e7cbb066ccaa223cacad96bbbf539e650ada5de06c3c14d0c651414286 -->

```csharp
public System.Func<string, string, string> Inno.Build.Toolchains.BuildArtifactOptions.normalizeOutputName { get; init; }
```

The deterministic output naming policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L31).

## `requiredPathTokens`

<a id="api-a373ba5017a0805e"></a>
<!-- api: P:Inno.Build.Toolchains.BuildArtifactOptions.requiredPathTokens 42313a0cf899e3649a5930ed7c9cce29a20ac36462fe60eff872939639f6a2fd -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<string>? Inno.Build.Toolchains.BuildArtifactOptions.requiredPathTokens { get; init; }
```

Optional normalized path tokens used to reject unrelated intermediate files.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/BuildArtifactOptions.cs#L30).
