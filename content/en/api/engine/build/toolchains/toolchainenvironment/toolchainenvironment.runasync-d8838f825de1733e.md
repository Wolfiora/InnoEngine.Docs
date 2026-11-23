---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d8838f825de1733ebbf9ceff81894ab3c28a69a1d11e98ebd7c6e5b403585661
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken)
title: ToolchainEnvironment.RunAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: ae93e0615f3eab1770d9d03934da44bdfbd3b7a55640d83b2eed138e4e2e3e0b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The operation owning execution statistics and frozen recipe inputs.

**Parameter `fileName`:** The absolute executable declared by the recipe; no host-native SDK is inferred.

**Parameter `arguments`:** Individual arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The owned source or intermediate directory.

**Parameter `environment`:** The frozen environment supplied by the selected SDK resolver.

**Parameter `cancellationToken`:** Cancels execution and drains the complete process tree.

## Returns

Completion after successful exit and output delivery.

## Exceptions

**Exception `T:System.ArgumentException`:** The executable is not an absolute declared tool path.

**Exception `T:System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** Execution was canceled.
