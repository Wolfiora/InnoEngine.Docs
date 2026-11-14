---
uid: api.c5ce93af6748567fbbb6c912929bbd5448a1a8c15082c85f07f8485e15d809a6
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: 099c9591e6b0c7bb73008a87faabaa781ca800c68b44c6051e06390ec82d0fc9
title: "ToolchainEnvironment.RunAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Executes a declared absolute tool with an explicitly resolved SDK environment and records the operation cost.

## Parameters

**Parameter `context`:** The operation owning execution statistics and frozen recipe inputs.

**Parameter `fileName`:** The absolute executable declared by the recipe; no host-native SDK is inferred.

**Parameter `arguments`:** Individual arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The owned source or intermediate directory.

**Parameter `cancellationToken`:** Cancels execution and drains the complete process tree.

**Parameter `environment`:** The frozen environment supplied by the selected SDK resolver.

## Returns

Completion after successful exit and output delivery.

## Exceptions

**Exception `T:System.ArgumentException`:** The executable is not an absolute declared tool path.

**Exception `T:System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** Execution was canceled.
