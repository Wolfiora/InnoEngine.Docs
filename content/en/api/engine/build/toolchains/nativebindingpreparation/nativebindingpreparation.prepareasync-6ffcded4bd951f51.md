---
uid: api.6ffcded4bd951f515bc2a7af7d187d1a5dac99faf71f2248b90bfa5f835be78c
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingPreparation.PrepareAsync(Inno.Build.Toolchains.NativeBuildContext,System.Collections.Generic.IReadOnlyList{Inno.Build.Toolchains.NativeComponentDescriptor},System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions})"
source: xml
reviewed: d76a51361fbdf97b93191ff605a32fe83acd25f2e68b9202acad01b89a84f37c
title: "NativeBindingPreparation.PrepareAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Requests one binding batch for all generated components of a product.

**Parameter `context`:** The operation owning a frozen target selection and configured generator.

**Parameter `components`:** The declared component closure; components without bindings are excluded.

**Parameter `cancellationToken`:** Cancels generation and drains active work before returning.

**Parameter `componentOptions`:** Exact per-owner component choices, or null for component defaults.

**Returns:** An owned generation closure, empty for a product without bindings. Retain it through final consumption.

**Exception `T:System.InvalidOperationException`:** The tool selection or required binding generator is absent.
