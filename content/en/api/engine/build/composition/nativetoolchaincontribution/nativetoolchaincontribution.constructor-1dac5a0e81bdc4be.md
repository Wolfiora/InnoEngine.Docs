---
uid: api.1dac5a0e81bdc4bece1e7d476dbb9644f2725120d6ebb62e0d80ab883092eb47
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.NativeToolchainContribution.#ctor(Inno.Build.PlatformTargetDescriptor,Inno.Build.Toolchains.INativeToolchainProvider,System.Collections.Generic.IReadOnlyList{Inno.Build.Composition.NativeProductContribution},Inno.Build.Toolchains.INativeBindingGenerator)"
source: xml
reviewed: c54f44d2ae525531630cb7193c9b958e4d050016a0ff58abe0d004e39090e140
title: "NativeToolchainContribution.Constructor"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Binds immutable target facts to the provider that owns SDK resolution.

## Parameters

**Parameter `descriptor`:** The exact target and ABI supported by this contribution.

**Parameter `provider`:** The borrowed provider that resolves executable tools for that target.

**Parameter `nativeProducts`:** Optional implemented native-only products, without game publication registration.

**Parameter `bindingGenerator`:** The target-owned generator, or null when the contribution generates no bindings.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required contribution member is null.
