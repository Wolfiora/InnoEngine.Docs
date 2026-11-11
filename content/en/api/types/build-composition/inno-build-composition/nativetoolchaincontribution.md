---
title: "NativeToolchainContribution"
description: "Reference for NativeToolchainContribution in Inno.Build.Composition."
uid: api.inno.build.composition.bed4b4c380091c3e
kind: api
owners:
  - Inno.Build.Composition
apiSurface: source-clr
contracts:
  - project.inno-build-composition
---
# `NativeToolchainContribution`

This reference describes `NativeToolchainContribution` in `Inno.Build.Composition`. Read the [shared contract](../../../projects/inno-build-composition.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6ccf850b76b4392d) | Method |
| [`bindingGenerator`](#api-1e7ff35d7c3f3edc) | Property |
| [`descriptor`](#api-7b7678030fc8c857) | Property |
| [`nativeProducts`](#api-c068fe51842ec0ab) | Property |
| [`provider`](#api-4178bcc627547c25) | Property |

## Type declaration

<a id="api-bed4b4c380091c3e"></a>
<!-- api: T:Inno.Build.Composition.NativeToolchainContribution 2e1e6ed94c034fc718239f86f4c765cfd83206b3bb1594412cf8c955dfdd6894 -->

```csharp
public sealed class Inno.Build.Composition.NativeToolchainContribution
```

Registers an implemented native SDK capability without declaring a complete game product.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeToolchainContribution.cs#L12).

## `#ctor`

<a id="api-6ccf850b76b4392d"></a>
<!-- api: M:Inno.Build.Composition.NativeToolchainContribution.#ctor(Inno.Build.PlatformTargetDescriptor,Inno.Build.Toolchains.INativeToolchainProvider,System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeProductContribution},Inno.Build.Toolchains.INativeBindingGenerator) 5dd681123b38c8dd9f143aaf0b8035343f5fd405fe24a2684ac7569cc3185665 -->

```csharp
public Inno.Build.Composition.NativeToolchainContribution.NativeToolchainContribution(Inno.Build.PlatformTargetDescriptor descriptor, Inno.Build.Toolchains.INativeToolchainProvider provider, System.Collections.Generic.IReadOnlyList<Inno.Build.Composition.NativeProductContribution>? nativeProducts = null, Inno.Build.Toolchains.INativeBindingGenerator? bindingGenerator = null)
```

Binds immutable target facts to the provider that owns SDK resolution.

**Parameter `descriptor`:** The exact target and ABI supported by this contribution.

**Parameter `provider`:** The borrowed provider that resolves executable tools for that target.

**Parameter `nativeProducts`:** Optional implemented native-only products, without game publication registration.

**Parameter `bindingGenerator`:** The target-owned generator, or null when the contribution generates no bindings.

**Throws `System.ArgumentNullException`:** A required contribution member is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeToolchainContribution.cs#L32).

## `bindingGenerator`

<a id="api-1e7ff35d7c3f3edc"></a>
<!-- api: P:Inno.Build.Composition.NativeToolchainContribution.bindingGenerator 9c3c8d7161f7b07733314048ef9e76ea081577b1654e4ad179227859af4df6db -->

```csharp
public Inno.Build.Toolchains.INativeBindingGenerator? Inno.Build.Composition.NativeToolchainContribution.bindingGenerator { get; }
```

Gets the target-owned generator, or null when no binding capability is registered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeToolchainContribution.cs#L67).

## `descriptor`

<a id="api-7b7678030fc8c857"></a>
<!-- api: P:Inno.Build.Composition.NativeToolchainContribution.descriptor 69d673b7e59887a756282c2898cdabc7a4ae997571aeb5acf4c53a27566fdcd6 -->

```csharp
public Inno.Build.PlatformTargetDescriptor Inno.Build.Composition.NativeToolchainContribution.descriptor { get; }
```

Gets explicit target facts independently of the current execution machine.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeToolchainContribution.cs#L53).

## `nativeProducts`

<a id="api-c068fe51842ec0ab"></a>
<!-- api: P:Inno.Build.Composition.NativeToolchainContribution.nativeProducts 96f39bd6592925294559f3023fbd348eb305fecfaffb8922e8f7c86b0ec43d1d -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Composition.NativeProductContribution> Inno.Build.Composition.NativeToolchainContribution.nativeProducts { get; }
```

Gets explicitly implemented native-only product closures keyed by stable product identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeToolchainContribution.cs#L62).

## `provider`

<a id="api-4178bcc627547c25"></a>
<!-- api: P:Inno.Build.Composition.NativeToolchainContribution.provider 4917882d008bb8e062233edecbb93bca9db66ace55b39e9225328f95504bd99e -->

```csharp
public Inno.Build.Toolchains.INativeToolchainProvider Inno.Build.Composition.NativeToolchainContribution.provider { get; }
```

Gets the registered SDK boundary; registration does not start tools or inspect the environment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/composition/Inno.Build.Composition/NativeToolchainContribution.cs#L58).
