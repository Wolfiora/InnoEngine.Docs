---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.65c7624badca55399dbf27b8651b38ce94f10ace3b38c17274a0fb8fe6782700
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken)
title: NativeCMakeExecutor.BuildAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 0b8287b325e02246c0c759504536a9583dd8f39df062d950e61aa9424223a81b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The recipe-owned producer scope supplied by NativeArtifactPublisher, with frozen tools and inputs.

**Parameter `component`:** The unique component owner of target-scoped intermediate output.

**Parameter `sourceDirectory`:** The declared component-owned source directory, resolved to the operation's independent copy.

**Parameter `target`:** The declared CMake build target, or null for the complete selected project.

**Parameter `componentArguments`:** Semantic component options; SDK and generator arguments come from the selection.

**Parameter `cancellationToken`:** Cancels and drains the complete tool process tree.

## Returns

The owned CMake build directory after successful compilation.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Tools are unassigned or configuration or compilation fails.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.ArgumentException`:** Product definitions conflict with a semantic definition owned by the component recipe.
