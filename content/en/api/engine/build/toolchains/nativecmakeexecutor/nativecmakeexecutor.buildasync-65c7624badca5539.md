---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.65c7624badca55399dbf27b8651b38ce94f10ace3b38c17274a0fb8fe6782700
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeCMakeExecutor.BuildAsync(Inno.Build.Toolchains.NativeBuildContext,Inno.Build.Toolchains.NativeComponentDescriptor,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken)
title: NativeCMakeExecutor.BuildAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: ff0a67d44b17b6c0f7db21ca2b0b70e420f6de0e721ae115ad07591efa867d60
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
