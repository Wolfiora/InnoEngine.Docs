---
title: "NativeBuildRecipe"
description: "Reference for NativeBuildRecipe in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.752feff58775ec11
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBuildRecipe`

This reference describes `NativeBuildRecipe` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6482135288687ef4) | Method |
| [`CreateForComponent`](#api-5b203a39438fe4a6) | Method |
| [`WithDependency`](#api-c92ebb85860823eb) | Method |
| [`component`](#api-7991b43a51424a43) | Property |
| [`declarations`](#api-abf2dada029cc893) | Property |
| [`inputs`](#api-405dcb1846233514) | Property |
| [`owner`](#api-51099ec5883718f3) | Property |
| [`targetId`](#api-d5a3c076f3cdd650) | Property |

## Type declaration

<a id="api-752feff58775ec11"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBuildRecipe 4252f6665f54b024700f82dfa580794425a384131efc86fb824a7a56dffd040a -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBuildRecipe
```

Freezes a component's input closure, ordered tool selection and intermediate owner.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L11).

## `#ctor`

<a id="api-6482135288687ef4"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildRecipe.#ctor(Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeBuildInput},System.Collections.Generic.IEnumerable{System.String}) cfd209a11f34690c60b1d0b399eedc370dc83945bf066e216f837fd594797709 -->

```csharp
public Inno.Build.Toolchains.NativeBuildRecipe.NativeBuildRecipe(Inno.Build.Toolchains.NativeComponentDescriptor owner, string component, string targetId, System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeBuildInput> inputs, System.Collections.Generic.IEnumerable<string> declarations)
```

Creates a complete recipe without inferring implementation identity from an assembly MVID.

**Parameter `owner`:** The explicit component descriptor identifying source and intermediate owners.

**Parameter `component`:** The component's portable artifact path segment.

**Parameter `targetId`:** The ABI's portable artifact path segment.

**Parameter `inputs`:** The complete source, generator, executor and SDK input closure.

**Parameter `declarations`:** Ordered compiler, linker, include-search and non-file inputs; order is significant.

**Throws `System.ArgumentException`:** A component or target is not a portable segment, or an input is null.

**Throws `System.ArgumentNullException`:** A required owner or collection is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L38).

## `CreateForComponent`

<a id="api-5b203a39438fe4a6"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildRecipe.CreateForComponent(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String}) de41f0b55ab1041b6bd01c84380fab4213bcbacc99d7c76ac965800290f203d9 -->

```csharp
public static Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.NativeBuildRecipe.CreateForComponent(Inno.Build.Toolchains.NativeBuildContext context, Inno.Build.Toolchains.NativeComponentDescriptor owner, string component, string targetId, System.Collections.Generic.IEnumerable<string> inputPaths, System.Collections.Generic.IEnumerable<string> declarations, System.Collections.Generic.IEnumerable<string> implementationPaths)
```

Declares a component's source, execution and SDK inputs before binding outputs need to exist.
The artifact publisher attaches the exact selected generation before hashing or compiling.

**Parameter `context`:** The operation's checkout and previously selected host tools.

**Parameter `owner`:** The component project whose implementation participates in recipe identity.

**Parameter `component`:** The native component artifact segment.

**Parameter `targetId`:** The selected target ABI.

**Parameter `inputPaths`:** All handwritten native sources, component tools and build definitions.
Selected managed bindings and generated bridges are attached by the publisher.

**Parameter `declarations`:** Ordered component arguments and generation identities.

**Parameter `implementationPaths`:** The complete explicit implementation inputs used by this component, excluding unrelated product code.

**Returns:** The frozen component declaration, without generating bindings or reading generated output.
Unrelated build and Editor implementation assemblies do not affect it.

**Throws `System.IO.FileNotFoundException`:** A required executor or component project is absent from the checkout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L120).

## `WithDependency`

<a id="api-c92ebb85860823eb"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBuildRecipe.WithDependency(Inno.Build.Toolchains.NativeBuildInput,System.String) 7773db98dcb83fa9fcb29fd27face79f19c631c75f49d8e2c8ba0b164ea2bd6e -->

```csharp
public Inno.Build.Toolchains.NativeBuildRecipe Inno.Build.Toolchains.NativeBuildRecipe.WithDependency(Inno.Build.Toolchains.NativeBuildInput input, string fingerprint)
```

Adds one explicitly selected published dependency while preserving the recipe's frozen execution tools.

**Parameter `input`:** The dependency file whose bytes participate in compilation.

**Parameter `fingerprint`:** The immutable dependency artifact identity selected by the product.

**Returns:** A new declaration with the dependency input and identity; this recipe is unchanged.

**Throws `System.ArgumentException`:** The dependency identity is empty.

**Throws `System.ArgumentNullException`:** The input is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L190).

## `component`

<a id="api-7991b43a51424a43"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildRecipe.component 81936fa274ed45c9794e778e6b13044ec21dde05ebb63e1fe0c1ee71a0519a77 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildRecipe.component { get; }
```

Gets the component's artifact path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L70).

## `declarations`

<a id="api-abf2dada029cc893"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildRecipe.declarations e977b2051934e358e0b212393bfc327daf14afcf95a1335e088b280880c8411f -->

```csharp
public System.Collections.Generic.IReadOnlyList<string> Inno.Build.Toolchains.NativeBuildRecipe.declarations { get; }
```

Gets ordered non-file inputs; callers must explicitly sort unordered metadata before construction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L85).

## `inputs`

<a id="api-405dcb1846233514"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildRecipe.inputs 366d48448c582ddc9e3c834da3603d0f152a2d01af691fe54bca217afd3d395b -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeBuildInput> Inno.Build.Toolchains.NativeBuildRecipe.inputs { get; }
```

Gets the frozen declarations of physical inputs and their logical identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L80).

## `owner`

<a id="api-51099ec5883718f3"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildRecipe.owner ca9018e1b6ce150103d80cb513c3c0f3f3d2ac8a40e0d739c469865db7eb52ca -->

```csharp
public Inno.Build.Toolchains.NativeComponentDescriptor Inno.Build.Toolchains.NativeBuildRecipe.owner { get; }
```

Gets the declared intermediate owner independently of assembly location and MVID.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L65).

## `targetId`

<a id="api-d5a3c076f3cdd650"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBuildRecipe.targetId bc075b282d2d1380f16565052d71495391bd91e20bfc8bf931448bfc0c001f70 -->

```csharp
public string Inno.Build.Toolchains.NativeBuildRecipe.targetId { get; }
```

Gets the target ABI's artifact path segment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBuildRecipe.cs#L75).
