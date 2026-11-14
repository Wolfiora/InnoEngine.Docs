---
uid: api.1882ebf94499eb62c010c5910a04d301e5ba2af6b582e5a289bfb76a1b6bd6cb
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ProductNativeBuildStep.#ctor(System.String,Inno.Build.Toolchains.NativeComponentDescriptor,Inno.Build.Toolchains.NativeComponentBuildOptions,System.Collections.Generic.IReadOnlyList{System.String},System.Func{Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBuildProduct},System.Threading.CancellationToken,System.Threading.Tasks.Task{Inno.Build.Toolchains.NativeBuildProduct}},System.Func{Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe},System.Func{System.String,System.String,System.String},System.String,System.Func{Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeBuildRecipe,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeBuildProduct},Inno.Build.Toolchains.NativeBuildRecipe})"
source: xml
reviewed: d75606164c3eb854d7d32d3ec8fed2eda4a25c6335e9b4ad69876733e648dba5
title: "ProductNativeBuildStep.Constructor"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Freezes a component step without embedding any backend list in the shared executor.

**Parameter `id`:** The expected published component identity.

**Parameter `component`:** The unique source and recipe owners.

**Parameter `options`:** Explicit product linkage, ordered component parameters and their input closure.

**Parameter `dependencies`:** Earlier component identities required by this operation.

**Parameter `build`:** The awaited standalone producer, or null when the component is executed by a static aggregate.

**Parameter `createRecipe`:** Declares the standalone producer's source inputs without creating generated outputs, or null for a component whose complete source definition is owned by a static aggregate.

**Parameter `deploymentPath`:** Maps a relative output and target to a deployment path, or null for build-only inputs.

**Parameter `configuration`:** An explicit component configuration, or null to use the product configuration.

**Parameter `bindDependencies`:** Optional backend-owned transformation adding the exact published dependency inputs to its source recipe. It must not generate outputs or execute tools.

**Exception `T:System.ArgumentException`:** The identity or dependency set is invalid.

**Exception `T:System.ArgumentNullException`:** A required owner, producer or path policy is null.
